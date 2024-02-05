import { useState } from 'react';
import Footer from '../../../Layout/DefaultLayout/Footer';
import NavLeft from '../../../components/NavLeft';
import styles from './Address.module.scss';
import AddAdressModal from '../../../components/Modal/AddAdressModal';

function Address() {
    const [modal, setModal] = useState(false);

    return (
        <>
            <div className={styles.wrapper}>
                <NavLeft />
                <div className={styles.box}>
                    <div className={styles.head}>
                        <div className={styles.head_title}>Địa Chỉ Của Tôi</div>
                        <div onClick={() => setModal(true)} className={styles.head_btn}>
                            + Thêm địa chỉ mới
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.item}>
                            <div className={styles.item_info}>
                                <div className={styles.item_info_name}>Trần Phương Thái</div>
                                <div className={styles.item_info_phone}>(0843215643)</div>
                                <div className={styles.item_info_address}>
                                    759, tổ 19, khu vực Tân Phước 1 Phường Thuận Hưng, Quận Thốt Nốt, Cần Thơ
                                </div>
                            </div>
                            <button onClick={() => setModal(true)} className={styles.item_btn}>
                                Cập nhật
                            </button>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_info}>
                                <div className={styles.item_info_name}>Trần Phương Thái</div>
                                <div className={styles.item_info_phone}>(0843215643)</div>
                                <div className={styles.item_info_address}>
                                    759, tổ 19, khu vực Tân Phước 1 Phường Thuận Hưng, Quận Thốt Nốt, Cần Thơ
                                </div>
                            </div>
                            <button onClick={() => setModal(true)} className={styles.item_btn}>
                                Cập nhật
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {modal && <AddAdressModal setModalAdd={setModal} />}
        </>
    );
}

export default Address;
