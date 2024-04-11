import { useEffect, useState } from 'react';
import styles from './AddProductModal.module.scss';
import Input from '../../Input';
import SaveButton from '../../SaveButton';

function AddProductModal({
    setModal,
    productDetail,
    setProductDetail,
    productDetailImage,
    setProductDetailImage,
    listProductDetail,
    setListProductDetail,
    listProductDetailImage,
    setListProductDetailImage,
    listProductDetailSize,
    setListProductDetailSize,
    editIndex,
}) {
    const [imageUrl, setImageUrl] = useState(null);
    const [size, setSize] = useState();

    useEffect(() => {
        if (!!listProductDetail[editIndex]) {
            setProductDetail(listProductDetail[editIndex]);
            setProductDetailImage(listProductDetailImage[editIndex]);
            setListProductDetailSize([...listProductDetail[editIndex].listProductDetailSizes]);
            setImageUrl(
                typeof listProductDetailImage[editIndex] === 'string'
                    ? 'http://localhost:8080/getimage/product_details/' + listProductDetailImage[editIndex]
                    : URL.createObjectURL(listProductDetailImage[editIndex]),
            );
        } else {
            setProductDetail({
                image: '',
                color: '',
                price: '',
                productId: '',
                listProductDetailSizes: [],
            });
            setListProductDetailSize([]);
            setProductDetailImage(null);
        }
    }, [editIndex]);

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImageUrl(reader.result);
            setProductDetail((prev) => ({
                ...prev,
                image: file.name,
            }));
            setProductDetailImage(file);
        };
        if (!!file) reader.readAsDataURL(file);
        else setImageUrl(null);
    };

    const handleInputChange = (e) => {
        setProductDetail((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleChangeInputSize = (e) => {
        setSize(e.target.value);
    };

    const handleAdd = () => {
        if (!!size)
            setListProductDetailSize((prev) => {
                const temp = [...prev];
                temp.push({ size: size });
                setSize('');
                return temp;
            });
    };

    const handleRemove = (index) => {
        setListProductDetailSize((prev) => {
            const temp = [...prev];
            temp.splice(index, 1);
            return temp;
        });
    };

    const handleSave = () => {
        if (!editIndex && editIndex !== 0) {
            setListProductDetail((prev) => {
                productDetail = { ...productDetail, listProductDetailSizes: [...listProductDetailSize] };
                const temp = [...prev];
                temp.push(productDetail);
                return temp;
            });
            setListProductDetailImage((prev) => {
                const temp = [...prev];
                temp.push(productDetailImage);
                return temp;
            });
        } else {
            setListProductDetail((prev) => {
                productDetail = { ...productDetail, listProductDetailSizes: [...listProductDetailSize] };
                const temp = [...prev];
                temp[editIndex] = { ...productDetail };
                return temp;
            });
            setListProductDetailImage((prev) => {
                const temp = [...prev];
                temp[editIndex] = productDetailImage;
                return temp;
            });
        }
        setProductDetailImage(null);
        setListProductDetailSize([]);
        setModal(false);
    };

    const handleCancel = () => {
        setProductDetailImage(null);
        setListProductDetailSize([]);
        setModal(false);
    };

    return (
        <div className={styles.modal_wrapper}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
                <div className={styles.title}>Cập nhật chi tiết sản phẩm</div>
                <img
                    style={{ width: '200px', height: '110px', objectFit: 'cover', marginLeft: '5px' }}
                    src={imageUrl}
                    alt=""
                />
                <Input
                    file={productDetailImage}
                    onChange={handleChangeFile}
                    label="Hình ảnh"
                    type="file"
                    width="100%"
                />
                <Input
                    onChange={handleInputChange}
                    name="color"
                    label="Màu"
                    width="100%"
                    placeholder="Ví dụ: Đỏ, Xanh, Vàng,..."
                    value={productDetail.color}
                />
                <Input
                    onChange={handleInputChange}
                    name="price"
                    value={productDetail.price}
                    label="Giá (VNĐ)"
                    width="100%"
                    type="number"
                />
                <div className={styles.size_input}>
                    <Input
                        onChange={handleChangeInputSize}
                        value={size}
                        label="Size"
                        width="85%"
                        placeholder="Ví dụ: S, M, L,..."
                    />
                    <button onClick={handleAdd} className={styles.add_size_btn}>
                        Thêm
                    </button>
                </div>
                <div className={styles.size_container}>
                    {listProductDetailSize.map((item, index) => (
                        <span key={index} onClick={() => handleRemove(index)} className={styles.size}>
                            {item.size}
                        </span>
                    ))}
                </div>
                <div className={styles.footer}>
                    <button onClick={handleSave} className={styles.save_btn}>
                        Lưu
                    </button>
                    <button onClick={handleCancel} className={styles.abort_btn}>
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddProductModal;
