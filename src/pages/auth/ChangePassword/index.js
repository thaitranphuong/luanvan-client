import Footer from '../../../Layout/DefaultLayout/Footer';
import NavLeft from '../../../components/NavLeft';
import styles from './ChangePassword.module.scss';

function ChangePassword() {
    return (
        <>
            <div className={styles.wrapper}>
                <NavLeft />
                <div className={styles.box}>
                    <div className={styles.head}>
                        <div className={styles.head_title}>Đổi Mật Khẩu</div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.lable}>Mật Khẩu Cũ</div>
                        <input className={styles.input} />
                        <div className={styles.lable}>Mật Khẩu Mới</div>
                        <input className={styles.input} />
                        <div className={styles.lable}>Nhập Lại Mật Khẩu</div>
                        <input className={styles.input} />
                        <button className={styles.btn_submit}>Lưu</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ChangePassword;
