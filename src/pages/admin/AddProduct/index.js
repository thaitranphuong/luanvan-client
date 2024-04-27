import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiPen, mdiTrashCan } from '@mdi/js';

import styles from './AddProduct.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import ImageModal from '../../../components/Modal/ImageModal';
import SaveButton from '../../../components/SaveButton';
import TextArea from '../../../components/TextArea';
import Select from '../../../components/Select';
import Editor from '../../../components/Editor';
import AddProductModal from '../../../components/Modal/AddProductModal';
import api from '../../../utils/api';
import { notify } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [imageUrl, setImageUrl] = useState(null);
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

    const navigate = useNavigate();

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
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImageUrl(reader.result);
            setProduct({ ...product, thumbnail: file.name });
            setProductImage(file);
        };
        if (!!file) reader.readAsDataURL(file);
        else setImageUrl(null);
    };

    const handleRemoveProductDetail = (index) => {
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
    };

    const handleSubmit = async () => {
        let json = JSON.stringify(product);
        let blob = new Blob([json], {
            type: 'application/json',
        });
        let formData = new FormData();
        formData.append('product', blob);
        formData.append('thumbnail', productImage);
        let result = await api.uploadFileRequest('/product', formData);
        // Save productDetail
        if (result.statusCode === 200) {
            listProductDetail.forEach(async (item, index) => {
                item.productId = result.data;
                json = JSON.stringify(item);
                blob = new Blob([json], {
                    type: 'application/json',
                });
                formData = new FormData();
                formData.append('productDetail', blob);
                formData.append('image', listProductDetailImage[index]);
                result = await api.uploadFileRequest('/product-detail', formData);
                // Save productDetailSize
                if (result.statusCode === 200) {
                    item.listProductDetailSizes.forEach(async (item) => {
                        item = { size: item.size, productDetailId: result.data };
                        result = await api.postRequest('/product-detail-size', item);
                    });
                }
            });
            notify('Lưu thành công');
            navigate('/admin/product');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý sản phẩm" detail="Thêm sản phẩm">
                <Input onChange={handleInputChange} label="Tên sản phẩm" name="name" />
                <Input onChange={handleChangeFile} label="Hình ảnh" type="file" width="30%" name="thumbnail" />
                <ImageModal style={{ width: '200px', height: '110px' }} imageUrl={imageUrl} alt="" />
                <Select onChange={handleInputChange} label="Danh mục" array={categories} name="categoryId" />
                <Select onChange={handleInputChange} label="Thương hiệu" array={brands} name="brandId" />
                <Input onChange={handleInputChange} label="Chất liệu" width="33.33%" name="material" />
                <Input onChange={handleInputChange} label="Xuất xứ" width="33.33%" name="origin" />
                <Input
                    onChange={handleInputChange}
                    label="Giảm giá (%)"
                    width="33.33%"
                    type="number"
                    name="percentDiscount"
                />
                <TextArea onChange={handleInputChange} label="Mô tả ngắn" name="shortDescription" />
                <Editor
                    onChange={handleInputChange}
                    content={product.fullDescription}
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
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <ImageModal
                                        style={{ height: '50px' }}
                                        imageUrl={URL.createObjectURL(listProductDetailImage[index])}
                                    />
                                </td>
                                <td>{item.color}</td>
                                <td style={{ maxWidth: '500px' }}>
                                    {item.listProductDetailSizes.map((item, index) => (
                                        <>
                                            {index > 0 && ', '}
                                            {item.size}
                                        </>
                                    ))}
                                </td>
                                <td>{item.price}</td>
                                <td>0</td>
                                <td>
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
                                        onClick={() => handleRemoveProductDetail(index)}
                                        style={{ color: 'red', cursor: 'pointer' }}
                                    >
                                        <Icon path={mdiTrashCan} size={1.5} />
                                    </span>
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

export default AddProduct;
