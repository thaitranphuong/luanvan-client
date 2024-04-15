import clsx from 'clsx';

import styles from './Category.module.scss';

function Category({ title, categories, setChoose, chose }) {
    return (
        <div className={styles.body_category_block}>
            <div className={styles.body_category_title}>{title}</div>
            <ul className={styles.body_categories}>
                <li onClick={() => setChoose('')} className={styles.body_category}>
                    <div key={0} className={clsx(styles.category_radio, { [styles.active]: chose === '' })}></div>
                    Tất cả
                </li>
                {categories &&
                    categories.map((item) => (
                        <li onClick={() => setChoose(item.id)} key={item.id} className={styles.body_category}>
                            <div className={clsx(styles.category_radio, { [styles.active]: chose === item.id })}></div>
                            {item.name}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Category;
