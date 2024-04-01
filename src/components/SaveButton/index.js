import styles from './SaveButton.module.scss';

function SaveButton({ onClick }) {
    return (
        <div className={styles.wrapper}>
            <button onClick={onClick} className={styles.btn}>
                Lưu thông tin
            </button>
        </div>
    );
}

export default SaveButton;
