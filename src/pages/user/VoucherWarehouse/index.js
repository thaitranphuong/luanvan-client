import Footer from '../../../Layout/DefaultLayout/Footer';
import NavLeft from '../../../components/NavLeft';
import styles from './VoucherWarehouse.module.scss';

function VoucherWarehouse() {
    return (
        <>
            <div className={styles.wrapper}>
                <NavLeft />
                <div className={styles.box}>
                    <div className={styles.head}>
                        <div className={styles.head_title}>Kho Voucher</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default VoucherWarehouse;
