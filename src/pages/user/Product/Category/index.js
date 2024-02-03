import clsx from 'clsx';

import styles from './Category.module.scss';

function Category({ title }) {
    return (
        <div className={styles.body_category_block}>
            <div className={styles.body_category_title}>{title}</div>
            <ul className={styles.body_categories}>
                <li className={styles.body_category}>
                    <div className={styles.category_radio}></div>
                    Tất cả
                </li>
                <li className={styles.body_category}>
                    <div className={clsx(styles.category_radio, { [styles.active]: true })}></div>
                    Áo thun
                </li>
                <li className={styles.body_category}>
                    <div className={clsx(styles.category_radio, { [styles.active]: false })}></div>
                    Áo sơ mi
                </li>
                <li className={styles.body_category}>
                    <div className={clsx(styles.category_radio, { [styles.active]: false })}></div>
                    Quần dài
                </li>
                <li className={styles.body_category}>
                    <div className={clsx(styles.category_radio, { [styles.active]: false })}></div>
                    Quần đùi
                </li>
            </ul>
        </div>
    );
}

export default Category;
