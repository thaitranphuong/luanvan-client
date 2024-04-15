import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiArrowRight, mdiCommentTextOutline } from '@mdi/js';

import blog from '../../../../assets/images/blog.png';
import styles from './Blog.module.scss';
import { config } from '../../../../utils/config';

function Blog({ blog }) {
    return (
        <Link to={`/blog-detail/${blog.id}`} className={styles.blog}>
            <div className={styles.blog_img}>
                <img
                    className={styles.blog_img_item}
                    src={config.baseURL + '/getimage/blogs/' + blog.thumbnail}
                    alt=""
                />
            </div>
            <div className={styles.blog_info}>
                <div className={styles.blog_author}>{blog.authorName}</div>
                <Icon path={mdiCommentTextOutline} size={1} />
                <div className={styles.blog_comment}>{blog.commentQuantity}</div>
            </div>
            <div className={styles.blog_title}>{blog.title}</div>
            <div className={styles.blog_more}>
                <div> XEM THÊM </div>
                <Icon path={mdiArrowRight} size={1} />
            </div>
        </Link>
    );
}

export default Blog;
