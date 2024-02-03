import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Icon from '@mdi/react';
import { mdiAccountOutline, mdiCommentTextOutline } from '@mdi/js';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Blog.module.scss';
import Pagination from '../../../components/Pagination';
import Head from '../../../components/Head';
import BlogRecommend from '../../../components/BlogRecommend';

function Blog() {
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
                    <Link to={`/blog-detail/${1}`} className={styles.blog_item}>
                        <img
                            className={styles.blog_item_thumbnail}
                            src={require('../../../assets/images/blog.png')}
                            alt=""
                        />
                        <div className={styles.blog_item_info}>
                            <div className={styles.blog_item_time}>24/01</div>
                            <div className={styles.blog_item_title}>
                                NTK Nguyễn Hoàng Tú lần đầu kết hợp hội họa đương đại trong BST Xuân Hè 2024
                            </div>
                            <div className={styles.blog_item_shortdesc}>
                                VTV.vn - NTK Nguyễn Hoàng Tú và họa sĩ Liêu Nguyễn Hướng Dương hợp tác cho ra đời những
                                sản phẩm tôn vinh hồn Việt bằng cách kết hợp hội họa đương đại và chất liệu truyền
                                thống.
                            </div>
                            <div className={styles.blog_item_footer}>
                                <Icon path={mdiCommentTextOutline} size={1.1} />1 Bình luận&nbsp; |&nbsp;
                                <Icon path={mdiAccountOutline} size={1.3} />
                                Trần Phương Thái
                            </div>
                        </div>
                    </Link>
                    <Link to={`/blog-detail/${1}`} className={styles.blog_item}>
                        <img
                            className={styles.blog_item_thumbnail}
                            src={require('../../../assets/images/blog.png')}
                            alt=""
                        />
                        <div className={styles.blog_item_info}>
                            <div className={styles.blog_item_time}>24/01</div>
                            <div className={styles.blog_item_title}>
                                NTK Nguyễn Hoàng Tú lần đầu kết hợp hội họa đương đại trong BST Xuân Hè 2024
                            </div>
                            <div className={styles.blog_item_shortdesc}>
                                VTV.vn - NTK Nguyễn Hoàng Tú và họa sĩ Liêu Nguyễn Hướng Dương hợp tác cho ra đời những
                                sản phẩm tôn vinh hồn Việt bằng cách kết hợp hội họa đương đại và chất liệu truyền
                                thống.
                            </div>
                            <div className={styles.blog_item_footer}>
                                <Icon path={mdiCommentTextOutline} size={1.1} />1 Bình luận&nbsp; |&nbsp;
                                <Icon path={mdiAccountOutline} size={1.3} />
                                Trần Phương Thái
                            </div>
                        </div>
                    </Link>
                    <Pagination />
                </div>
                <div className={styles.body_right}>
                    <div className={styles.body_right_block}>
                        <div className={styles.title}>THỂ LOẠI</div>
                        <div className={styles.categories}>
                            <div className={clsx(styles.category, { [styles.active]: true })}>Tất cả (ALL)</div>
                            <div className={clsx(styles.category, { [styles.active]: false })}>Thể thao (1)</div>
                            <div className={clsx(styles.category, { [styles.active]: false })}>Chính trị (1)</div>
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
