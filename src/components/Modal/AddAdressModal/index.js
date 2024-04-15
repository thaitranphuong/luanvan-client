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
                    <div className={styles.modal_body_map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125634.44145489468!2d105.76955167736344!3d10.255430501592397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1712994033698!5m2!1svi!2s"
                            width="100%"
                            height="100%"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
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
