import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';
import clsx from 'clsx';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import styles from './ViewOrder.module.scss';
import ImageModal from '../../../components/Modal/ImageModal';

function ViewOrder() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý đơn hàng" detail="Chi tiết đơn hàng">
                <div className={styles.inner_wrapper}>
                    <div className={styles.account}>Tài khoản khách hàng: Trần Phương Thái</div>
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
                            <div className={styles.transport_title}>Đơn vị vận chuyển</div>
                            <div className={styles.transport_list}>
                                <div className={styles.transport_item}>
                                    <div className={styles.transport_item_text}>Viettel Post - ₫50,000</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.footer_left}>🏷️ Voucher</div>
                            <div className={styles.footer_left}>Mã voucher: MAGIAM100$</div>
                            <div className={styles.footer_right}>
                                Lời nhắn:
                                <input disabled className={styles.footer_right_input} value="asdasdsa" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.payment}>
                        <div className={styles.payment_top}>
                            <div className={styles.payment_title}>Phương thức thanh toán</div>
                            <div className={clsx(styles.payment_option)}>COD</div>
                            {/* <img
                                className={clsx(styles.payment_option)}
                                src={require('../../../assets/images/vnpay.png')}
                                alt=""
                            />
                            <img
                                className={clsx(styles.payment_option)}
                                src={require('../../../assets/images/paypal.png')}
                                alt=""
                            /> */}
                        </div>
                        <div className={styles.payment_top}>
                            <div className={styles.payment_title}>Trạng thái đơn hàng</div>
                            <div className={clsx(styles.payment_option)}>Chờ xác nhận</div>
                            {/* <div className={clsx(styles.payment_option)}>Đang chuẩn bị hàng</div>
                            <div className={clsx(styles.payment_option)}>Đang giao hàng</div>
                            <div className={clsx(styles.payment_option)}>Đã giao hàng</div>
                            <div className={clsx(styles.payment_option)}>Đã hủy</div> */}
                        </div>
                        <div className={styles.payment_top}>
                            <div className={styles.payment_title}>Hình ảnh giao hàng</div>
                            <div
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    marginLeft: '50px',
                                    border: '1px solid #ccc',
                                }}
                            >
                                <ImageModal
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                    imageUrl={require('../../../assets/images/product.png')}
                                />
                            </div>
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

                            <button className={styles.payment_bottom_btn}>XÁC NHẬN</button>
                            {/* <button className={styles.payment_bottom_btn}>GIAO HÀNG</button> */}
                            <button className={styles.abort_bottom_btn}>HỦY ĐƠN</button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default ViewOrder;
