import styles from './Title.module.scss';

function Title({ title, description }) {
    return (
        <div className={styles.part}>
            <div className={styles.part_head}>
                <div className={styles.part_title}>{title}</div>
                <div className={styles.part_description}>{description}</div>
            </div>
        </div>
    );
}

export default Title;
