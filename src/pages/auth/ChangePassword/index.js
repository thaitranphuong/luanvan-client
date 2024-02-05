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
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ChangePassword;
