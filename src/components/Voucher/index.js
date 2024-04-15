import Icon from '@mdi/react';
import { mdiChevronRight, mdiSaleOutline } from '@mdi/js';

import styles from './Voucher.module.scss';
import voucherSlice from '../../redux/slice/VoucherSlice';
import { useDispatch } from 'react-redux';
import { voucherSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';

function Voucher({ voucher }) {
    const dispatch = useDispatch();
    const seletedVoucher = useSelector(voucherSelector);

    return (
        <div className={styles.voucher}>
            <div className={styles.left}>
                <Icon className={styles.label} size={2.5} path={mdiSaleOutline} />
                <div className={styles.name}>{voucher.name}</div>
            </div>
            <div className={styles.right}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        {' '}
                        Giảm {voucher.category && '₫'}
                        {voucher._index.toLocaleString('vi-VN')}
                        {!voucher.category && '%'}
                    </div>
                    <button onClick={() => dispatch(voucherSlice.actions.addVoucher(voucher))} className={styles.btn}>
                        {seletedVoucher.id === voucher.id ? (
                            <>
                                <div style={{ color: 'red' }}>Đã dùng</div>
                                <Icon style={{ color: 'red' }} path={mdiChevronRight} size={1.2} />
                            </>
                        ) : (
                            <>
                                <div>Dùng ngay</div>
                                <Icon path={mdiChevronRight} size={1.2} />
                            </>
                        )}
                    </button>
                    <div className={styles.content}>Giảm tối đa ₫{voucher.maxDiscount.toLocaleString('vi-VN')} </div>
                    <div className={styles.using}>
                        <div className={styles.range}>
                            <div className={styles.percentage}>
                                <div
                                    className={styles.percentage_value}
                                    style={{
                                        width: `${
                                            ((voucher.quantity - voucher.remainingQuantity) * 100) / voucher.quantity
                                        }%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className={styles.count}>
                            Đã dùng {((voucher.quantity - voucher.remainingQuantity) * 100) / voucher.quantity}%{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Voucher;
