import Footer from '../../../Layout/DefaultLayout/Footer';
import NavLeft from '../../../components/NavLeft';
import styles from './Address.module.scss';

function Address() {
    return (
        <>
            <div className={styles.wrapper}>
                <NavLeft />
                <div className={styles.box}>
                    <div className={styles.head}>
                        <div className={styles.head_title}>Địa Chỉ Của Tôi</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Address;
