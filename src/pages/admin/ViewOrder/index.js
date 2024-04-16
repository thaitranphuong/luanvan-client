import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';
import clsx from 'clsx';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import styles from './ViewOrder.module.scss';
import ImageModal from '../../../components/Modal/ImageModal';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { config } from '../../../utils/config';

function ViewOrder() {
    const [order, setOrder] = useState({});

    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/order/${id}`);
        setOrder(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeStatus = async (status) => {
        setOrder({ ...order, status: status });
        let result = await api.putRequest(`/order`, { ...order, status: status });
        if (result && result.statusCode === 200) render();
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý đơn hàng" detail="Chi tiết đơn hàng">
                <div className={styles.inner_wrapper}>
                    <div className={styles.account}>Tài khoản khách hàng: {order.username}</div>
                    <div className={styles.address}>
                        <div className={styles.address_border_top}></div>
                        <div className={styles.address_title}>
                            <Icon path={mdiMapMarker} size={1.5} />
                            &nbsp; Địa Chỉ Nhận Hàng
                        </div>
                        <div className={styles.address_info}>
                            <div className={styles.address_info_name}>
                                {order.addressName} ({order.phone})
                            </div>
                            <div className={styles.address_info_specific}>{order.addressFull}</div>
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
                                {order &&
                                    order.orderItems &&
                                    order.orderItems.map((item) => (
                                        <tr key={item.id}>
                                            <td className={styles.product}>
                                                <img
                                                    className={styles.product_img}
                                                    src={
                                                        item.image &&
                                                        config.baseURL + '/getimage/product_details/' + item.image
                                                    }
                                                    alt=""
                                                />
                                                {item.name} | {item.color} | {item.size}
                                            </td>
                                            <td className={styles.price}>₫{item.price.toLocaleString('vi-VN')}</td>
                                            <td className={styles.quantity}>{item.quantity}</td>
                                            <td className={styles.total}>
                                                ₫{(item.price * item.quantity).toLocaleString('vi-VN')}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>

                        <div className={styles.transport}>
                            <div className={styles.transport_title}>Đơn vị vận chuyển</div>
                            <div className={styles.transport_list}>
                                <div className={styles.transport_item}>
                                    <div className={styles.transport_item_text}>
                                        {order && order.shippingName} - ₫
                                        {order && order.shippingCost && order.shippingCost.toLocaleString('vi-VN')}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.footer_left}>🏷️ Voucher</div>
                            <div className={styles.footer_left}>Mã voucher: {order.voucherName}</div>
                            <div className={styles.footer_right}>
                                Lời nhắn:
                                <input disabled className={styles.footer_right_input} value={order.note} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.payment}>
                        <div className={styles.payment_top}>
                            <div className={styles.payment_title}>Phương thức thanh toán</div>
                            <div className={clsx(styles.payment_option)}>{order.payment}</div>
                        </div>
                        <div className={styles.payment_top}>
                            <div className={styles.payment_title}>Trạng thái đơn hàng</div>
                            {(order.status === 0 && <div className={clsx(styles.payment_option)}>Chờ xác nhận</div>) ||
                                (order.status === 1 && (
                                    <div className={clsx(styles.payment_option)}>Đang chuẩn bị hàng</div>
                                )) ||
                                (order.status === 2 && (
                                    <div className={clsx(styles.payment_option)}>Đang giao hàng</div>
                                )) ||
                                (order.status === 3 && (
                                    <div className={clsx(styles.payment_option)}>Đã giao hàng</div>
                                )) ||
                                (order.status === 4 && <div className={clsx(styles.payment_option)}>Đã hủy</div>)}
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
                                    imageUrl={order && order.image && config.baseURL + '/getimage/order/' + order.image}
                                />
                            </div>
                        </div>

                        <div className={styles.payment_bottom}>
                            <div className={styles.payment_bottom_item}>
                                <div className={styles.payment_bottom_left}>Tổng tiền hàng</div>
                                <div className={styles.payment_bottom_right}>
                                    ₫
                                    {order &&
                                        order.orderItems &&
                                        order.orderItems
                                            .reduce((acc, item) => acc + item.price * item.quantity, 0)
                                            .toLocaleString('vi-VN')}
                                </div>
                            </div>
                            <div className={styles.payment_bottom_item}>
                                <div className={styles.payment_bottom_left}>Phí vận chuyển</div>
                                <div className={styles.payment_bottom_right}>
                                    ₫{order && order.shippingCost && order.shippingCost.toLocaleString('vi-VN')}
                                </div>
                            </div>
                            <div className={styles.payment_bottom_item}>
                                <div className={styles.payment_bottom_left}>Tổng cộng Voucher giảm giá:</div>
                                <div className={styles.payment_bottom_right}>
                                    -₫{order && order.discountVoucher && order.discountVoucher.toLocaleString('vi-VN')}
                                </div>
                            </div>
                            <div className={styles.payment_bottom_item}>
                                <div className={styles.payment_bottom_left}>Tổng thanh toán</div>
                                <div className={clsx(styles.payment_bottom_right, styles.payment_bottom_total)}>
                                    ₫{order && order.total && order.total.toLocaleString('vi-VN')}
                                </div>
                            </div>

                            {order &&
                                ((order.status === 0 && (
                                    <>
                                        <button
                                            onClick={() => handleChangeStatus(1)}
                                            className={styles.payment_bottom_btn}
                                        >
                                            XÁC NHẬN
                                        </button>
                                        <button
                                            onClick={() => handleChangeStatus(4)}
                                            className={styles.abort_bottom_btn}
                                        >
                                            HỦY ĐƠN
                                        </button>
                                    </>
                                )) ||
                                    (order.status === 1 && (
                                        <button
                                            onClick={() => handleChangeStatus(2)}
                                            className={styles.payment_bottom_btn}
                                        >
                                            GIAO HÀNG
                                        </button>
                                    )))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default ViewOrder;
