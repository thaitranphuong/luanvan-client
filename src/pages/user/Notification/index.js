import clsx from 'clsx';
import Footer from '../../../Layout/DefaultLayout/Footer';
import NavLeft from '../../../components/NavLeft';
import styles from './Notification.module.scss';

function Notification() {
    return (
        <>
            <div className={styles.wrapper}>
                <NavLeft />
                <div className={styles.box}>
                    <div className={clsx(styles.item, { [styles.not_yet_read]: true })}>
                        <img className={styles.img} src={require('../../../assets/images/product.png')} alt="" />
                        <div className={styles.info}>
                            <div className={styles.title}>Giao kiện hàng thành công</div>
                            <div className={styles.content}>
                                Kiện hàng <strong>1221321</strong> đã giao thành công đến bạn
                            </div>
                            <div className={styles.date}>10:54 25-01-2024</div>
                        </div>
                    </div>
                    <div className={clsx(styles.item, { [styles.not_yet_read]: false })}>
                        <img className={styles.img} src={require('../../../assets/images/product.png')} alt="" />
                        <div className={styles.info}>
                            <div className={styles.title}>Giao kiện hàng thành công</div>
                            <div className={styles.content}>
                                Kiện hàng <strong>1221321</strong> đã giao thành công đến bạn
                            </div>
                            <div className={styles.date}>10:54 25-01-2024</div>
                        </div>
                    </div>
                    <div className={clsx(styles.item, { [styles.not_yet_read]: false })}>
                        <img className={styles.img} src={require('../../../assets/images/product.png')} alt="" />
                        <div className={styles.info}>
                            <div className={styles.title}>Giao kiện hàng thành công</div>
                            <div className={styles.content}>
                                Kiện hàng <strong>1221321</strong> đã giao thành công đến bạn
                            </div>
                            <div className={styles.date}>10:54 25-01-2024</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Notification;
