import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiPen, mdiPencilOffOutline, mdiTrashCan } from '@mdi/js';

import styles from './EditProduct.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import ImageModal from '../../../components/Modal/ImageModal';
import SaveButton from '../../../components/SaveButton';
import TextArea from '../../../components/TextArea';
import Select from '../../../components/Select';
import Editor from '../../../components/Editor';
import AddProductModal from '../../../components/Modal/AddProductModal';
import api from '../../../utils/api';
import { useParams } from 'react-router-dom';
import { notify } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function EditProduct() {
    const [imageUrl, setImageUrl] = useState();
    const [modal, setModal] = useState(false);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [product, setProduct] = useState({
        name: '',
        shortDescription: '',
        fullDescription: '',
        material: '',
        origin: '',
        thumbnail: '',
        percentDiscount: 0,
        categoryId: '',
        brandId: '',
    });
    const [productImage, setProductImage] = useState();
    const [productDetail, setProductDetail] = useState({
        image: '',
        color: '',
        price: '',
        productId: '',
        listProductDetailSizes: [],
    });
    const [productDetailImage, setProductDetailImage] = useState();
    const [listProductDetail, setListProductDetail] = useState([]);
    const [listProductDetailImage, setListProductDetailImage] = useState([]);
    const [listProductDetailSize, setListProductDetailSize] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [listRemovedProductDetail, setListRemovedProductDetail] = useState([]);

    const navigate = useNavigate();
    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/product/${id}`);
        setProduct(result.data);
        setListProductDetail(result.data.listProductDetail);
        setListProductDetailImage(() => {
            const temp = [];
            result.data.listProductDetail.forEach((item) => {
                temp.push(item.image);
            });
            return temp;
        });
        setImageUrl('http://localhost:8080/getimage/products/' + result.data.thumbnail);
    };

    useEffect(() => {
        render();
    }, []);

    const getCategories = async () => {
        let result = await api.getRequest(`/category/get-all`);
        if (result.statusCode === 200) setCategories(result.data);
    };

    const getBrands = async () => {
        let result = await api.getRequest(`/brand/get-all`);
        if (result.statusCode === 200) setBrands(result.data);
    };

    useEffect(() => {
        getCategories();
        getBrands();
    }, []);

    const handleInputChange = (e) => {
        setProduct((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImageUrl(reader.result);
            setProduct((prev) => ({ ...prev, thumbnail: file.name }));
            setProductImage(file);
        };
        if (!!file) reader.readAsDataURL(file);
        else setImageUrl(null);
    };

    const handleRemoveProductDetail = (item, index) => {
        setListProductDetail((prev) => {
            const temp = [...prev];
            temp.splice(index, 1);
            return temp;
        });
        setListProductDetailImage((prev) => {
            const temp = [...prev];
            temp.splice(index, 1);
            return temp;
        });
        if (!!item.id) {
            setListRemovedProductDetail((prev) => {
                const temp = [...prev];
                temp.push(item.id);
                return temp;
            });
        }
    };

    const handleSubmit = async () => {
        let formData;
        let result;
        let blob;
        let json;
        await api.putRequest('/product', product);
        if (!!productImage) {
            formData.append('thumbnail', productImage);
            await api.uploadFileRequest('/product/updateThumbnail', formData);
        }

        //Save productDetail
        listProductDetail.forEach(async (item, index) => {
            if (!item.productId) {
                item.productId = product.id;
                json = JSON.stringify(item);
                blob = new Blob([json], {
                    type: 'application/json',
                });
                formData = new FormData();
                formData.append('productDetail', blob);
                formData.append('image', listProductDetailImage[index]);
                result = await api.uploadFileRequest('/product-detail', formData);
                if (result.statusCode === 200) {
                    item.listProductDetailSizes.forEach(async (item) => {
                        item = { size: item.size, productDetailId: result.data };
                        result = await api.postRequest('/product-detail-size', item);
                    });
                }
            } else {
                if (typeof listProductDetailImage[index] === 'object') {
                    formData = new FormData();
                    formData.append('image', listProductDetailImage[index]);
                    result = await api.uploadFileRequest('/uploadimage/product_details', formData);
                }
                await api.putRequest('/product-detail', item);
                item.listProductDetailSizes.forEach(async (_item) => {
                    _item = { size: _item.size, productDetailId: item.id };
                    await api.deleteRequest(`/product-detail-size/${item.id}`);
                    await api.postRequest('/product-detail-size', _item);
                });
            }
        });
        await api.postRequest('/product-detail/delete-batch', listRemovedProductDetail);
        notify('Lưu thành công');
        navigate('/admin/product');
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý sản phẩm" detail="Sửa sản phẩm">
                <Input value={product.name} onChange={handleInputChange} label="Tên sản phẩm" name="name" />
                <Input onChange={handleChangeFile} label="Hình ảnh" type="file" width="30%" name="thumbnail" />
                <ImageModal style={{ width: '200px', height: '110px' }} imageUrl={imageUrl} alt="" />
                <Select
                    value={product.categoryId}
                    onChange={handleInputChange}
                    label="Danh mục"
                    array={categories}
                    name="categoryId"
                />
                <Select
                    value={product.brandId}
                    onChange={handleInputChange}
                    label="Thương hiệu"
                    array={brands}
                    name="brandId"
                />
                <Input
                    value={product.material}
                    onChange={handleInputChange}
                    label="Chất liệu"
                    width="33.33%"
                    name="material"
                />
                <Input
                    value={product.origin}
                    onChange={handleInputChange}
                    label="Xuất xứ"
                    width="33.33%"
                    name="origin"
                />
                <Input
                    value={product.percentDiscount}
                    onChange={handleInputChange}
                    label="Giảm giá (%)"
                    width="33.33%"
                    type="number"
                    name="percentDiscount"
                />
                <TextArea
                    value={product.shortDescription}
                    onChange={handleInputChange}
                    label="Mô tả ngắn"
                    name="shortDescription"
                />
                <Editor
                    content={product.fullDescription}
                    onChange={handleInputChange}
                    label="Mô tả chi tiết"
                    name="fullDescription"
                />
                <div style={{ border: '1px solid #000', width: '100%', margin: '30px 0' }}></div>
                <div className={styles.title}>Danh sách chi tiết sản phẩm</div>
                <button
                    onClick={() => {
                        setModal(true);
                        setEditIndex(null);
                    }}
                    className={styles.btn_add}
                >
                    +
                </button>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Hình ảnh</th>
                            <th>Màu sắc</th>
                            <th>Kích cỡ</th>
                            <th>Giá</th>
                            <th>Tồn kho</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listProductDetail.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <ImageModal
                                        style={{ height: '50px' }}
                                        imageUrl={
                                            typeof listProductDetailImage[index] === 'object'
                                                ? URL.createObjectURL(listProductDetailImage[index])
                                                : 'http://localhost:8080/getimage/product_details/' + item.image
                                        }
                                    />
                                </td>
                                <td>{item.color}</td>
                                <td style={{ maxWidth: '500px' }}>
                                    {item.listProductDetailSizes.length > 0 ? (
                                        item.listProductDetailSizes.map((item, index) => (
                                            <>
                                                {index > 0 && ', '}
                                                {item.size}
                                            </>
                                        ))
                                    ) : (
                                        <i>Chưa thêm size</i>
                                    )}
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    {item.listProductDetailSizes.map((item, index) => (
                                        <>
                                            {index > 0 && ', '}
                                            {item.quantity}
                                        </>
                                    ))}
                                </td>
                                <td>
                                    {item.listProductDetailSizes.reduce((acc, item) => {
                                        return acc + item.quantity;
                                    }, 0) > 0 ? (
                                        <Icon path={mdiPencilOffOutline} size={1.5} />
                                    ) : (
                                        <>
                                            <span
                                                onClick={() => {
                                                    setModal(true);
                                                    setEditIndex(index);
                                                }}
                                                style={{ marginRight: '20px', color: 'blue', cursor: 'pointer' }}
                                            >
                                                <Icon path={mdiPen} size={1.5} />
                                            </span>
                                            <span
                                                onClick={() => handleRemoveProductDetail(item, index)}
                                                style={{ color: 'red', cursor: 'pointer' }}
                                            >
                                                <Icon path={mdiTrashCan} size={1.5} />
                                            </span>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ border: '1px solid #ccc', width: '100%', margin: '30px 0' }}></div>
                <SaveButton onClick={handleSubmit} />
            </Wrapper>

            {modal && (
                <AddProductModal
                    setModal={setModal}
                    productDetail={productDetail}
                    setProductDetail={setProductDetail}
                    setProductDetailImage={setProductDetailImage}
                    productDetailImage={productDetailImage}
                    listProductDetail={listProductDetail}
                    setListProductDetail={setListProductDetail}
                    listProductDetailImage={listProductDetailImage}
                    setListProductDetailImage={setListProductDetailImage}
                    listProductDetailSize={listProductDetailSize}
                    setListProductDetailSize={setListProductDetailSize}
                    editIndex={editIndex}
                    setEditIndex={setEditIndex}
                />
            )}
        </div>
    );
}

export default EditProduct;
