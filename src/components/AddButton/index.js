import styles from './AddButton.module.scss';

function AddButton({ onClick }) {
    return (
        <button onClick={onClick} className={styles.btn}>
            +
        </button>
    );
}

export default AddButton;
