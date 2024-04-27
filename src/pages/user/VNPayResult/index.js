import { useEffect } from 'react';
import Footer from '../../../Layout/DefaultLayout/Footer';
import HeaderCustom from '../../../components/HeaderCustom';
import api from '../../../utils/api';
import { notify, notifyError } from '../../../utils/notify';

function VNPayResult() {
    const saveOrder = async () => {
        const order = JSON.parse(localStorage.getItem('order'));
        const checkoutProducts = JSON.parse(localStorage.getItem('checkoutProducts'));
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
            setTimeout(() => {
                window.location.pathname = '/user/purchase';
            }, 1000);
        }
    };

    useEffect(() => {
        const url = new URL(window.location.href);
        const params = {};
        for (const [key, value] of url.searchParams.entries()) {
            params[key] = value;
        }
        if (params.vnp_TransactionStatus === '00') {
            saveOrder();
            notify('Thanh toán thành công');
            localStorage.removeItem('order');
            localStorage.removeItem('checkoutProducts');
            localStorage.setItem('orderStatus', true);
        } else {
            notifyError('Thanh toán thất bại');
            localStorage.removeItem('order');
            localStorage.removeItem('checkoutProducts');
        }
    }, []);

    return (
        <>
            <HeaderCustom title={'Thanh Toán VNPay'} />
            <Footer />
        </>
    );
}

export default VNPayResult;
