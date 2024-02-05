import Footer from '../../../Layout/DefaultLayout/Footer';
import NavLeft from '../../../components/NavLeft';
import styles from './Notification.module.scss';

function Notification() {
    return (
        <>
            <div className={styles.wrapper}>
                <NavLeft />
                <div className={styles.box}></div>
            </div>
            <Footer />
        </>
    );
}

export default Notification;
