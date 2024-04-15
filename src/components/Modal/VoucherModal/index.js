import Voucher from '../../Voucher';
import styles from './VoucherModal.module.scss';

function VoucherModal({ setModal, vouchers }) {
    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal}>
                <div className={styles.modal_title}>CHỌN VOUCHER</div>
                <div className={styles.modal_body}>
                    {vouchers && vouchers.map((item) => <Voucher key={item.id} voucher={item} />)}
                </div>
                <button onClick={() => setModal(false)} className={styles.modal_btn}>
                    ĐÓNG
                </button>
            </div>
        </div>
    );
}

export default VoucherModal;
