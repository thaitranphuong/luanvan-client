import Icon from '@mdi/react';
import { mdiChevronRight, mdiSaleOutline, mdiTrashCanOutline } from '@mdi/js';

import styles from './VoucherModal.module.scss';

function VoucherModal({ setModal }) {
    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal}>
                <div className={styles.modal_title}>CHỌN VOUCHER</div>
                <div className={styles.modal_body}>
                    <div className={styles.voucher}>
                        <div className={styles.left}>
                            <Icon className={styles.label} size={2.5} path={mdiSaleOutline} />
                            <div className={styles.name}>MAGIAM50%</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <div className={styles.title}> Giảm 50%</div>
                                <button className={styles.btn}>
                                    <div>Dùng ngay</div>
                                    <Icon path={mdiChevronRight} size={1.2} />
                                </button>
                                <div className={styles.content}>Giảm tối đa ₫50,000 </div>
                                <div className={styles.using}>
                                    <div className={styles.range}>
                                        <div className={styles.percentage}>
                                            <div className={styles.percentage_value} style={{ width: `${50}%` }}></div>
                                        </div>
                                    </div>
                                    <div className={styles.count}>Đã dùng 0% </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.voucher}>
                        <div className={styles.left}>
                            <Icon className={styles.label} size={2.5} path={mdiSaleOutline} />
                            <div className={styles.name}>MAGIAM50%</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <div className={styles.title}> Giảm 50%</div>
                                <button className={styles.btn}>
                                    <div>Dùng ngay</div>
                                    <Icon path={mdiChevronRight} size={1.2} />
                                </button>
                                <div className={styles.content}>Giảm tối đa ₫50,000 </div>
                                <div className={styles.using}>
                                    <div className={styles.range}>
                                        <div className={styles.percentage}>
                                            <div className={styles.percentage_value} style={{ width: `${50}%` }}></div>
                                        </div>
                                    </div>
                                    <div className={styles.count}>Đã dùng 0% </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => setModal(false)} className={styles.modal_btn}>
                    HỦY
                </button>
            </div>
        </div>
    );
}

export default VoucherModal;
