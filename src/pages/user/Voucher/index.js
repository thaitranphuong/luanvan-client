import Icon from '@mdi/react';
import { mdiSaleOutline } from '@mdi/js';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Voucher.module.scss';
import Pagination from '../../../components/Pagination';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { getUser } from '../../../utils/localstorage';

function Voucher() {
    const [vouchers, setVouchers] = useState([]);
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);

    const render = async () => {
        let result = await api.getRequest(`/voucher/get-by-user/${getUser().id}?page=${page}&limit=4`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setVouchers(result.data.listResult);
    };

    useEffect(() => {
        render();
    }, [page]);

    const handleSave = async (voucherId) => {
        let result = await api.postRequest(`/voucher/${getUser().id}/${voucherId}`);
        if (result.statusCode === 200) {
            alert('OK');
            render();
        }
    };

    return (
        <>
            <div className={styles.wrapper}>
                <img src={require('../../../assets/images/voucher_banners.webp')} alt="" />
                <img src={require('../../../assets/images/voucher_label.webp')} alt="" />
                <div className={styles.vouchers}>
                    {vouchers &&
                        vouchers.map((item) => (
                            <div className={styles.voucher}>
                                <div className={styles.left}>
                                    <Icon className={styles.label} size={5} path={mdiSaleOutline} />
                                    <div className={styles.name}>{item.name}</div>
                                </div>
                                <div className={styles.right}>
                                    <div className={styles.info}>
                                        <div className={styles.title}>
                                            Giảm {item.category && '₫'}
                                            {item._index}
                                            {!item.category && '%'}
                                        </div>
                                        <div className={styles.content}>Giảm tối đa ₫{item.maxDiscount} </div>
                                        <div className={styles.using}>
                                            <div className={styles.range}>
                                                <div className={styles.percentage}>
                                                    <div
                                                        className={styles.percentage_value}
                                                        style={{
                                                            width: `${
                                                                ((item.quantity - item.remainingQuantity) * 100) /
                                                                item.quantity
                                                            }%`,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className={styles.count}>
                                                Đã dùng{' '}
                                                {((item.quantity - item.remainingQuantity) * 100) / item.quantity}%
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={() => handleSave(item.id)} className={styles.btn}>
                                        LƯU
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                <Pagination page={page} setPage={setPage} totalPage={totalPage} />
            </div>
            <Footer />
        </>
    );
}

export default Voucher;
