import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiArrowRight, mdiCommentTextOutline } from '@mdi/js';

import blog from '../../../../assets/images/blog.png';
import styles from './Blog.module.scss';

function Blog() {
    return (
        <Link to={`blog/blog-detail/${1}`} className={styles.blog}>
            <div className={styles.blog_img}>
                <img className={styles.blog_img_item} src={blog} alt="" />
            </div>
            <div className={styles.blog_info}>
                <div className={styles.blog_author}>Trần Phương Thái</div>
                <Icon path={mdiCommentTextOutline} size={1} />
                <div className={styles.blog_comment}>1 Bình luận</div>
            </div>
            <div className={styles.blog_title}>
                NTK Nguyễn Hoàng Tú lần đầu kết hợp hội họa đương đại trong BST Xuân Hè 2024
            </div>
            <div className={styles.blog_more}>
                <div> XEM THÊM </div>
                <Icon path={mdiArrowRight} size={1} />
            </div>
        </Link>
    );
}

export default Blog;
