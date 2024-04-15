import { Link } from 'react-router-dom';
import { config } from '../../utils/config';
import styles from './BlogRecommend.module.scss';
import { useEffect, useState } from 'react';
import api from '../../utils/api';

function BlogRecommend() {
    const [blogs, setBlogs] = useState([]);

    const render = async () => {
        let result = await api.getRequest(`/blog?page=1&limit=3&name=`);
        setBlogs(result.data.listResult);
    };

    useEffect(() => {
        render();
    }, []);

    return (
        <div className={styles.body_right_block}>
            <div className={styles.title}>XEM NHIỀU</div>
            <div className={styles.blogs}>
                {blogs &&
                    blogs.map((item) => (
                        <Link key={item.id} to={`/blog-detail/${item.id}`} className={styles.blog}>
                            <img
                                className={styles.right_blog_img}
                                src={config.baseURL + '/getimage/blogs/' + item.thumbnail}
                                alt=""
                            />
                            <div className={styles.info}>
                                <div className={styles.right_blog_title}>{item.title}</div>
                                <div className={styles.right_blog_time}>{item.updatedAt}</div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default BlogRecommend;
