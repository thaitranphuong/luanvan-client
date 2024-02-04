import Footer from '../../../Layout/DefaultLayout/Footer';
import HeaderCustom from '../../../components/HeaderCustom';
import styles from './VNPay.module.scss';

function VNPay() {
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
                    <input className={styles.input} value={802000} disabled />
                    <div className={styles.lable}>Nội dung thanh toán</div>
                    <input className={styles.input} />
                    <div className={styles.lable}>Ngân hàng</div>
                    <select className={styles.input}>
                        <option value={''}>Ngân Hàng NCB</option>
                        <option value={''}>Ngân Hàng VNPAYQR</option>
                        <option value={''}>Ngân Hàng SCB</option>
                        <option value={''}>Ngân Hàng SACOMBANK</option>
                        <option value={''}>Ngân Hàng EXIMBANK</option>
                        <option value={''}>Ngân Hàng MSBANK</option>
                        <option value={''}>Ngân Hàng NAMABANK</option>
                        <option value={''}>Ngân Hàng VISA</option>
                        <option value={''}>Ngân Hàng VNMART</option>
                        <option value={''}>Ngân Hàng VIETINBANK</option>
                        <option value={''}>Ngân Hàng VIETCOMBANK</option>
                        <option value={''}>Ngân Hàng HDBANK</option>
                        <option value={''}>Ngân Hàng DONGABANK</option>
                        <option value={''}>Ngân Hàng TPBANK</option>
                        <option value={''}>Ngân Hàng OCEANBANK</option>
                        <option value={''}>Ngân Hàng BIDV</option>
                        <option value={''}>Ngân Hàng TECHCOMBANK</option>
                        <option value={''}>Ngân Hàng VPBANK</option>
                        <option value={''}>Ngân Hàng AGRIBANK</option>
                        <option value={''}>Ngân Hàng MBBANK</option>
                        <option value={''}>Ngân Hàng ACB</option>
                        <option value={''}>Ngân Hàng OCB</option>
                        <option value={''}>Ngân Hàng SHB</option>
                        <option value={''}>Ngân Hàng IVB</option>
                    </select>
                    <div className={styles.lable}>Ngôn ngữ</div>
                    <select className={styles.input}>
                        <option value={''}>Tiếng Việt</option>
                        <option value={''}>English</option>
                    </select>
                    <button className={styles.btn}>Thanh toán</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default VNPay;
