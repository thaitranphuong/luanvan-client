import { useState } from 'react';
import Footer from '../../../Layout/DefaultLayout/Footer';
import HeaderCustom from '../../../components/HeaderCustom';
import styles from './VNPay.module.scss';
import api from '../../../utils/api';

function VNPay() {
    const [bankCode, setBankCode] = useState('NCB');
    const [locale, setLocale] = useState('vn');

    const handleCheckout = async () => {
        const result = await api.getRequest(
            `/api/payment/create_payment?amount=${
                JSON.parse(localStorage.getItem('order')).total
            }&bankCode=${bankCode}&locale=${locale}`,
        );
        if (result && result.statusCode === 200) window.location.href = result.data.url;
        else alert('Lỗi');
    };

    return (
        <>
            <HeaderCustom title={'Thanh Toán VNPay'} />
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <div className={styles.title}>Thông tin thanh toán</div>
                    <div className={styles.lable}>Loại hàng hóa</div>
                    <select className={styles.input}>
                        <option value={''}>Thanh toán đơn hàng</option>
                    </select>
                    <div className={styles.lable}>Số tiền</div>
                    <input
                        className={styles.input}
                        value={JSON.parse(localStorage.getItem('order')).total.toLocaleString('vi-VN') + ' VNĐ'}
                        disabled
                    />
                    <div className={styles.lable}>Nội dung thanh toán</div>
                    <input className={styles.input} />
                    <div className={styles.lable}>Ngân hàng</div>
                    <select onChange={(e) => setBankCode(e.target.value)} value={bankCode} className={styles.input}>
                        <option value={'NCB'}>Ngân Hàng NCB</option>
                        <option value={'NCB'}>Ngân Hàng VNPAYQR</option>
                        <option value={'NCB'}>Ngân Hàng SCB</option>
                        <option value={'NCB'}>Ngân Hàng SACOMBANK</option>
                        <option value={'NCB'}>Ngân Hàng EXIMBANK</option>
                        <option value={'NCB'}>Ngân Hàng MSBANK</option>
                        <option value={'NCB'}>Ngân Hàng NAMABANK</option>
                        <option value={'NCB'}>Ngân Hàng VISA</option>
                        <option value={'NCB'}>Ngân Hàng VNMART</option>
                        <option value={'NCB'}>Ngân Hàng VIETINBANK</option>
                        <option value={'NCB'}>Ngân Hàng VIETCOMBANK</option>
                        <option value={'NCB'}>Ngân Hàng HDBANK</option>
                        <option value={'NCB'}>Ngân Hàng DONGABANK</option>
                        <option value={'NCB'}>Ngân Hàng TPBANK</option>
                        <option value={'NCB'}>Ngân Hàng OCEANBANK</option>
                        <option value={'NCB'}>Ngân Hàng BIDV</option>
                        <option value={'NCB'}>Ngân Hàng TECHCOMBANK</option>
                        <option value={'NCB'}>Ngân Hàng VPBANK</option>
                        <option value={'NCB'}>Ngân Hàng AGRIBANK</option>
                        <option value={'NCB'}>Ngân Hàng MBBANK</option>
                        <option value={'NCB'}>Ngân Hàng ACB</option>
                        <option value={'NCB'}>Ngân Hàng OCB</option>
                        <option value={'NCB'}>Ngân Hàng SHB</option>
                        <option value={'NCB'}>Ngân Hàng IVB</option>
                    </select>
                    <div className={styles.lable}>Ngôn ngữ</div>
                    <select onChange={(e) => setLocale(e.target.value)} value={locale} className={styles.input}>
                        <option value={'vn'}>Tiếng Việt</option>
                        <option value={'en'}>English</option>
                    </select>
                    <button onClick={handleCheckout} className={styles.btn}>
                        Thanh toán
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default VNPay;
