import Icon from '@mdi/react';

import Head from '../../../components/Head';
import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './BlogDetail.module.scss';
import { mdiAccountOutline, mdiCommentTextOutline, mdiHeart } from '@mdi/js';
import BlogRecommend from '../../../components/BlogRecommend';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../utils/api';
import { config } from '../../../utils/config';
import Pagination from '../../../components/Pagination';
import { getUser } from '../../../utils/localstorage';

function BlogDetail() {
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({});
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);

    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/blog/${id}`);
        setBlog(result.data);
    };

    const getComments = async () => {
        let result = await api.getRequest(`/comment?page=${page}&limit=5&blogId=${id}`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setComments(result.data.listResult);
    };

    useEffect(() => {
        render();
        setComment({ userId: getUser().id, blogId: id });
    }, [id]);

    useEffect(() => {
        getComments();
    }, [page, id]);

    const htmlContent = {
        __html: blog.content,
    };

    const handleChangeComment = (e) => {
        setComment({ ...comment, content: e.target.value });
    };

    const handleSaveComment = async () => {
        if (!!comment.content) {
            const result = await api.postRequest('/comment', comment);
            if (result.statusCode === 200) {
                getComments();
                setComment({ userId: getUser().id, blogId: id });
            }
        }
    };

    const handleLike = async (commentId) => {
        await api.postRequest(`/comment/like/${commentId}/${getUser().id}` + '');
        getComments();
    };

    const handleUnLike = async (commentId) => {
        await api.postRequest(`/comment/unlike/${commentId}/${getUser().id}` + '');
        getComments();
    };

    return (
        <>
            <Head
                title="Chi tiết bài đăng"
                description="Theo dõi bài đăng để nhận thông tin mới nhất"
                currentPage="Tin tức"
                link="/blog"
            />
            <div className={styles.wrapper}>
                <div className={styles.body_left}>
                    <img
                        className={styles.body_left_img}
                        src={config.baseURL + '/getimage/blogs/' + blog.thumbnail}
                        alt=""
                    />
                    <div className={styles.body_left_title}>{blog.title}</div>
                    <div className={styles.body_left_info}>
                        <Icon path={mdiCommentTextOutline} size={1.1} />
                        {blog.commentQuantity} Bình luận&nbsp; |&nbsp;
                        <Icon path={mdiAccountOutline} size={1.3} />
                        {blog.authorName}
                    </div>
                    <div className={styles.body_left_shortdesc}>
                        <i className={styles.body_left_shortdesc_inner}>{blog.shortDescription}</i>
                    </div>
                    <div className={styles.body_left_content} dangerouslySetInnerHTML={htmlContent} />
                    <div className={styles.body_left_comment}>
                        <div className={styles.body_left_comment_title}>{blog.commentQuantity} Bình luận</div>
                        <div className={styles.body_left_comment_list}>
                            {comments &&
                                comments.map((item) => (
                                    <div key={item.id} className={styles.body_left_comment_item}>
                                        <img
                                            className={styles.body_left_comment_item_avatar}
                                            src={
                                                !!item.userAvatar
                                                    ? config.baseURL + '/getimage/users/' + item.userAvatar
                                                    : require('../../../assets/images/avatar.png')
                                            }
                                            alt=""
                                        />
                                        <div className={styles.body_left_comment_item_info}>
                                            <div className={styles.body_left_comment_item_info_head}>
                                                <div className={styles.body_left_comment_item_info_head_name}>
                                                    {item.userName}
                                                </div>
                                                <div className={styles.body_left_comment_item_info_head_time}>
                                                    {item.createdTime}
                                                </div>
                                            </div>
                                            <div className={styles.body_left_comment_item_info_content}>
                                                {item.content}
                                            </div>
                                            <div className={styles.body_left_comment_item_info_like}>
                                                {item.userLikeIds.includes(getUser().id) ? (
                                                    <Icon
                                                        onClick={() => handleUnLike(item.id)}
                                                        style={{ cursor: 'pointer', color: 'red' }}
                                                        path={mdiHeart}
                                                        size={1}
                                                    />
                                                ) : (
                                                    <Icon
                                                        onClick={() => handleLike(item.id)}
                                                        style={{ cursor: 'pointer', color: '#ccc' }}
                                                        path={mdiHeart}
                                                        size={1}
                                                    />
                                                )}
                                                {item.userLikeIds.length}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
                        </div>
                        <div className={styles.body_left_comment_title}>Để lại bình luận tại đây</div>
                        <textarea
                            className={styles.body_left_comment_input}
                            placeholder="Viết bình luận"
                            onChange={handleChangeComment}
                            value={comment.content ? comment.content : ''}
                        />
                        <button onClick={handleSaveComment} className={styles.body_left_comment_btn}>
                            GỬI
                        </button>
                    </div>
                </div>
                <div className={styles.body_right}>
                    <BlogRecommend />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogDetail;
