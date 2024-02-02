import Icon from '@mdi/react';

import Head from '../../../components/Head';
import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './BlogDetail.module.scss';
import { mdiAccountOutline, mdiCommentTextOutline, mdiHeart } from '@mdi/js';

function BlogDetail() {
    const htmlContent = {
        __html: '<span>Giúp bạn trở nên tự tin và năng động hơn. Đôi giày Reebok dành cho nữ này có dây buộc đàn hồi cho phép bạn điều chỉnh chính xác độ vừa vặn. Một chút màu sắc trên phần gót giày giúp chúng nổi bật hơn trong khi vẫn giữ được vẻ ngoài tối giản.</span> <img src="https://vtv1.mediacdn.vn/thumb_w/640/562122370168008704/2023/11/21/352a4623-17005580802881966433491.jpg" alt="" /> <div>Giúp bạn trở nên tự tin và năng động hơn. Đôi giày Reebok dành cho nữ này có dây buộc đàn hồi cho phép bạn điều chỉnh chính xác độ vừa vặn. Một chút màu sắc trên phần gót giày giúp chúng nổi bật hơn trong khi vẫn giữ được vẻ ngoài tối giản. </div> <img src="https://vtv1.mediacdn.vn/thumb_w/640/562122370168008704/2023/11/21/352a4571-1700558080330419090993.jpg" alt="" />',
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
                    <img className={styles.body_left_img} src={require('../../../assets/images/blog.png')} alt="" />
                    <div className={styles.body_left_title}>
                        NTK Nguyễn Hoàng Tú lần đầu kết hợp hội họa đương đại trong BST Xuân Hè 2024
                    </div>
                    <div className={styles.body_left_info}>
                        <Icon path={mdiCommentTextOutline} size={1.1} />1 Bình luận&nbsp; |&nbsp;
                        <Icon path={mdiAccountOutline} size={1.3} />
                        Trần Phương Thái
                    </div>
                    <div className={styles.body_left_shortdesc}>
                        <i className={styles.body_left_shortdesc_inner}>
                            VTV.vn - NTK Nguyễn Hoàng Tú và họa sĩ Liêu Nguyễn Hướng Dương hợp tác cho ra đời những sản
                            phẩm tôn vinh hồn Việt bằng cách kết hợp hội họa đương đại và chất liệu truyền thống.
                        </i>
                    </div>
                    <div className={styles.body_left_content} dangerouslySetInnerHTML={htmlContent} />
                    <div className={styles.body_left_comment}>
                        <div className={styles.body_left_comment_title}>2 Bình luận</div>
                        <div className={styles.body_left_comment_list}>
                            <div className={styles.body_left_comment_item}>
                                <img
                                    className={styles.body_left_comment_item_avatar}
                                    src={require('../../../assets/images/avatar.png')}
                                    alt=""
                                />
                                <div className={styles.body_left_comment_item_info}>
                                    <div className={styles.body_left_comment_item_info_head}>
                                        <div className={styles.body_left_comment_item_info_head_name}>
                                            Trần Phương Thái
                                        </div>
                                        <div className={styles.body_left_comment_item_info_head_time}>2 ngày trước</div>
                                    </div>
                                    <div className={styles.body_left_comment_item_info_content}>asdsadsadas</div>
                                    <div className={styles.body_left_comment_item_info_like}>
                                        {true ? (
                                            <Icon
                                                style={{ cursor: 'pointer', color: 'red' }}
                                                path={mdiHeart}
                                                size={1}
                                            />
                                        ) : (
                                            <Icon
                                                style={{ cursor: 'pointer', color: '#ccc' }}
                                                path={mdiHeart}
                                                size={1}
                                            />
                                        )}
                                        10
                                    </div>
                                </div>
                            </div>
                            <div className={styles.body_left_comment_item}>
                                <img
                                    className={styles.body_left_comment_item_avatar}
                                    src={require('../../../assets/images/avatar.png')}
                                    alt=""
                                />
                                <div className={styles.body_left_comment_item_info}>
                                    <div className={styles.body_left_comment_item_info_head}>
                                        <div className={styles.body_left_comment_item_info_head_name}>
                                            Trần Phương Thái
                                        </div>
                                        <div className={styles.body_left_comment_item_info_head_time}>2 ngày trước</div>
                                    </div>
                                    <div className={styles.body_left_comment_item_info_content}>asdsadsadas</div>
                                    <div className={styles.body_left_comment_item_info_like}>
                                        {false ? (
                                            <Icon
                                                style={{ cursor: 'pointer', color: 'red' }}
                                                path={mdiHeart}
                                                size={1}
                                            />
                                        ) : (
                                            <Icon
                                                style={{ cursor: 'pointer', color: '#ccc' }}
                                                path={mdiHeart}
                                                size={1}
                                            />
                                        )}
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.body_left_comment_title}>Để lại bình luận tại đây</div>
                        <textarea className={styles.body_left_comment_input} placeholder="Viết bình luận" />
                        <button className={styles.body_left_comment_btn}>GỬI</button>
                    </div>
                </div>
                <div className={styles.body_right}>
                    <div className={styles.body_right_block}>
                        <div className={styles.title}>XEM NHIỀU</div>
                        <div className={styles.blogs}>
                            <div className={styles.blog}>
                                <img
                                    className={styles.right_blog_img}
                                    src={require('../../../assets/images/blog.png')}
                                    alt=""
                                />
                                <div className={styles.info}>
                                    <div className={styles.right_blog_title}>
                                        NTK Nguyễn Hoàng Tú lần đầu kết hợp hội họa đương đại trong BST Xuân Hè 2024
                                    </div>
                                    <div className={styles.right_blog_time}>24/01/2024 15:58</div>
                                </div>
                            </div>
                            <div className={styles.blog}>
                                <img
                                    className={styles.right_blog_img}
                                    src={require('../../../assets/images/blog.png')}
                                    alt=""
                                />
                                <div className={styles.info}>
                                    <div className={styles.right_blog_title}>
                                        NTK Nguyễn Hoàng Tú lần đầu kết hợp hội họa đương đại trong BST Xuân Hè 2024
                                    </div>
                                    <div className={styles.right_blog_time}>24/01/2024 15:58</div>
                                </div>
                            </div>
                            <div className={styles.blog}>
                                <img
                                    className={styles.right_blog_img}
                                    src={require('../../../assets/images/blog.png')}
                                    alt=""
                                />
                                <div className={styles.info}>
                                    <div className={styles.right_blog_title}>
                                        NTK Nguyễn Hoàng Tú lần đầu kết hợp hội họa đương đại trong BST Xuân Hè 2024
                                    </div>
                                    <div className={styles.right_blog_time}>24/01/2024 15:58</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogDetail;
