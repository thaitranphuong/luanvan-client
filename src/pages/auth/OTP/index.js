import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './OTP.module.scss';

function OTP() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.mobile}>
                    <img className={styles.mobile_img} src={require('../../../assets/images/otp.png')} alt="otp" />
                    <div className={styles.mobile_title}>XÁC THỰC OTP</div>
                    <div className={styles.mobile_description}>Mã đã được gửi tới SĐT 6544165416</div>
                </div>
                <div className={styles.inputs}>
                    <input className={styles.input} maxLength="1" />
                    <input className={styles.input} maxLength="1" />
                    <input className={styles.input} maxLength="1" />
                    <input className={styles.input} maxLength="1" />
                    <input className={styles.input} maxLength="1" />
                    <input className={styles.input} maxLength="1" />
                </div>
                <div className={styles.question}>
                    Bạn không nhận được OTP?<div className={styles.resend}>Gửi lại</div>
                </div>
                <button className={styles.btn}>Xác thực</button>
            </div>
            <Footer />
        </>
    );
}

export default OTP;
