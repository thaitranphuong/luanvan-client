import Icon from '@mdi/react';
import {
    mdiArrowRight,
    mdiCommentTextOutline,
    mdiCurrencyUsd,
    mdiHeadphones,
    mdiSaleOutline,
    mdiTruckOutline,
} from '@mdi/js';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import SlideShow from '../../../components/SlideShow';
import product from '../../../assets/images/product.png';
import blog from '../../../assets/images/blog.png';
import Footer from '../../../Layout/DefaultLayout/Footer';

function Home() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.slide}>
                    <SlideShow>
                        <div className={styles.item}>
                            <img className={styles.img} src={require('../../../assets/images/2.jpeg')} alt="Image 2" />
                            <div className={styles.block}>
                                <div className={styles.block_name}>T-Shirt</div>
                                <div className={styles.block_title}>
                                    <div className={styles.text_wrapper}>
                                        <div className={styles.blue_text}>Choose</div>
                                        <div className={styles.white_text}>Your</div>
                                    </div>
                                    <div className={styles.text_wrapper}>
                                        <div className={styles.white_text}>Favorite</div>
                                        <div className={styles.blue_text}>Style</div>
                                    </div>
                                </div>
                                <div className={styles.block_content}>Lựa chọn các sản phẩm yêu thích</div>
                                <Link to="/product" className={styles.block_btn}>
                                    MUA HÀNG NGAY BÂY GIỜ
                                </Link>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img className={styles.img} src={require('../../../assets/images/1.jpg')} alt="Image 2" />
                            <div className={styles.block}>
                                <div className={styles.block_name}>T-Shirt</div>
                                <div className={styles.block_title}>
                                    <div className={styles.text_wrapper}>
                                        <div className={styles.blue_text}>Choose</div>
                                        <div className={styles.white_text}>Your</div>
                                    </div>
                                    <div className={styles.text_wrapper}>
                                        <div className={styles.white_text}>Favorite</div>
                                        <div className={styles.blue_text}>Style</div>
                                    </div>
                                </div>
                                <div className={styles.block_content}>Lựa chọn các sản phẩm yêu thích</div>
                                <Link to="/product" className={styles.block_btn}>
                                    MUA HÀNG NGAY BÂY GIỜ
                                </Link>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img className={styles.img} src={require('../../../assets/images/3.jpeg')} alt="Image 2" />
                            <div className={styles.block}>
                                <div className={styles.block_name}>T-Shirt</div>
                                <div className={styles.block_title}>
                                    <div className={styles.text_wrapper}>
                                        <div className={styles.blue_text}>Choose</div>
                                        <div className={styles.white_text}>Your</div>
                                    </div>
                                    <div className={styles.text_wrapper}>
                                        <div className={styles.white_text}>Favorite</div>
                                        <div className={styles.blue_text}>Style</div>
                                    </div>
                                </div>
                                <div className={styles.block_content}>Lựa chọn các sản phẩm yêu thích</div>
                                <Link to="/product" className={styles.block_btn}>
                                    MUA HÀNG NGAY BÂY GIỜ
                                </Link>
                            </div>
                        </div>
                    </SlideShow>
                </div>

                <div className={styles.favor}>
                    <div className={styles.favor_item}>
                        <Icon path={mdiSaleOutline} size={3}></Icon>
                        <div className={styles.favor_title}>SIÊU KHUYẾN MÃI</div>
                        <div className={styles.favor_content}>Giảm giá lên đến 50%</div>
                    </div>
                    <div className={styles.favor_item}>
                        <Icon path={mdiTruckOutline} size={3}></Icon>
                        <div className={styles.favor_title}>MIỄN PHÍ VẬN CHUYỂN</div>
                        <div className={styles.favor_content}>Phạm vi trong khoảng 10km</div>
                    </div>
                    <div className={styles.favor_item}>
                        <Icon path={mdiHeadphones} size={3}></Icon>
                        <div className={styles.favor_title}>HỖ TRỢ TẬN TÂM</div>
                        <div className={styles.favor_content}>Bất cứ lúc nào bạn cần</div>
                    </div>
                    <div className={styles.favor_item}>
                        <Icon path={mdiCurrencyUsd} size={3}></Icon>
                        <div className={styles.favor_title}>THANH TOÁN AN TOÀN</div>
                        <div className={styles.favor_content}>Các cổng thanh toán uy tín</div>
                    </div>
                </div>

                <div className={styles.part}>
                    <div className={styles.part_head}>
                        <div className={styles.part_title}>GỢI Ý SẢN PHẨM</div>
                        <div className={styles.part_description}>Bạn sẽ không thất vọng khi lựa chọn</div>
                    </div>
                </div>

                <div className={styles.products}>
                    <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                        <div className={styles.img_wrapper}>
                            <img className={styles.product_img} src={product} alt="" />
                            <div className={styles.modal_img}>
                                <div className={styles.modal_btn}>XEM THÊM</div>
                            </div>
                        </div>
                        <div className={styles.product_info}>
                            <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                            <div className={styles.product_price}>
                                <div className={styles.new_price}>185.000₫</div>
                                <div className={styles.old_price}>290.000₫</div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/product-detail/${1}`} key={1} className={styles.product_item}>
                        <div className={styles.img_wrapper}>
                            <img className={styles.product_img} src={product} alt="" />
                            <div className={styles.modal_img}>
                                <div className={styles.modal_btn}>XEM THÊM</div>
                            </div>
                        </div>
                        <div className={styles.product_info}>
                            <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                            <div className={styles.product_price}>
                                <div className={styles.new_price}>185.000₫</div>
                                <div className={styles.old_price}>290.000₫</div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                        <div className={styles.img_wrapper}>
                            <img className={styles.product_img} src={product} alt="" />
                            <div className={styles.modal_img}>
                                <div className={styles.modal_btn}>XEM THÊM</div>
                            </div>
                        </div>
                        <div className={styles.product_info}>
                            <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                            <div className={styles.product_price}>
                                <div className={styles.new_price}>185.000₫</div>
                                <div className={styles.old_price}>290.000₫</div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/product-detail/${1}`} key={1} className={styles.product_item}>
                        <div className={styles.img_wrapper}>
                            <img className={styles.product_img} src={product} alt="" />
                            <div className={styles.modal_img}>
                                <div className={styles.modal_btn}>XEM THÊM</div>
                            </div>
                        </div>
                        <div className={styles.product_info}>
                            <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                            <div className={styles.product_price}>
                                <div className={styles.new_price}>185.000₫</div>
                                <div className={styles.old_price}>290.000₫</div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                        <div className={styles.img_wrapper}>
                            <img className={styles.product_img} src={product} alt="" />
                            <div className={styles.modal_img}>
                                <div className={styles.modal_btn}>XEM THÊM</div>
                            </div>
                        </div>
                        <div className={styles.product_info}>
                            <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                            <div className={styles.product_price}>
                                <div className={styles.new_price}>185.000₫</div>
                                <div className={styles.old_price}>290.000₫</div>
                            </div>
                        </div>
                    </Link>
                    <div key={1} className={styles.product_item}>
                        <div className={styles.img_wrapper}>
                            <img className={styles.product_img} src={product} alt="" />
                            <div className={styles.modal_img}>
                                <div className={styles.modal_btn}>XEM THÊM</div>
                            </div>
                        </div>
                        <div className={styles.product_info}>
                            <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                            <div className={styles.product_price}>
                                <div className={styles.new_price}>185.000₫</div>
                                <div className={styles.old_price}>290.000₫</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.part}>
                    <div className={styles.part_head}>
                        <div className={styles.part_title}>SẢN PHẨM BÁN CHẠY</div>
                        <div className={styles.part_description}>Bạn sẽ không thất vọng khi lựa chọn</div>
                    </div>
                </div>

                <div className={styles.products}>
                    <SlideShow button autoplay={false} slidesToShow={4}>
                        <Link to={`/product-detail/${1}`} key={1} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={1} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={1} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={1} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                    </SlideShow>
                </div>

                <div className={styles.part}>
                    <div className={styles.part_head}>
                        <div className={styles.part_title}>SẢN PHẨM MỚI</div>
                        <div className={styles.part_description}>Bạn sẽ không thất vọng khi lựa chọn</div>
                    </div>
                </div>

                <div className={styles.products}>
                    <SlideShow button autoplay={false} slidesToShow={4}>
                        <Link to={`/product-detail/${1}`} key={1} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={1} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={1} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={1} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.product_img} src={product} alt="" />
                                <div className={styles.modal_img}>
                                    <div className={styles.modal_btn}>XEM THÊM</div>
                                </div>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.product_name}>SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912</div>
                                <div className={styles.product_price}>
                                    <div className={styles.new_price}>185.000₫</div>
                                    <div className={styles.old_price}>290.000₫</div>
                                </div>
                            </div>
                        </Link>
                    </SlideShow>
                </div>

                <div className={styles.part}>
                    <div className={styles.part_head}>
                        <div className={styles.part_title}>BLOG MỚI ĐĂNG</div>
                        <div className={styles.part_description}>Những bài blog về thời trang mới nhất</div>
                    </div>
                </div>

                <div className={styles.blogs}>
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
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Home;
