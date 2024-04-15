import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Cart.module.scss';
import { useState } from 'react';
import VoucherModal from '../../../components/Modal/VoucherModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector, voucherSelector, checkoutSelector, shippingSelector } from '../../../redux/selectors';
import { config } from '../../../utils/config';
import cartSlice, { deleteFromCart, changeCartQuantity } from '../../../redux/slice/CartSlice';
import shippingSlice from '../../../redux/slice/ShippingSlice';
import api from '../../../utils/api';
import { useEffect } from 'react';
import voucherSlice from '../../../redux/slice/VoucherSlice';

function Cart() {
    const [modal, setModal] = useState(false);
    const [shippings, setShippings] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector(cartSelector);
    const voucher = useSelector(voucherSelector);
    const checkoutProducts = useSelector(checkoutSelector);
    const shipping = useSelector(shippingSelector);

    const getShippings = async () => {
        let result = await api.getRequest(`/shipping/get-all`);
        if (result && result.statusCode === 200) setShippings(result.data);
    };

    useEffect(() => {
        getShippings();
        dispatch(shippingSlice.actions.addShipping({}));
        dispatch(cartSlice.actions.removeAllCheckoutProduct());
        dispatch(voucherSlice.actions.addVoucher({}));
    }, []);

    const handleDeleteCartItem = (id) => {
        dispatch(deleteFromCart(id));
    };

    const handleChangeQuantity = (cartItem, quantity) => {
        quantity = parseInt(quantity);
        if (quantity > cartItem.productQuantity) {
            alert('Số lượng sản phẩm lớn hơn sản phẩm có sẵn');
            return;
        }
        if (quantity < 0) return;
        const temp = { ...cartItem, quantity: quantity };
        dispatch(changeCartQuantity(temp));
        dispatch(cartSlice.actions.removeCheckoutProduct(cartItem));
        dispatch(cartSlice.actions.addCheckoutProduct(cartItem));
    };

    const handleOrder = () => {
        if (checkoutProducts.length <= 0) alert('Chưa chọn sản phẩm');
        else if (!shipping.cost) alert('Chưa chọn đơn vị vận chuyển');
        else navigate('/order');
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
                    {cartItems &&
                        cartItems.map((item) => (
                            <div key={item.id} className={styles.product}>
                                <div className={styles.product_left}>
                                    <input
                                        onClick={(e) => {
                                            e.target.checked && dispatch(cartSlice.actions.addCheckoutProduct(item));
                                            !e.target.checked &&
                                                dispatch(cartSlice.actions.removeCheckoutProduct(item));
                                        }}
                                        type="checkbox"
                                        id=""
                                        className={styles.product_checkbox}
                                    />
                                    <img
                                        className={styles.product_thumbnail}
                                        src={config.baseURL + '/getimage/product_details/' + item.productImage}
                                        alt=""
                                    />
                                    <div className={styles.product_name}>
                                        {item.productName} | Màu: {item.productColor} | Size: {item.productSize}
                                    </div>
                                </div>
                                <div className={styles.product_right}>
                                    <div className={styles.product_price}>
                                        ₫{Math.round(item.productPrice).toLocaleString('vi-VN')}
                                    </div>
                                    <div className={styles.product_quantity}>
                                        <button
                                            onClick={() => handleChangeQuantity(item, item.quantity - 1)}
                                            className={styles.product_quantity_btn}
                                        >
                                            -
                                        </button>
                                        <input
                                            onChange={(e) => handleChangeQuantity(item, e.target.value)}
                                            type="number"
                                            value={item.quantity}
                                            className={styles.product_quantity_input}
                                        />
                                        <button
                                            onClick={() => handleChangeQuantity(item, item.quantity + 1)}
                                            className={styles.product_quantity_btn}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className={styles.product_total}>
                                        ₫{Math.round(item.productPrice * item.quantity).toLocaleString('vi-VN')}
                                    </div>
                                    <Icon
                                        onClick={() => handleDeleteCartItem(item.id)}
                                        className={styles.product_remove}
                                        path={mdiTrashCanOutline}
                                        size={1.5}
                                    />
                                </div>
                            </div>
                        ))}
                </div>
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
                                    />
                                    <div className={styles.transport_item_text}>
                                        {item.name} - ₫{item.cost.toLocaleString('vi-VN')}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className={styles.footer}>
                    <div onClick={() => setModal(true)} className={styles.footer_left}>
                        🏷️ Chọn voucher
                    </div>
                    <div className={styles.footer_left}>Mã voucher: {voucher.name}</div>
                    <div className={styles.footer_right}>
                        <div className={styles.footer_right_amount}>
                            Tổng thanh toán ({checkoutProducts.length} Sản phẩm):
                        </div>
                        <div className={styles.footer_right_total}>
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
