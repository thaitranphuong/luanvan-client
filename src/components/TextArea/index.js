import styles from './TextArea.module.scss';

function TextArea({ label, width, height }) {
    return (
        <div style={{ width: `${width}` }} className={styles.wrapper}>
            <div className={styles.label}>{label}</div>
            <textarea style={{ height: `${height}` }} className={styles.input} />
        </div>
    );
}

export default TextArea;
