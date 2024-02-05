import styles from './AddAdressModal.module.scss';

function AddAdressModal({ setModalAdd }) {
    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal}>
                <div className={styles.modal_title}>Cập nhật địa chỉ</div>
                <div className={styles.modal_body}>
                    <input style={{ width: '48%' }} className={styles.modal_body_input} placeholder="Họ và tên" />
                    <input
                        style={{ width: '48%', marginLeft: '4%' }}
                        className={styles.modal_body_input}
                        placeholder="Số điện thoại"
                    />
                    <select className={styles.modal_body_select}>
                        <option value="">Tỉnh/Thành Phố</option>
                        <option>a</option>
                        <option>a</option>
                        <option>a</option>
                    </select>
                    <select className={styles.modal_body_select}>
                        <option value="">Quận/Huyện</option>
                        <option>a</option>
                        <option>a</option>
                        <option>a</option>
                    </select>
                    <select className={styles.modal_body_select}>
                        <option value="">Phường/Xã</option>
                        <option>a</option>
                        <option>a</option>
                        <option>a</option>
                    </select>
                    <input style={{ width: '100%' }} className={styles.modal_body_input} placeholder="Địa chỉ cụ thể" />
                    <div className={styles.modal_body_map}></div>
                </div>

                <button className={styles.modal_confirm}>XÁC NHẬN</button>
                <button onClick={() => setModalAdd(false)} className={styles.modal_cancel}>
                    HỦY
                </button>
            </div>
        </div>
    );
}

export default AddAdressModal;
