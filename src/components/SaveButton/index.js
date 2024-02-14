import styles from './SaveButton.module.scss';

function SaveButton() {
    return (
        <div className={styles.wrapper}>
            <button className={styles.btn}>Lưu thông tin</button>
        </div>
    );
}

export default SaveButton;
