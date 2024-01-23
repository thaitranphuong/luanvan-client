import Icon from '@mdi/react';
import { mdiSaleOutline } from '@mdi/js';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Voucher.module.scss';
import Pagination from '../../../components/Pagination';

function Voucher() {
    return (
        <>
            <div className={styles.wrapper}>
                <img src={require('../../../assets/images/voucher_banners.webp')} alt="" />
                <img src={require('../../../assets/images/voucher_label.webp')} alt="" />
                <div className={styles.vouchers}>
                    <div className={styles.voucher}>
                        <div className={styles.left}>
                            <Icon className={styles.label} size={5} path={mdiSaleOutline} />
                            <div className={styles.name}>MAGIAM50%</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <div className={styles.title}> Giảm 50%</div>
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
                            <button className={styles.btn}>LƯU</button>
                        </div>
                    </div>
                    <div className={styles.voucher}>
                        <div className={styles.left}>
                            <Icon className={styles.label} size={5} path={mdiSaleOutline} />
                            <div className={styles.name}>MAGIAM50%</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <div className={styles.title}> Giảm 50%</div>
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
                            <button className={styles.btn}>LƯU</button>
                        </div>
                    </div>
                    <div className={styles.voucher}>
                        <div className={styles.left}>
                            <Icon className={styles.label} size={5} path={mdiSaleOutline} />
                            <div className={styles.name}>MAGIAM50%</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <div className={styles.title}> Giảm 50%</div>
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
                            <button className={styles.btn}>LƯU</button>
                        </div>
                    </div>
                    <div className={styles.voucher}>
                        <div className={styles.left}>
                            <Icon className={styles.label} size={5} path={mdiSaleOutline} />
                            <div className={styles.name}>MAGIAM50%</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <div className={styles.title}> Giảm 50%</div>
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
                            <button className={styles.btn}>LƯU</button>
                        </div>
                    </div>
                </div>
                <Pagination />
            </div>
            <Footer />
        </>
    );
}

export default Voucher;
