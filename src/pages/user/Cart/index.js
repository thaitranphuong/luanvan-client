import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Cart.module.scss';
import { useState } from 'react';
import VoucherModal from '../../../components/Modal/VoucherModal';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const handleOrder = () => {
        navigate('/order');
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.head}>
                    <div className={styles.head_left}>
                        <div className={styles.head_title}>Sản phẩm</div>
                    </div>
                    <div className={styles.head_right}>
                        <div className={styles.head_title}>Giá</div>
                        <div className={styles.head_title}>Số lượng</div>
                        <div className={styles.head_title}>Tổng tiền</div>
                        <div className={styles.head_title}>Thao tác</div>
                    </div>
                </div>
                <div className={styles.products}>
                    <div className={styles.product}>
                        <div className={styles.product_left}>
                            <input type="checkbox" id="" className={styles.product_checkbox} />
                            <img
                                className={styles.product_thumbnail}
                                src={require('../../../assets/images/product.png')}
                                alt=""
                            />
                            <div className={styles.product_name}>
                                Quần Short Kaki TWENTI Cạp Thấp Tôn Dáng Dành Cho Các Nàng Đùi To - Đen - S
                            </div>
                        </div>
                        <div className={styles.product_right}>
                            <div className={styles.product_price}>₫322,000</div>
                            <div className={styles.product_quantity}>
                                <button className={styles.product_quantity_btn}>-</button>
                                <input type="number" value={2} className={styles.product_quantity_input} />
                                <button className={styles.product_quantity_btn}>+</button>
                            </div>

                            <div className={styles.product_total}>₫644,000</div>
                            <Icon className={styles.product_remove} path={mdiTrashCanOutline} size={1.5} />
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.product_left}>
                            <input type="checkbox" id="" className={styles.product_checkbox} />
                            <img
                                className={styles.product_thumbnail}
                                src={require('../../../assets/images/product.png')}
                                alt=""
                            />
                            <div className={styles.product_name}>
                                Quần Short Kaki TWENTI Cạp Thấp Tôn Dáng Dành Cho Các Nàng Đùi To - Đen - S
                            </div>
                        </div>
                        <div className={styles.product_right}>
                            <div className={styles.product_price}>₫322,000</div>
                            <div className={styles.product_quantity}>
                                <button className={styles.product_quantity_btn}>-</button>
                                <input type="number" value={2} className={styles.product_quantity_input} />
                                <button className={styles.product_quantity_btn}>+</button>
                            </div>

                            <div className={styles.product_total}>₫644,000</div>
                            <Icon className={styles.product_remove} path={mdiTrashCanOutline} size={1.5} />
                        </div>
                    </div>
                </div>
                <div className={styles.transport}>
                    <div className={styles.transport_title}>Chọn đơn vị vận chuyển</div>
                    <div className={styles.transport_list}>
                        <div className={styles.transport_item}>
                            <input name="transport" className={styles.transport_item_radio} type="radio" />
                            <div className={styles.transport_item_text}>Viettel Post - ₫50,000</div>
                        </div>
                        <div className={styles.transport_item}>
                            <input name="transport" className={styles.transport_item_radio} type="radio" />
                            <div className={styles.transport_item_text}>Ninja Van - ₫30,000</div>
                        </div>
                        <div className={styles.transport_item}>
                            <input name="transport" className={styles.transport_item_radio} type="radio" />
                            <div className={styles.transport_item_text}>Giao hàng tiết kiệm - ₫20,000</div>
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div onClick={() => setModal(true)} className={styles.footer_left}>
                        🏷️ Chọn voucher
                    </div>
                    <div className={styles.footer_left}>Mã voucher: MAGIAM100$</div>
                    <div className={styles.footer_right}>
                        <div className={styles.footer_right_amount}>Tổng thanh toán (2 Sản phẩm):</div>
                        <div className={styles.footer_right_total}>₫100.000</div>
                        <button onClick={handleOrder} className={styles.footer_right_btn}>
                            MUA HÀNG
                        </button>
                    </div>
                </div>
            </div>

            <Footer />

            {modal && <VoucherModal setModal={setModal} />}
        </>
    );
}

export default Cart;
