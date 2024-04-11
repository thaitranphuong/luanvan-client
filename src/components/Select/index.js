import styles from './Select.module.scss';

function Select({ label, width = '50%', array = [{ id: '', name: '' }], onChange, value, name }) {
    return (
        <div style={{ width: `${width}` }} className={styles.wrapper}>
            <div className={styles.label}>{label}</div>
            <select className={styles.input} onChange={onChange} value={value} name={name}>
                <option key="" value={''}>
                    --Chọn {label}--
                </option>
                {array.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
