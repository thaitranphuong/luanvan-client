import styles from './Input.module.scss';

function Input({ label, width = '50%', disabled, type, onChange }) {
    return (
        <div style={{ width: `${width}` }} className={styles.wrapper}>
            <div className={styles.label}>{label}</div>
            {disabled ? (
                <input type={type} style={{ backgroundColor: '#e9ecef' }} disabled className={styles.input} />
            ) : (
                <input onChange={onChange} type={type} className={styles.input} />
            )}
        </div>
    );
}

export default Input;
