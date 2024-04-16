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
    const [id, setId] = useState();

    const getAddresses = async () => {
        const result = await api.getRequest('/address/get-by-user/' + getUser().id);
        if (result && result.statusCode === 200) setAddresses(result.data);
    };

    useEffect(() => {
        getAddresses();
    }, []);

    const handleRemove = async (id) => {
        const result = await api.deleteRequest('/address/' + id);
        if (result && result.statusCode === 200) {
            alert('OK');
            getAddresses();
        } else alert('Loi');
    };

    return (
        <>
            <div className={styles.wrapper}>
                <NavLeft />
                <div className={styles.box}>
                    <div className={styles.head}>
                        <div className={styles.head_title}>Địa Chỉ Của Tôi</div>
                        <div
                            onClick={() => {
                                setId(null);
                                setModal(true);
                            }}
                            className={styles.head_btn}
                        >
                            + Thêm địa chỉ mới
                        </div>
                    </div>
                    <div className={styles.body}>
                        {addresses &&
                            addresses.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <div className={styles.item_info}>
                                        <div className={styles.item_info_name}>{item.username}</div>
                                        <div className={styles.item_info_phone}>({item.phone})</div>
                                        <div className={styles.item_info_address}>
                                            {item.specification}, {item.ward}, {item.district}, {item.city}
                                        </div>
                                    </div>
                                    <div className={styles.btn}>
                                        <button
                                            onClick={() => {
                                                setId(item.id);
                                                setModal(true);
                                            }}
                                            className={styles.item_btn}
                                        >
                                            Cập nhật
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleRemove(item.id);
                                            }}
                                            className={styles.item_btn_remove}
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <Footer />
            {modal && <AddAdressModal setModalAdd={setModal} getAddresses={getAddresses} id={id} />}
        </>
    );
}

export default Address;
