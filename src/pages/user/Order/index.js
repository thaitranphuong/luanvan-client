import Icon from '@mdi/react';
import Footer from '../../../Layout/DefaultLayout/Footer';
import HeaderCustom from '../../../components/HeaderCustom';
import styles from './Order.module.scss';
import { mdiMapMarker } from '@mdi/js';
import ListAddressModal from '../../../components/Modal/ListAddressModal';
import { useEffect, useMemo, useState } from 'react';
import VoucherModal from '../../../components/Modal/VoucherModal';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutSelector, shippingSelector, voucherSelector } from '../../../redux/selectors';
import { config } from '../../../utils/config';
import api from '../../../utils/api';
import shippingSlice from '../../../redux/slice/ShippingSlice';
import { getUser } from '../../../utils/localstorage';
import { useNavigate } from 'react-router-dom';

function Order() {
    const [modalAddress, setModalAddress] = useState(false);
    const [modalVoucher, setModalVoucher] = useState(false);
    const [shippings, setShippings] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [address, setAddress] = useState([]);
    const [note, setNote] = useState();
    const [payment, setPayment] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const voucher = useSelector(voucherSelector);
    const checkoutProducts = useSelector(checkoutSelector);
    const shipping = useSelector(shippingSelector);

    const total = useMemo(
        () =>
            (checkoutProducts.length > 0
                ? voucher._index
                    ? voucher.category
                        ? checkoutProducts.reduce((acc, item) => {
                              return acc + item.quantity * item.productPrice;
                          }, 0) -
                              voucher._index >=
                          0
                            ? checkoutProducts.reduce((acc, item) => {
                                  return acc + item.quantity * item.productPrice;
                              }, 0) - voucher._index
                            : 0
                        : (checkoutProducts.reduce((acc, item) => {
                              return acc + item.quantity * item.productPrice;
                          }, 0) *
                              voucher._index) /
                              100 <=
                          voucher.maxDiscount
                        ? (checkoutProducts.reduce((acc, item) => {
                              return acc + item.quantity * item.productPrice;
                          }, 0) *
                              (100 - voucher._index)) /
                          100
                        : checkoutProducts.reduce((acc, item) => {
                              return acc + item.quantity * item.productPrice;
                          }, 0) - voucher.maxDiscount
                    : checkoutProducts.reduce((acc, item) => {
                          return acc + item.quantity * item.productPrice;
                      }, 0)
                : 0) + (shipping.cost ? shipping.cost : 0),
    );

    const discountVoucher = useMemo(() =>
        !voucher.category
            ? (checkoutProducts.reduce((acc, item) => {
                  return acc + item.quantity * item.productPrice;
              }, 0) *
                  voucher._index) /
                  100 <=
              voucher.maxDiscount
                ? (checkoutProducts.reduce((acc, item) => {
                      return acc + item.quantity * item.productPrice;
                  }, 0) *
                      voucher._index) /
                  100
                : voucher.maxDiscount
            : checkoutProducts.reduce((acc, item) => {
                  return acc + item.quantity * item.productPrice;
              }, 0) -
                  voucher._index >
              checkoutProducts.reduce((acc, item) => {
                  return acc + item.quantity * item.productPrice;
              }, 0)
            ? checkoutProducts.reduce((acc, item) => {
                  return acc + item.quantity * item.productPrice;
              }, 0)
            : voucher._index,
    );

    const getAddresses = async () => {
        const result = await api.getRequest('/address/get-by-user/' + getUser().id);
        if (result && result.statusCode === 200) {
            setAddresses(result.data);
            setAddress(result.data.length > 0 && result.data[0]);
        }
    };
    const getShippings = async () => {
        let result = await api.getRequest(`/shipping/get-all`);
        if (result && result.statusCode === 200) setShippings(result.data);
    };

    useEffect(() => {
        getShippings();
        getAddresses();
    }, []);

    const handleCheckout = async () => {
        const order = {
            note: note,
            payment: payment,
            status: 0,
            addressId: address.id,
            shipperId: '',
            shippingId: shipping.id,
            voucherId: voucher.id,
            discountVoucher: discountVoucher,
            total: total,
        };
        if (payment === 'COD') {
            const result = await api.postRequest('/order', order);
            if (result && result.statusCode === 200) {
                checkoutProducts.forEach(async (item) => {
                    await api.postRequest('/order-item', {
                        name: item.productName,
                        image: item.productImage,
                        quantity: item.quantity,
                        price: item.productPrice,
                        color: item.productColor,
                        size: item.productSize,
                        orderId: result.data,
                        cartItemId: item.id,
                    });
                });
                localStorage.setItem('orderStatus', true);
                window.location.pathname = '/user/purchase';
            }
        } else if (payment === 'VNPAY') {
            localStorage.setItem('order', JSON.stringify(order));
            localStorage.setItem('checkoutProducts', JSON.stringify(checkoutProducts));
            navigate('/payment-vnpay');
        }
    };

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
                        <div className={styles.address_info_name}>
                            {address.username} ({address.phone})
                        </div>
                        <div className={styles.address_info_specific}>
                            {address.specification} Phường {address.ward}, Quận {address.district}, {address.city}
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
                            {checkoutProducts &&
                                checkoutProducts.map((item) => (
                                    <tr key={item.id}>
                                        <td className={styles.product}>
                                            <img
                                                className={styles.product_img}
                                                src={config.baseURL + '/getimage/product_details/' + item.productImage}
                                                alt=""
                                            />
                                            {item.productName} | {item.productColor} | {item.productSize}
                                        </td>
                                        <td className={styles.price}>
                                            ₫{Math.round(item.productPrice).toLocaleString('vi-VN')}
                                        </td>
                                        <td className={styles.quantity}>{item.quantity}</td>
                                        <td className={styles.total}>
                                            ₫{Math.round(item.productPrice * item.quantity).toLocaleString('vi-VN')}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <div className={styles.transport}>
                        <div className={styles.transport_title}>Chọn đơn vị vận chuyển</div>
                        <div className={styles.transport_list}>
                            {shippings &&
                                shippings.map((item) => (
                                    <div key={item.id} className={styles.transport_item}>
                                        <input
                                            onClick={() => dispatch(shippingSlice.actions.addShipping(item))}
                                            name="transport"
                                            className={styles.transport_item_radio}
                                            type="radio"
                                            checked={item.id === shipping.id}
                                        />
                                        <div className={styles.transport_item_text}>
                                            {item.name} - ₫{item.cost.toLocaleString('vi-VN')}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <div onClick={() => setModalVoucher(true)} className={styles.footer_left}>
                            🏷️ Chọn voucher
                        </div>
                        <div className={styles.footer_left}>Mã voucher: {voucher.name && voucher.name}</div>
                        <div className={styles.footer_right}>
                            Lời nhắn:
                            <input
                                onChange={(e) => setNote(e.target.value)}
                                className={styles.footer_right_input}
                                placeholder="Lưu ý cho người bán..."
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.payment}>
                    <div className={styles.payment_top}>
                        <div className={styles.payment_title}>Phương thức thanh toán</div>
                        <div
                            onClick={() => setPayment('COD')}
                            className={clsx(styles.payment_option, { [styles.active]: payment === 'COD' })}
                        >
                            COD
                        </div>
                        <img
                            onClick={() => setPayment('VNPAY')}
                            className={clsx(styles.payment_option, { [styles.active]: payment === 'VNPAY' })}
                            src={require('../../../assets/images/vnpay.png')}
                            alt=""
                        />
                        <img
                            onClick={() => setPayment('PAYPAL')}
                            className={clsx(styles.payment_option, { [styles.active]: payment === 'PAYPAL' })}
                            src={require('../../../assets/images/paypal.png')}
                            alt=""
                        />
                    </div>

                    <div className={styles.payment_bottom}>
                        <div className={styles.payment_bottom_item}>
                            <div className={styles.payment_bottom_left}>Tổng tiền hàng</div>
                            <div className={styles.payment_bottom_right}>
                                ₫
                                {checkoutProducts
                                    .reduce((acc, item) => {
                                        return acc + item.quantity * item.productPrice;
                                    }, 0)
                                    .toLocaleString('vi-VN')}
                            </div>
                        </div>
                        <div className={styles.payment_bottom_item}>
                            <div className={styles.payment_bottom_left}>Tổng cộng Voucher giảm giá:</div>
                            <div className={styles.payment_bottom_right}>
                                -₫
                                {voucher._index && discountVoucher.toLocaleString('vi-VN')}
                            </div>
                        </div>

                        <div className={styles.payment_bottom_item}>
                            <div className={styles.payment_bottom_left}>Phí vận chuyển</div>
                            <div className={styles.payment_bottom_right}>
                                ₫{shipping.cost && shipping.cost.toLocaleString('vi-VN')}
                            </div>
                        </div>
                        <div className={styles.payment_bottom_item}>
                            <div className={styles.payment_bottom_left}>Tổng thanh toán</div>
                            <div className={clsx(styles.payment_bottom_right, styles.payment_bottom_total)}>
                                ₫
                                {(
                                    (checkoutProducts.length > 0
                                        ? voucher._index
                                            ? voucher.category
                                                ? checkoutProducts.reduce((acc, item) => {
                                                      return acc + item.quantity * item.productPrice;
                                                  }, 0) -
                                                      voucher._index >=
                                                  0
                                                    ? checkoutProducts.reduce((acc, item) => {
                                                          return acc + item.quantity * item.productPrice;
                                                      }, 0) - voucher._index
                                                    : 0
                                                : (checkoutProducts.reduce((acc, item) => {
                                                      return acc + item.quantity * item.productPrice;
                                                  }, 0) *
                                                      voucher._index) /
                                                      100 <=
                                                  voucher.maxDiscount
                                                ? (checkoutProducts.reduce((acc, item) => {
                                                      return acc + item.quantity * item.productPrice;
                                                  }, 0) *
                                                      (100 - voucher._index)) /
                                                  100
                                                : checkoutProducts.reduce((acc, item) => {
                                                      return acc + item.quantity * item.productPrice;
                                                  }, 0) - voucher.maxDiscount
                                            : checkoutProducts.reduce((acc, item) => {
                                                  return acc + item.quantity * item.productPrice;
                                              }, 0)
                                        : 0) + (shipping.cost ? shipping.cost : 0)
                                ).toLocaleString('vi-VN')}
                            </div>
                        </div>

                        <button onClick={handleCheckout} className={styles.payment_bottom_btn}>
                            ĐẶT HÀNG
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
            {modalAddress && (
                <ListAddressModal
                    addresses={addresses}
                    address={address}
                    setAddress={setAddress}
                    setModal={setModalAddress}
                    getAddresses={getAddresses}
                />
            )}
            {modalVoucher && <VoucherModal setModal={setModalVoucher} />}
        </>
    );
}

export default Order;
