import { useState } from 'react';
import styles from './AddProductModal.module.scss';
import Input from '../../Input';
import SaveButton from '../../SaveButton';

function AddProductModal({ setModal }) {
    const [imageUrl, setImageUrl] = useState(null);

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
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
                <Input onChange={handleChangeFile} label="Hình ảnh" type="file" width="100%" />
                <Input label="Màu" width="100%" placeholder="Ví dụ: Đỏ, Xanh, Vàng,..." />
                <Input label="Giá (VNĐ)" width="100%" type="number" />
                <div className={styles.size_input}>
                    <Input label="Size" width="85%" placeholder="Ví dụ: S, M, L,..." />
                    <button className={styles.add_size_btn}>Thêm</button>
                </div>
                <div className={styles.size_container}>
                    <span className={styles.size}>S</span>
                    <span className={styles.size}>M</span>
                    <span className={styles.size}>L</span>
                    <span className={styles.size}>XL</span>
                </div>
                <div className={styles.footer}>
                    <button className={styles.save_btn}>Lưu</button>
                    <button onClick={() => setModal(false)} className={styles.abort_btn}>
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddProductModal;
