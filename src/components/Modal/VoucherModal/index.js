import { useEffect, useState } from 'react';
import Voucher from '../../Voucher';
import styles from './VoucherModal.module.scss';
import api from '../../../utils/api';
import { getUser } from '../../../utils/localstorage';

function VoucherModal({ setModal }) {
    const [vouchers, setVouchers] = useState([]);

    const getVouchers = async () => {
        let result = await api.getRequest(`/voucher/get-by-user/${getUser().id}`);
        if (result && result.statusCode === 200 && result.data.listResult) setVouchers(result.data.listResult);
    };

    useEffect(() => {
        getVouchers();
    }, []);

    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal}>
                <div className={styles.modal_title}>CHỌN VOUCHER</div>
                <div className={styles.modal_body}>
                    {vouchers && vouchers.map((item) => <Voucher key={item.id} voucher={item} />)}
                </div>
                <button onClick={() => setModal(false)} className={styles.modal_btn}>
                    ĐÓNG
                </button>
            </div>
        </div>
    );
}

export default VoucherModal;
