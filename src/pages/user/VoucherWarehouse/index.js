import { useEffect, useState } from 'react';
import Footer from '../../../Layout/DefaultLayout/Footer';
import NavLeft from '../../../components/NavLeft';
import Voucher from '../../../components/Voucher';
import styles from './VoucherWarehouse.module.scss';
import api from '../../../utils/api';
import { getUser } from '../../../utils/localstorage';

function VoucherWarehouse() {
    const [vouchers, setVouchers] = useState([]);

    const render = async () => {
        let result = await api.getRequest(`/voucher/get-by-user/${getUser().id}`);
        setVouchers(result.data.listResult);
    };

    useEffect(() => {
        render();
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <NavLeft />
                <div className={styles.box}>
                    <div className={styles.head}>
                        <div className={styles.head_title}>Kho Voucher</div>
                    </div>
                    <div className={styles.body}>{vouchers && vouchers.map((item) => <Voucher voucher={item} />)}</div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default VoucherWarehouse;
