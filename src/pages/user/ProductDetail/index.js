import ReactImageMagnify from 'react-image-magnify';
import clsx from 'clsx';
import Icon from '@mdi/react';
import { mdiCamera, mdiCartOutline, mdiHeart, mdiHeartOutline, mdiStar } from '@mdi/js';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './ProductDetail.module.scss';
import Head from '../../../components/Head';
import api from '../../../utils/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { config } from '../../../utils/config';
import { getUser } from '../../../utils/localstorage';
import Pagination from '../../../components/Pagination';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slice/CartSlice';
import { notify, notifyError } from '../../../utils/notify';

function ProductDetail() {
    const [product, setProduct] = useState({ thumbnail: '', star: 1 });
    const [price, setPrice] = useState();
    const [colorId, setColorId] = useState();
    const [size, setSize] = useState();
    const [sizes, setSizes] = useState([]);
    const [imageUrl, setImageUrl] = useState();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({});
    const [image, setImage] = useState();
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);
    const [rate, setRate] = useState({ commentQuantity: 0 });
    const [cartItem, setCartItem] = useState({ userId: getUser().id, productId: null, quantity: 1 });

    const id = useParams().id;

    const dispatch = useDispatch();

    const htmlContent = {
        __html: product && product.fullDescription,
    };

    const render = async () => {
        let result = await api.getRequest(`/product/${id}`);
        if (result) {
            setProduct(result.data);
            setImageUrl(config.baseURL + '/getimage/products/' + result.data.thumbnail);
            if (result.data.listProductDetail[0]) {
                setColorId(result.data.listProductDetail[0].id);
                setSizes(result.data.listProductDetail[0].listProductDetailSizes);
            }
        }
    };

    const getComments = async () => {
        let result = await api.getRequest(`/comment?page=${page}&limit=5&productId=${id}`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setComments(result.data.listResult);
    };

    const getRate = async () => {
        let result = await api.getRequest(`/product/get-rate/${id}`);
        setRate(result.data);
    };

    useEffect(() => {
        render();
        getRate();
        setComment({ userId: getUser().id, productId: id });
    }, []);

    useEffect(() => {
        getComments();
    }, [page]);

    const handleLike = async (commentId) => {
        await api.postRequest(`/comment/like/${commentId}/${getUser().id}` + '');
        getComments();
    };

    const handleUnLike = async (commentId) => {
        await api.postRequest(`/comment/unlike/${commentId}/${getUser().id}` + '');
        getComments();
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
            setImage(file);
            setComment({ ...comment, image: file.name });
            reader.onload = function () {
                const img = document.createElement('img');
                img.width = '150';
                img.src = reader.result;
                imageContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChooseColor = (color, index) => {
        setColorId(color.id);
        setPrice(color.price);
        setSize();
        setCartItem({ ...cartItem, productId: null });
        setSizes(product.listProductDetail[index].listProductDetailSizes);
        setImageUrl(config.baseURL + '/getimage/product_details/' + product.listProductDetail[index].image);
    };

    const handleChooseSize = (size) => {
        setSize(size);
        if (size.quantity === 0) setCartItem({ ...cartItem, quantity: 0 });
        else setCartItem({ ...cartItem, productId: size.id, quantity: 1 });
    };

    const handleChangeQuantity = (quantity) => {
        quantity = parseInt(quantity);
        if (quantity > size.quantity) {
            notifyError('Số lượng sản phẩm lớn hơn sản phẩm có sẵn');
            quantity = size.quantity;
        }
        if (quantity < 0) return;
        setCartItem({ ...cartItem, quantity: quantity });
    };

    const handleAddToCart = () => {
        if (!!size && cartItem.quantity > 0) {
            dispatch(addToCart(cartItem));
            notify('Thêm vào giỏ hàng thành công', 'top-center');
        } else {
            notifyError('Chưa kích thước chọn sản phẩm');
        }
    };

    const handleChangeComment = (e) => {
        setComment({ ...comment, content: e.target.value });
    };

    const handleChooseStar = (star) => {
        setComment({ ...comment, star: star });
    };

    const handleSaveComment = async () => {
        if (!!comment.content || !!comment.image) {
            const formData = new FormData();
            formData.append('image', image);
            await api.uploadFileRequest('/uploadimage/comments', formData);
            await api.postRequest('/comment', comment);
            getComments();
            setComment({ userId: getUser().id, productId: id, star: 1 });
            setImage();
            getRate();
            document.getElementById('image_container').innerHTML = '';
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
                                        src: imageUrl,
                                    },
                                    largeImage: {
                                        src: imageUrl,
                                        width: 1000,
                                        height: 1000,
                                    },
                                }}
                            />
                        </div>
                        <div className={styles.product_left_sub_image}>
                            <img
                                onClick={() => setImageUrl(config.baseURL + '/getimage/products/' + product.thumbnail)}
                                className={clsx(styles.product_left_sub_image_item, {
                                    [styles.active]:
                                        imageUrl === config.baseURL + '/getimage/products/' + product.thumbnail,
                                })}
                                src={config.baseURL + '/getimage/products/' + product.thumbnail}
                                alt=""
                            />
                            {product &&
                                product.listProductDetail &&
                                product.listProductDetail.map((item) => (
                                    <img
                                        key={item.id}
                                        onClick={() =>
                                            setImageUrl(config.baseURL + '/getimage/product_details/' + item.image)
                                        }
                                        className={clsx(styles.product_left_sub_image_item, {
                                            [styles.active]:
                                                imageUrl === config.baseURL + '/getimage/product_details/' + item.image,
                                        })}
                                        src={config.baseURL + '/getimage/product_details/' + item.image}
                                        alt=""
                                    />
                                ))}
                        </div>
                    </div>
                    <div className={styles.product_right}>
                        <div className={styles.product_right_name}>{product && product.name}</div>
                        <div className={styles.product_right_info}>
                            <div className={styles.product_right_info_start}>
                                {typeof rate.averageStar === 'number' ? rate.averageStar.toFixed(1) : 5}
                                <Icon
                                    className={rate.averageStar && rate.averageStar < 0.5 && styles.none}
                                    path={mdiStar}
                                    size={1.2}
                                />
                                <Icon
                                    className={rate.averageStar && rate.averageStar < 1.5 && styles.none}
                                    path={mdiStar}
                                    size={1.2}
                                />
                                <Icon
                                    className={rate.averageStar && rate.averageStar < 2.5 && styles.none}
                                    path={mdiStar}
                                    size={1.2}
                                />
                                <Icon
                                    className={rate.averageStar && rate.averageStar < 3.5 && styles.none}
                                    path={mdiStar}
                                    size={1.2}
                                />
                                <Icon
                                    className={rate.averageStar && rate.averageStar < 4.5 && styles.none}
                                    path={mdiStar}
                                    size={1.2}
                                />
                            </div>
                            <div className={styles.product_right_info_text}>{rate.commentQuantity} Đánh giá</div>

                            <div className={styles.product_right_info_text}>
                                {product && product.soldQuantity} Đã bán
                            </div>
                        </div>
                        <div className={styles.product_right_price}>
                            <div className={styles.product_right_price_new}>
                                ₫
                                {Math.round(
                                    price
                                        ? (price * (100 - product.percentDiscount)) / 100
                                        : product &&
                                              product.showedPrice -
                                                  (product.showedPrice * product.percentDiscount) / 100,
                                ).toLocaleString('vi-VN')}
                            </div>
                            <div className={styles.product_right_price_old}>
                                ₫{Math.round(price ? price : product && product.showedPrice).toLocaleString('vi-VN')}
                            </div>
                            <div className={styles.product_right_price_discount}>
                                {product && product.percentDiscount}% GIẢM
                            </div>
                        </div>
                        <div className={styles.product_right_shortdescription}>
                            – {product && product.shortDescription}
                        </div>
                        <div className={styles.product_right_color}>
                            <div className={styles.product_right_color_lablel}>MÀU</div>
                            <div className={styles.product_right_color_list}>
                                {product &&
                                    product.listProductDetail &&
                                    product.listProductDetail.map((item, index) => (
                                        <div
                                            key={item.id}
                                            onClick={() => handleChooseColor(item, index)}
                                            className={clsx(styles.product_right_color_item, {
                                                [styles.active]: colorId === item.id,
                                            })}
                                        >
                                            <img
                                                src={config.baseURL + '/getimage/product_details/' + item.image}
                                                className={styles.product_right_color_item_img}
                                                alt=""
                                            />
                                            <div className={styles.product_right_color_item_text}>{item.color}</div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className={styles.product_right_size}>
                            <div className={styles.product_right_size_lablel}>SIZE</div>
                            <div className={styles.product_right_size_list}>
                                {sizes &&
                                    sizes.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => handleChooseSize(item)}
                                            className={clsx(styles.product_right_size_item, {
                                                [styles.active]: size ? size.id === item.id : false,
                                            })}
                                        >
                                            <div className={styles.product_right_size_item_text}>{item.size}</div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className={styles.product_right_quantity}>
                            <div className={styles.product_right_quantity_lablel}>Số lượng</div>
                            <button
                                onClick={() => !!size && handleChangeQuantity(cartItem.quantity - 1)}
                                className={styles.product_right_quantity_btn}
                            >
                                -
                            </button>
                            <input
                                disabled={!size}
                                onChange={(e) => handleChangeQuantity(e.target.value)}
                                onBlur={(e) => {
                                    (!e.target.value || e.target.value <= 0) && handleChangeQuantity(1);
                                }}
                                type="number"
                                className={styles.product_right_quantity_input}
                                value={cartItem.quantity || isNaN(cartItem.quantity) ? cartItem.quantity : 0}
                            />
                            <button
                                onClick={() => !!size && handleChangeQuantity(cartItem.quantity + 1)}
                                className={styles.product_right_quantity_btn}
                            >
                                +
                            </button>
                            <div className={styles.product_right_quantity_text}>
                                {size ? size.quantity : 0} sản phẩm có sẵn
                            </div>
                        </div>
                        <div className={styles.product_right_btn}>
                            <button onClick={handleAddToCart} className={styles.product_right_btn_add}>
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
                        <div className={styles.detail_list_right}>{product && product.categoryName}</div>
                    </div>
                    <div className={styles.detail_item}>
                        <div className={styles.detail_list_left}>Thương Hiệu</div>
                        <div className={styles.detail_list_right}>{product && product.brandName}</div>
                    </div>
                    <div className={styles.detail_item}>
                        <div className={styles.detail_list_left}>Chất liệu</div>
                        <div className={styles.detail_list_right}>{product && product.material}</div>
                    </div>
                    <div className={styles.detail_item}>
                        <div className={styles.detail_list_left}>Xuất Xứ</div>
                        <div className={styles.detail_list_right}>{product && product.origin}</div>
                    </div>
                    <div className={styles.detail_title}>MÔ TẢ SẢN PHẨM</div>
                    <div className={styles.detail_description}>
                        <div className={styles.detail_description} dangerouslySetInnerHTML={htmlContent} />
                    </div>
                </div>

                <div className={styles.comment}>
                    <div className={styles.comment_title}>ĐÁNH GIÁ SẢN PHẨM</div>
                    <div className={styles.comment_left}>
                        <div className={styles.comment_left_average}>
                            {rate && rate.averageStar > 0 ? rate.averageStar.toFixed(1) : 0} / 5
                        </div>
                        <div className={styles.comment_left_list}>
                            <img
                                className={styles.comment_left_item}
                                src={
                                    rate.averageStar >= 1
                                        ? require('../../../assets/images/start.png')
                                        : require('../../../assets/images/none-start.png')
                                }
                                alt=""
                            />
                            <img
                                className={styles.comment_left_item}
                                src={
                                    rate.averageStar >= 1.5
                                        ? require('../../../assets/images/start.png')
                                        : require('../../../assets/images/none-start.png')
                                }
                                alt=""
                            />
                            <img
                                className={styles.comment_left_item}
                                src={
                                    rate.averageStar >= 2.5
                                        ? require('../../../assets/images/start.png')
                                        : require('../../../assets/images/none-start.png')
                                }
                                alt=""
                            />
                            <img
                                className={styles.comment_left_item}
                                src={
                                    rate.averageStar >= 3.5
                                        ? require('../../../assets/images/start.png')
                                        : require('../../../assets/images/none-start.png')
                                }
                                alt=""
                            />
                            <img
                                className={styles.comment_left_item}
                                src={
                                    rate.averageStar === 4.5
                                        ? require('../../../assets/images/start.png')
                                        : require('../../../assets/images/none-start.png')
                                }
                                alt=""
                            />
                        </div>
                        <div className={styles.comment_left_total}>({rate.commentQuantity} đánh giá)</div>
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
                                        style={{ width: `${(rate.fiveStarQuantity / rate.commentQuantity) * 100}%` }}
                                        className={styles.comment_right_item_right_bar_cover}
                                    ></div>
                                </div>
                                <div className={styles.comment_right_item_right_amount}>{rate.fiveStarQuantity}</div>
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
                                        style={{ width: `${(rate.fourStarQuantity / rate.commentQuantity) * 100}%` }}
                                        className={styles.comment_right_item_right_bar_cover}
                                    ></div>
                                </div>
                                <div className={styles.comment_right_item_right_amount}>{rate.fourStarQuantity}</div>
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
                                        style={{ width: `${(rate.threeStarQuantity / rate.commentQuantity) * 100}%` }}
                                        className={styles.comment_right_item_right_bar_cover}
                                    ></div>
                                </div>
                                <div className={styles.comment_right_item_right_amount}>{rate.threeStarQuantity}</div>
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
                                        style={{ width: `${(rate.twoStarQuantity / rate.commentQuantity) * 100}%` }}
                                        className={styles.comment_right_item_right_bar_cover}
                                    ></div>
                                </div>
                                <div className={styles.comment_right_item_right_amount}>{rate.twoStarQuantity}</div>
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
                                        style={{ width: `${(rate.oneStarQuantity / rate.commentQuantity) * 100}%` }}
                                        className={styles.comment_right_item_right_bar_cover}
                                    ></div>
                                </div>
                                <div className={styles.comment_right_item_right_amount}>{rate.oneStarQuantity}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.comment_box}>
                        <div className={styles.comment_box_title}>Viết đánh giá</div>
                        <textarea
                            onChange={handleChangeComment}
                            value={comment.content ? comment.content : ''}
                            className={styles.comment_box_input}
                            placeholder="Viết đánh giá của bạn"
                        ></textarea>
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
                                    onClick={() => handleChooseStar(1)}
                                    className={styles.comment_box_action_start_item}
                                    src={require('../../../assets/images/start.png')}
                                    alt=""
                                />
                                <img
                                    onClick={() => handleChooseStar(2)}
                                    className={styles.comment_box_action_start_item}
                                    src={
                                        comment.star >= 2
                                            ? require('../../../assets/images/start.png')
                                            : require('../../../assets/images/none-start.png')
                                    }
                                    alt=""
                                />
                                <img
                                    onClick={() => handleChooseStar(3)}
                                    className={styles.comment_box_action_start_item}
                                    src={
                                        comment.star >= 3
                                            ? require('../../../assets/images/start.png')
                                            : require('../../../assets/images/none-start.png')
                                    }
                                    alt=""
                                />
                                <img
                                    onClick={() => handleChooseStar(4)}
                                    className={styles.comment_box_action_start_item}
                                    src={
                                        comment.star >= 4
                                            ? require('../../../assets/images/start.png')
                                            : require('../../../assets/images/none-start.png')
                                    }
                                    alt=""
                                />
                                <img
                                    onClick={() => handleChooseStar(5)}
                                    className={styles.comment_box_action_start_item}
                                    src={
                                        comment.star === 5
                                            ? require('../../../assets/images/start.png')
                                            : require('../../../assets/images/none-start.png')
                                    }
                                    alt=""
                                />
                            </div>
                            <button onClick={handleSaveComment} className={styles.comment_box_action_btn}>
                                GỬI
                            </button>
                        </div>
                    </div>
                    <div className={styles.comment_list}>
                        {comments &&
                            comments.map((item) => (
                                <div key={item.id} className={styles.comment_item}>
                                    <img
                                        className={styles.comment_item_avatar}
                                        src={
                                            item.userAvatar
                                                ? config.baseURL + '/getimage/users/' + item.userAvatar
                                                : require('../../../assets/images/avatar.png')
                                        }
                                        alt=""
                                    />
                                    <div className={styles.comment_item_body}>
                                        <div className={styles.comment_item_body_name}>{item.userName}</div>
                                        <div className={styles.comment_item_body_starts}>
                                            {[1, 1, 1, 1, 1].map((i, index) => {
                                                if (index + 1 <= item.star)
                                                    return (
                                                        <img
                                                            key={index}
                                                            className={styles.comment_item_body_start}
                                                            src={require('../../../assets/images/start.png')}
                                                            alt=""
                                                        />
                                                    );
                                            })}
                                        </div>
                                        <div className={styles.comment_item_body_time}>{item.createdTime}</div>
                                        <div className={styles.comment_item_body_content}>{item.content}</div>
                                        {item.image && (
                                            <img
                                                className={styles.comment_item_body_img}
                                                src={config.baseURL + '/getimage/comments/' + item.image}
                                                alt=""
                                            />
                                        )}

                                        <div className={styles.comment_item_body_like}>
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
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductDetail;
