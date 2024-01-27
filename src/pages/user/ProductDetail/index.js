import ReactImageMagnify from 'react-image-magnify';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './ProductDetail.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Icon from '@mdi/react';
import { mdiCartOutline, mdiHeartOutline, mdiStar } from '@mdi/js';

function ProductDetail() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.head}>
                    <div className={styles.head_left}>
                        <div className={styles.head_title}>Chi tiết sản phẩm</div>
                        <div className={styles.head_content}>Thông số chi tiết về sản phẩm</div>
                    </div>

                    <div className={styles.head_right}>
                        <Link to="/" className={styles.head_right_item}>
                            Trang chủ &nbsp;/
                        </Link>
                        <Link to="/product" className={styles.head_right_item}>
                            Sản phẩm
                        </Link>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.product_left}>
                        <div className={styles.product_left_thumbnail}>
                            <ReactImageMagnify
                                {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: require('../../../assets/images/product.png'),
                                    },
                                    largeImage: {
                                        src: require('../../../assets/images/product.png'),
                                        width: 1000,
                                        height: 1000,
                                    },
                                }}
                            />
                        </div>
                        <div className={styles.product_left_sub_image}>
                            <img
                                className={clsx(styles.product_left_sub_image_item, { [styles.active]: true })}
                                src={require('../../../assets/images/product.png')}
                                alt=""
                            />
                            <img
                                className={clsx(styles.product_left_sub_image_item, { [styles.active]: false })}
                                src={require('../../../assets/images/product.png')}
                                alt=""
                            />
                            <img
                                className={clsx(styles.product_left_sub_image_item, { [styles.active]: false })}
                                src={require('../../../assets/images/product.png')}
                                alt=""
                            />
                            <img
                                className={clsx(styles.product_left_sub_image_item, { [styles.active]: false })}
                                src={require('../../../assets/images/product.png')}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={styles.product_right}>
                        <div className={styles.product_right_name}>
                            Áo Thun Nam Nữ Tay Lỡ Unisex Phông Trơn Oversize Form Rộng Basic Tee ĐEN Hình Phi hành gia
                            hành tinh
                        </div>
                        <div className={styles.product_right_info}>
                            <div className={styles.product_right_info_start}>
                                4.9
                                <Icon path={mdiStar} size={1.2} />
                                <Icon path={mdiStar} size={1.2} />
                                <Icon path={mdiStar} size={1.2} />
                                <Icon path={mdiStar} size={1.2} />
                                <Icon path={mdiStar} size={1.2} />
                            </div>
                            <div className={styles.product_right_info_text}>578 Đánh giá</div>

                            <div className={styles.product_right_info_text}>100 Đã bán</div>
                        </div>
                        <div className={styles.product_right_price}>
                            <div className={styles.product_right_price_new}>₫62100</div>
                            <div className={styles.product_right_price_old}>₫100000</div>
                            <div className={styles.product_right_price_discount}>10% GIẢM</div>
                        </div>
                        <div className={styles.product_right_shortdescription}>
                            – Áp dụng engine cào lông mới giúp lông suôn mượt không xù – Áp dụng quy trình hồ lạnh để
                            giúp mặt vải suôn mượt
                        </div>
                        <div className={styles.product_right_color}>
                            <div className={styles.product_right_color_lablel}>MÀU</div>
                            <div className={styles.product_right_color_list}>
                                <div className={clsx(styles.product_right_color_item, { [styles.active]: true })}>
                                    <img
                                        src={require('../../../assets/images/product.png')}
                                        className={styles.product_right_color_item_img}
                                        alt=""
                                    />
                                    <div className={styles.product_right_color_item_text}>TRẮNG</div>
                                </div>
                                <div className={clsx(styles.product_right_color_item, { [styles.active]: false })}>
                                    <img
                                        src={require('../../../assets/images/product.png')}
                                        className={styles.product_right_color_item_img}
                                        alt=""
                                    />
                                    <div className={styles.product_right_color_item_text}>ĐEN</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.product_right_size}>
                            <div className={styles.product_right_size_lablel}>SIZE</div>
                            <div className={styles.product_right_size_list}>
                                <div className={clsx(styles.product_right_size_item, { [styles.active]: true })}>
                                    <div className={styles.product_right_size_item_text}>S</div>
                                </div>
                                <div className={clsx(styles.product_right_size_item, { [styles.active]: false })}>
                                    <div className={styles.product_right_size_item_text}>M</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.product_right_quantity}>
                            <div className={styles.product_right_quantity_lablel}>Số lượng</div>
                            <button className={styles.product_right_quantity_btn}>-</button>
                            <input type="number" className={styles.product_right_quantity_input} value={1} />
                            <button className={styles.product_right_quantity_btn}>+</button>
                            <div className={styles.product_right_quantity_text}>6432 sản phẩm có sẵn</div>
                        </div>
                        <div className={styles.product_right_btn}>
                            <button className={styles.product_right_btn_add}>
                                <Icon path={mdiCartOutline} size={1.5} />
                                THÊM VÀO GIỎ HÀNG
                            </button>
                            <button className={styles.product_right_btn_like}>
                                <Icon path={mdiHeartOutline} size={1.3} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.detail}></div>
                <div className={styles.comment}></div>
            </div>
            <Footer />
        </>
    );
}

export default ProductDetail;
