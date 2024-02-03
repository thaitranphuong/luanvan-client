import styles from './BlogRecommend.module.scss';

function BlogRecommend() {
    return (
        <div className={styles.body_right_block}>
            <div className={styles.title}>XEM NHIỀU</div>
            <div className={styles.blogs}>
                <div className={styles.blog}>
                    <img className={styles.right_blog_img} src={require('../../assets/images/blog.png')} alt="" />
                    <div className={styles.info}>
                        <div className={styles.right_blog_title}>
                            NTK Nguyễn Hoàng Tú lần đầu kết hợp hội họa đương đại trong BST Xuân Hè 2024
                        </div>
                        <div className={styles.right_blog_time}>24/01/2024 15:58</div>
                    </div>
                </div>
                <div className={styles.blog}>
                    <img className={styles.right_blog_img} src={require('../../assets/images/blog.png')} alt="" />
                    <div className={styles.info}>
                        <div className={styles.right_blog_title}>
                            NTK Nguyễn Hoàng Tú lần đầu kết hợp hội họa đương đại trong BST Xuân Hè 2024
                        </div>
                        <div className={styles.right_blog_time}>24/01/2024 15:58</div>
                    </div>
                </div>
                <div className={styles.blog}>
                    <img className={styles.right_blog_img} src={require('../../assets/images/blog.png')} alt="" />
                    <div className={styles.info}>
                        <div className={styles.right_blog_title}>
                            NTK Nguyễn Hoàng Tú lần đầu kết hợp hội họa đương đại trong BST Xuân Hè 2024
                        </div>
                        <div className={styles.right_blog_time}>24/01/2024 15:58</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogRecommend;
