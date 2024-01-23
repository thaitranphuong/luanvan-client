import { Link } from 'react-router-dom';
import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Blog.module.scss';

function Blog() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <div className={styles.head_left}>
                    <div className={styles.head_title}>Tin tức</div>
                    <div className={styles.head_content}>
                        Hãy theo dõi những bài viết để nhận được thông tin mới nhất
                    </div>
                </div>

                <div className={styles.head_right}>
                    <Link to="/" className={styles.head_right_item}>
                        Trang chủ &nbsp;/
                    </Link>
                    <Link to="/blog" className={styles.head_right_item}>
                        Tin tức
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
