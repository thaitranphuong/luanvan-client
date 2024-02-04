import Voucher from '../../Voucher';
import styles from './VoucherModal.module.scss';

function VoucherModal({ setModal }) {
    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal}>
                <div className={styles.modal_title}>CHỌN VOUCHER</div>
                <div className={styles.modal_body}>
                    <Voucher />
                    <Voucher />
                    <Voucher />
                </div>
                <button onClick={() => setModal(false)} className={styles.modal_btn}>
                    HỦY
                </button>
            </div>
        </div>
    );
}

export default VoucherModal;
