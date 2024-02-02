import { Link } from 'react-router-dom';

import styles from './Head.module.scss';

function Head({ title, description, currentPage, link }) {
    return (
        <div className={styles.head}>
            <div className={styles.head_left}>
                <div className={styles.head_title}>{title}</div>
                <div className={styles.head_content}>{description}</div>
            </div>

            <div className={styles.head_right}>
                <Link to="/" className={styles.head_right_item}>
                    Trang chủ &nbsp;/
                </Link>
                <Link to={link} className={styles.head_right_item}>
                    {currentPage}
                </Link>
            </div>
        </div>
    );
}

export default Head;
