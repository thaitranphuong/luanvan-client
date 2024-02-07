import Icon from '@mdi/react';
import Footer from '../../../Layout/DefaultLayout/Footer';
import HeaderCustom from '../../../components/HeaderCustom';
import styles from './Order.module.scss';
import { mdiMapMarker } from '@mdi/js';
import ListAddressModal from '../../../components/Modal/ListAddressModal';
import { useState } from 'react';
import VoucherModal from '../../../components/Modal/VoucherModal';
import clsx from 'clsx';

function Order() {
    const [modalAddress, setModalAddress] = useState(false);
    const [modalVoucher, setModalVoucher] = useState(false);
    return (
        <>
            <HeaderCustom title={'Thanh Toán'} />
            <div className={styles.wrapper}>
                <div className={styles.address}>
                    <div className={styles.address_border_top}></div>
                    <div className={styles.address_title}>
                        <Icon path={mdiMapMarker} size={1.5} />
                        &nbsp; Địa Chỉ Nhận Hàng
                    </div>
                    <div className={styles.address_info}>
                        <div className={styles.address_info_name}>Trần Phương Thái (0843215643)</div>
                        <div className={styles.address_info_specific}>
                            759, tổ 19, khu vực Tân Phước 1, Phường Thuận Hưng, Quận Thốt Nốt, Cần Thơ
                        </div>
                        <button onClick={() => setModalAddress(true)} className={styles.address_info_btn}>
                            Thay đổi
                        </button>
                    </div>
                </div>

                <div className={styles.main}>
                    <table>
                        <thead>
                            <tr>
                                <th className={styles.product}>Sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tổng tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.product}>
                                    <img
                                        className={styles.product_img}
                                        src={require('../../../assets/images/product.png')}
                                        alt=""
                                    />
                                    Áo thun unisex nam nữ localbrand blokecore Outerity Sporty Basic | Kem | S
                                </td>
                                <td className={styles.price}>₫150,000</td>
                                <td className={styles.quantity}>3</td>
                                <td className={styles.total}>₫450,000</td>
                            </tr>
                            <tr>
                                <td className={styles.product}>
                                    <img
                                        className={styles.product_img}
                                        src={require('../../../assets/images/product.png')}
                                        alt=""
                                    />
                                    Áo thun unisex nam nữ localbrand blokecore Outerity Sporty Basic | Kem | S
                                </td>
                                <td className={styles.price}>₫150,000</td>
                                <td className={styles.quantity}>3</td>
                                <td className={styles.total}>₫450,000</td>
                            </tr>
                        </tbody>
                    </table>

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
                        <div onClick={() => setModalVoucher(true)} className={styles.footer_left}>
                            🏷️ Chọn voucher
                        </div>
                        <div className={styles.footer_left}>Mã voucher: MAGIAM100$</div>
                        <div className={styles.footer_right}>
                            Lời nhắn:
                            <input className={styles.footer_right_input} placeholder="Lưu ý cho người bán..." />
                        </div>
                    </div>
                </div>
                <div className={styles.payment}>
                    <div className={styles.payment_top}>
                        <div className={styles.payment_title}>Phương thức thanh toán</div>
                        <div className={clsx(styles.payment_option, { [styles.active]: false })}>COD</div>
                        <img
                            className={clsx(styles.payment_option, { [styles.active]: true })}
                            src={require('../../../assets/images/vnpay.png')}
                            alt=""
                        />
                        <img
                            className={clsx(styles.payment_option, { [styles.active]: false })}
                            src={require('../../../assets/images/paypal.png')}
                            alt=""
                        />
                    </div>

                    <div className={styles.payment_bottom}>
                        <div className={styles.payment_bottom_item}>
                            <div className={styles.payment_bottom_left}>Tổng tiền hàng</div>
                            <div className={styles.payment_bottom_right}>₫18.000</div>
                        </div>
                        <div className={styles.payment_bottom_item}>
                            <div className={styles.payment_bottom_left}>Phí vận chuyển</div>
                            <div className={styles.payment_bottom_right}>₫30.000</div>
                        </div>
                        <div className={styles.payment_bottom_item}>
                            <div className={styles.payment_bottom_left}>Tổng cộng Voucher giảm giá:</div>
                            <div className={styles.payment_bottom_right}>-₫540</div>
                        </div>
                        <div className={styles.payment_bottom_item}>
                            <div className={styles.payment_bottom_left}>Tổng thanh toán</div>
                            <div className={clsx(styles.payment_bottom_right, styles.payment_bottom_total)}>
                                ₫47.460
                            </div>
                        </div>

                        <button className={styles.payment_bottom_btn}>ĐẶT HÀNG</button>
                    </div>
                </div>
            </div>
            <Footer />
            {modalAddress && <ListAddressModal setModal={setModalAddress} />}
            {modalVoucher && <VoucherModal setModal={setModalVoucher} />}
        </>
    );
}

export default Order;
