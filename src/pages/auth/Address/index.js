import { useEffect, useState } from 'react';
import Footer from '../../../Layout/DefaultLayout/Footer';
import NavLeft from '../../../components/NavLeft';
import styles from './Address.module.scss';
import AddAdressModal from '../../../components/Modal/AddAdressModal';
import api from '../../../utils/api';
import { getUser } from '../../../utils/localstorage';

function Address() {
    const [modal, setModal] = useState(false);
    const [addresses, setAddresses] = useState([]);

    const getAddresses = async () => {
        const result = await api.getRequest('/address/get-by-user/' + getUser().id);
        if (result && result.statusCode === 200) setAddresses(result.data);
    };

    useEffect(() => {
        getAddresses();
    }, []);

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
                        {addresses &&
                            addresses.map((item) => (
                                <div className={styles.item}>
                                    <div className={styles.item_info}>
                                        <div className={styles.item_info_name}>{item.username}</div>
                                        <div className={styles.item_info_phone}>({item.phone})</div>
                                        <div className={styles.item_info_address}>
                                            {item.specification} Phường {item.ward}, Quận {item.district}, {item.city}
                                        </div>
                                    </div>
                                    <button onClick={() => setModal(true)} className={styles.item_btn}>
                                        Cập nhật
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <Footer />
            {modal && <AddAdressModal setModalAdd={setModal} />}
        </>
    );
}

export default Address;
