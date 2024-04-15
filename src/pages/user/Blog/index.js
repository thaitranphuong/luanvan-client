import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Icon from '@mdi/react';
import { mdiAccountOutline, mdiCommentTextOutline } from '@mdi/js';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Blog.module.scss';
import Pagination from '../../../components/Pagination';
import Head from '../../../components/Head';
import BlogRecommend from '../../../components/BlogRecommend';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { config } from '../../../utils/config';
import SearchBar from '../../../components/SearchBar';

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [topics, setTopics] = useState([]);
    const [choseTopic, setChoseTopic] = useState('');

    const getTopics = async () => {
        let result = await api.getRequest(`/topic/get-all`);
        if (result.statusCode === 200) setTopics(result.data);
    };

    const render = async () => {
        let result = await api.getRequest(`/blog?page=${page}&limit=5&name=${name}&topicId=${choseTopic}`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setBlogs(result.data.listResult);
    };

    useEffect(() => {
        getTopics();
        render();
    }, [page, name, choseTopic]);

    useEffect(() => {
        setPage(1);
    }, [name, choseTopic]);

    return (
        <div className={styles.wrapper}>
            <Head
                title="Tin tức"
                description="Hãy theo dõi những bài viết để nhận được thông tin mới nhất"
                currentPage="Tin tức"
                link="/blog"
            />

            <div className={styles.body}>
                <div className={styles.body_left}>
                    {blogs &&
                        blogs.map((item) => (
                            <Link to={`/blog-detail/${item.id}`} className={styles.blog_item}>
                                <img
                                    className={styles.blog_item_thumbnail}
                                    src={config.baseURL + '/getimage/blogs/' + item.thumbnail}
                                    alt=""
                                />
                                <div className={styles.blog_item_info}>
                                    <div className={styles.blog_item_time}>
                                        {item.updatedAt.split('-')[2]}/{item.updatedAt.split('-')[1]}
                                    </div>
                                    <div className={styles.blog_item_title}>{item.title}</div>
                                    <div className={styles.blog_item_shortdesc}>{item.shortDescription}</div>
                                    <div className={styles.blog_item_footer}>
                                        <Icon path={mdiCommentTextOutline} size={1.1} />
                                        {item.commentQuantity} Bình luận&nbsp; |&nbsp;
                                        <Icon path={mdiAccountOutline} size={1.3} />
                                        {item.authorName}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    <Pagination page={page} setPage={setPage} totalPage={totalPage} />
                </div>
                <div className={styles.body_right}>
                    <SearchBar onChange={(e) => setName(e.target.value)} placeholder="Tìm bài viết theo tiêu đề" />
                    <br />
                    <br />
                    <div className={styles.body_right_block}>
                        <div className={styles.title}>THỂ LOẠI</div>
                        <div className={styles.categories}>
                            <div
                                onClick={() => setChoseTopic('')}
                                className={clsx(styles.category, { [styles.active]: !choseTopic })}
                            >
                                Tất cả (ALL)
                            </div>
                            {topics &&
                                topics.map((item) => (
                                    <div
                                        onClick={() => setChoseTopic(item.id)}
                                        key={item.id}
                                        className={clsx(styles.category, { [styles.active]: choseTopic === item.id })}
                                    >
                                        {item.name} ({item.blogQuantity})
                                    </div>
                                ))}
                        </div>
                    </div>
                    <BlogRecommend />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
