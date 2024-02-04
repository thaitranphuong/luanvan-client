import clsx from 'clsx';

import styles from './ListAddressModal.module.scss';
import AddAdressModal from '../AddAdressModal';
import { useState } from 'react';

function ListAddressModal({ setModal }) {
    const [modalAdd, setModalAdd] = useState(false);

    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal}>
                <div className={styles.modal_title}>Địa Chỉ Của Tôi</div>
                <div className={styles.modal_body}>
                    <div className={styles.modal_body_item}>
                        <div className={clsx(styles.modal_body_radio, { [styles.active]: false })}></div>
                        <div className={styles.modal_body_main}>
                            <div className={styles.modal_body_main_name}>Trần Phương Thái (0843215643)</div>
                            <div className={styles.modal_body_specific}>
                                759, tổ 19, khu vực Tân Phước 1 Phường Thuận Hưng, Quận Thốt Nốt, Cần Thơ
                            </div>
                        </div>
                    </div>
                    <div className={styles.modal_body_item}>
                        <div className={clsx(styles.modal_body_radio, { [styles.active]: true })}></div>
                        <div className={styles.modal_body_main}>
                            <div className={styles.modal_body_main_name}>Trần Phương Thái (0843215643)</div>
                            <div className={styles.modal_body_specific}>
                                759, tổ 19, khu vực Tân Phước 1 Phường Thuận Hưng, Quận Thốt Nốt, Cần Thơ
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setModalAdd(true)} className={styles.modal_add}>
                        + Thêm địa chỉ mới
                    </button>
                </div>

                <button className={styles.modal_confirm}>XÁC NHẬN</button>
                <button onClick={() => setModal(false)} className={styles.modal_cancel}>
                    HỦY
                </button>
            </div>
            {modalAdd && <AddAdressModal setModalAdd={setModalAdd} />}
        </div>
    );
}

export default ListAddressModal;
