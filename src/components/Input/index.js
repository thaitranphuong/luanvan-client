import styles from './Input.module.scss';

function Input({ label, width, disabled }) {
    return (
        <div style={{ width: `${width}` }} className={styles.wrapper}>
            <div className={styles.label}>{label}</div>
            {disabled ? (
                <input style={{ backgroundColor: '#e9ecef' }} disabled className={styles.input} />
            ) : (
                <input className={styles.input} />
            )}
        </div>
    );
}

export default Input;
