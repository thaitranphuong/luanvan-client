import ReactImageMagnify from 'react-image-magnify';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './ProductDetail.module.scss';
import clsx from 'clsx';
import Icon from '@mdi/react';
import { mdiCamera, mdiCartOutline, mdiHeart, mdiHeartOutline, mdiStar } from '@mdi/js';
import Head from '../../../components/Head';

function ProductDetail() {
    const htmlContent = {
        __html: '<span>Giúp bạn trở nên tự tin và năng động hơn. Đôi giày Reebok dành cho nữ này có dây buộc đàn hồi cho phép bạn điều chỉnh chính xác độ vừa vặn. Một chút màu sắc trên phần gót giày giúp chúng nổi bật hơn trong khi vẫn giữ được vẻ ngoài tối giản.</span> <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpugswgksc7mb3" > <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpugswgksc7mb3" ><div>Giúp bạn trở nên tự tin và năng động hơn. Đôi giày Reebok dành cho nữ này có dây buộc đàn hồi cho phép bạn điều chỉnh chính xác độ vừa vặn. Một chút màu sắc trên phần gót giày giúp chúng nổi bật hơn trong khi vẫn giữ được vẻ ngoài tối giản.</div>',
    };

    const handleUpload = () => {
        document.getElementById('fileInput').click();
    };

    const handleChooseFile = () => {
        const input = document.getElementById('fileInput');
        const imageContainer = document.getElementById('image_container');
        const file = input.files[0];
        imageContainer.innerHTML = '';
        if (file) {
            const reader = new FileReader();

            reader.onload = function () {
                const img = document.createElement('img');
                img.width = '150';
                img.src = reader.result;
                imageContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className={styles.wrapper}>
                <Head
                    title="Chi tiết sản phẩm"
                    description="Thông số chi tiết về sản phẩm"
                    currentPage="Sản phẩm"
                    link="/product"
                />

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
                <div className={styles.detail}>
                    <div className={styles.detail_title}>CHI TIẾT SẢN PHẨM</div>
                    <div className={styles.detail_item}>
                        <div className={styles.detail_list_left}>Danh Mục</div>
                        <div className={styles.detail_list_right}>Giày Thể Thao</div>
                    </div>
                    <div className={styles.detail_item}>
                        <div className={styles.detail_list_left}>Thương Hiệu</div>
                        <div className={styles.detail_list_right}>Nike</div>
                    </div>
                    <div className={styles.detail_item}>
                        <div className={styles.detail_list_left}>Chất liệu</div>
                        <div className={styles.detail_list_right}>Vải - Kim Loại</div>
                    </div>
                    <div className={styles.detail_item}>
                        <div className={styles.detail_list_left}>Xuất Xứ</div>
                        <div className={styles.detail_list_right}>Việt Nam</div>
                    </div>
                    <div className={styles.detail_item}>
                        <div className={styles.detail_list_left}>Kho Hàng</div>
                        <div className={styles.detail_list_right}>1</div>
                    </div>
                    <div className={styles.detail_title}>MÔ TẢ SẢN PHẨM</div>
                    <div className={styles.detail_description}>
                        <div className={styles.detail_description} dangerouslySetInnerHTML={htmlContent} />
                    </div>
                </div>

                <div className={styles.comment}>
                    <div className={styles.comment_title}>ĐÁNH GIÁ SẢN PHẨM</div>
                    <div className={styles.comment_left}>
                        <div className={styles.comment_left_average}>4.4 / 5</div>
                        <div className={styles.comment_left_list}>
                            <img
                                className={styles.comment_left_item}
                                src={require('../../../assets/images/start.png')}
                                alt=""
                            />
                            <img
                                className={styles.comment_left_item}
                                src={require('../../../assets/images/start.png')}
                                alt=""
                            />
                            <img
                                className={styles.comment_left_item}
                                src={require('../../../assets/images/start.png')}
                                alt=""
                            />
                            <img
                                className={styles.comment_left_item}
                                src={require('../../../assets/images/start.png')}
                                alt=""
                            />
                            <img
                                className={styles.comment_left_item}
                                src={require('../../../assets/images/half-start.png')}
                                alt=""
                            />
                        </div>
                        <div className={styles.comment_left_total}>(1194 đánh giá)</div>
                    </div>
                    <div className={styles.comment_right}>
                        <div className={styles.comment_right_item}>
                            <div className={styles.comment_right_item_left}>
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                            </div>
                            <div className={styles.comment_right_item_right}>
                                <div className={styles.comment_right_item_right_bar}>
                                    <div
                                        style={{ width: `${70}%` }}
                                        className={styles.comment_right_item_right_bar_cover}
                                    ></div>
                                </div>
                                <div className={styles.comment_right_item_right_amount}>820</div>
                            </div>
                        </div>
                        <div className={styles.comment_right_item}>
                            <div className={styles.comment_right_item_left}>
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                            </div>
                            <div className={styles.comment_right_item_right}>
                                <div className={styles.comment_right_item_right_bar}>
                                    <div
                                        style={{ width: `${0}%` }}
                                        className={styles.comment_right_item_right_bar_cover}
                                    ></div>
                                </div>
                                <div className={styles.comment_right_item_right_amount}>820</div>
                            </div>
                        </div>
                        <div className={styles.comment_right_item}>
                            <div className={styles.comment_right_item_left}>
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                            </div>
                            <div className={styles.comment_right_item_right}>
                                <div className={styles.comment_right_item_right_bar}>
                                    <div
                                        style={{ width: `${5}%` }}
                                        className={styles.comment_right_item_right_bar_cover}
                                    ></div>
                                </div>
                                <div className={styles.comment_right_item_right_amount}>820</div>
                            </div>
                        </div>
                        <div className={styles.comment_right_item}>
                            <div className={styles.comment_right_item_left}>
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                            </div>
                            <div className={styles.comment_right_item_right}>
                                <div className={styles.comment_right_item_right_bar}>
                                    <div
                                        style={{ width: `${40}%` }}
                                        className={styles.comment_right_item_right_bar_cover}
                                    ></div>
                                </div>
                                <div className={styles.comment_right_item_right_amount}>820</div>
                            </div>
                        </div>
                        <div className={styles.comment_right_item}>
                            <div className={styles.comment_right_item_left}>
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_right_item_left_start}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                            </div>
                            <div className={styles.comment_right_item_right}>
                                <div className={styles.comment_right_item_right_bar}>
                                    <div
                                        style={{ width: `${10}%` }}
                                        className={styles.comment_right_item_right_bar_cover}
                                    ></div>
                                </div>
                                <div className={styles.comment_right_item_right_amount}>820</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.comment_box}>
                        <div className={styles.comment_box_title}>Viết đánh giá</div>
                        <textarea className={styles.comment_box_input} placeholder="Viết đánh giá của bạn"></textarea>
                        <div id="image_container" className={styles.modal_upload_image}></div>
                        <div className={styles.comment_box_action}>
                            <div className={styles.comment_box_action_upload}>
                                <Icon onClick={handleUpload} path={mdiCamera} size={2} />
                                <input
                                    value={null}
                                    onChange={handleChooseFile}
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    type="file"
                                />
                            </div>
                            <div className={styles.comment_box_action_start_list}>
                                <img
                                    className={styles.comment_box_action_start_item}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_box_action_start_item}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_box_action_start_item}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_box_action_start_item}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                                <img
                                    className={styles.comment_box_action_start_item}
                                    src={require('../../../assets/images/none-start.png')}
                                    alt=""
                                />
                            </div>
                            <button className={styles.comment_box_action_btn}>GỬI</button>
                        </div>
                    </div>
                    <div className={styles.comment_list}>
                        <div className={styles.comment_item}>
                            <img
                                className={styles.comment_item_avatar}
                                src={require('../../../assets/images/avatar.png')}
                                alt=""
                            />
                            <div className={styles.comment_item_body}>
                                <div className={styles.comment_item_body_name}>Trần Phương Thái</div>
                                <div className={styles.comment_item_body_starts}>
                                    <img
                                        className={styles.comment_item_body_start}
                                        src={require('../../../assets/images/start.png')}
                                        alt=""
                                    />
                                    <img
                                        className={styles.comment_item_body_start}
                                        src={require('../../../assets/images/start.png')}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.comment_item_body_time}>02:52:07 30/01/2024</div>
                                <div className={styles.comment_item_body_content}>
                                    asdasdsa asdasd asda sada asdd asdasd asd
                                </div>
                                <img
                                    className={styles.comment_item_body_img}
                                    src={require('../../../assets/images/product.png')}
                                    alt=""
                                />
                                <div className={styles.comment_item_body_like}>
                                    {true ? (
                                        <Icon style={{ cursor: 'pointer', color: 'red' }} path={mdiHeart} size={1} />
                                    ) : (
                                        <Icon style={{ cursor: 'pointer', color: '#ccc' }} path={mdiHeart} size={1} />
                                    )}
                                    10
                                </div>
                            </div>
                        </div>

                        <div className={styles.comment_item}>
                            <img
                                className={styles.comment_item_avatar}
                                src={require('../../../assets/images/avatar.png')}
                                alt=""
                            />
                            <div className={styles.comment_item_body}>
                                <div className={styles.comment_item_body_name}>Trần Phương Thái</div>
                                <div className={styles.comment_item_body_starts}>
                                    <img
                                        className={styles.comment_item_body_start}
                                        src={require('../../../assets/images/start.png')}
                                        alt=""
                                    />
                                    <img
                                        className={styles.comment_item_body_start}
                                        src={require('../../../assets/images/start.png')}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.comment_item_body_time}>02:52:07 30/01/2024</div>
                                <div className={styles.comment_item_body_content}>
                                    asdasdsa asdasd asda sada asdd asdasd asd
                                </div>
                                <img
                                    className={styles.comment_item_body_img}
                                    src={require('../../../assets/images/product.png')}
                                    alt=""
                                />
                                <div className={styles.comment_item_body_like}>
                                    {false ? (
                                        <Icon style={{ cursor: 'pointer', color: 'red' }} path={mdiHeart} size={1} />
                                    ) : (
                                        <Icon style={{ cursor: 'pointer', color: '#ccc' }} path={mdiHeart} size={1} />
                                    )}
                                    2
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

export default ProductDetail;
