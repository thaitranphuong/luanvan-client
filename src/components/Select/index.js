import styles from './Select.module.scss';

function Select({ label, width, array = [{ id: '', name: '' }] }) {
    return (
        <div style={{ width: `${width}` }} className={styles.wrapper}>
            <div className={styles.label}>{label}</div>
            <select className={styles.input}>
                {array.map((item) => (
                    <option value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;
