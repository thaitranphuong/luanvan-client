import Footer from '../../../Layout/DefaultLayout/Footer';
import NavLeft from '../../../components/NavLeft';
import styles from './Purchase.module.scss';

function Purchase() {
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

export default Purchase;
