import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { mdiCamera } from '@mdi/js';
import Icon from '@mdi/react';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Product.module.scss';
import product from '../../../assets/images/product.png';
import Pagination from '../../../components/Pagination';
import { useState } from 'react';

function Product() {
    const [closeModal, setCloseModal] = useState(true);

    const handleChooseFile = () => {
        const input = document.getElementById('fileInput');
        const imageContainer = document.getElementById('image_container');
        const file = input.files[0];
        imageContainer.innerHTML = 'Tải hình ảnh để tìm kiếm';
        if (file) {
            imageContainer.innerHTML = '';
            const reader = new FileReader();

            reader.onload = function () {
                const img = document.createElement('img');
                img.width = '250';
                img.src = reader.result;
                imageContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = () => {
        document.getElementById('fileInput').click();
    };

    const handleCloseModal = () => {
        setCloseModal(true);
    };

    const handleOpenModal = () => {
        setCloseModal(false);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.head}>
                    <div className={styles.head_left}>
                        <div className={styles.head_title}>Danh mục sản phẩm</div>
                        <div className={styles.head_content}>Hãy lựa chọn sản phẩm phù hợp với chính bạn nào!</div>
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
                <div className={styles.body}>
                    <div className={styles.body_left}>
                        <div className={styles.body_category_block}>
                            <div className={styles.body_category_title}>Các danh mục</div>
                            <ul className={styles.body_categories}>
                                <li className={styles.body_category}>
                                    <div className={styles.category_radio}></div>
                                    Tất cả
                                </li>
                                <li className={styles.body_category}>
                                    <div className={clsx(styles.category_radio, { [styles.active]: true })}></div>
                                    Áo thun
                                </li>
                                <li className={styles.body_category}>
                                    <div className={clsx(styles.category_radio, { [styles.active]: false })}></div>
                                    Áo sơ mi
                                </li>
                                <li className={styles.body_category}>
                                    <div className={clsx(styles.category_radio, { [styles.active]: false })}></div>
                                    Quần dài
                                </li>
                                <li className={styles.body_category}>
                                    <div className={clsx(styles.category_radio, { [styles.active]: false })}></div>
                                    Quần đùi
                                </li>
                            </ul>
                        </div>

                        <div className={styles.body_category_block}>
                            <div className={styles.body_category_title}>Các thương hiệu</div>
                            <ul className={styles.body_categories}>
                                <li className={styles.body_category}>
                                    <div className={styles.category_radio}></div>
                                    Tất cả
                                </li>
                                <li className={styles.body_category}>
                                    <div className={clsx(styles.category_radio, { [styles.active]: true })}></div>
                                    Outerity
                                </li>
                                <li className={styles.body_category}>
                                    <div className={clsx(styles.category_radio, { [styles.active]: false })}></div>
                                    Otis.Club
                                </li>
                                <li className={styles.body_category}>
                                    <div className={clsx(styles.category_radio, { [styles.active]: false })}></div>
                                    Twenti
                                </li>
                                <li className={styles.body_category}>
                                    <div className={clsx(styles.category_radio, { [styles.active]: false })}></div>
                                    3123
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.body_right}>
                        <div className={styles.top}>
                            <select className={styles.top_item}>
                                <option className={styles.top_item_option} value="">
                                    Sắp xếp
                                </option>
                                <option className={styles.top_item_option} value="">
                                    Theo giá
                                </option>
                                <option className={styles.top_item_option} value="">
                                    Theo tên
                                </option>
                            </select>
                            <select className={styles.top_item}>
                                <option className={styles.top_item_option} value="">
                                    Hiển thị 6
                                </option>
                                <option className={styles.top_item_option} value="">
                                    Hiển thị 9
                                </option>
                            </select>
                            <div className={styles.top_item}>
                                <input className={styles.top_item_input} placeholder="Tìm kiến sản phẩm theo tên" />
                                <div onClick={handleOpenModal} className={styles.top_item_search}>
                                    <Icon path={mdiCamera} size={2}></Icon>
                                </div>
                            </div>
                        </div>
                        <div className={styles.main}>
                            <div className={styles.products}>
                                <Link to={`/product-detail/${1}`} key={2} className={styles.product_item}>
                                    <div className={styles.img_wrapper}>
                                        <img className={styles.product_img} src={product} alt="" />
                                        <div className={styles.modal_img}>
                                            <div className={styles.modal_btn}>XEM THÊM</div>
                                        </div>
                                        <div className={styles.product_discount_label}>-40%</div>
                                    </div>
                                    <div className={styles.product_info}>
                                        <div className={styles.product_name}>
                                            SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912
                                        </div>
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
                                        <div className={styles.product_discount_label}>-40%</div>
                                    </div>
                                    <div className={styles.product_info}>
                                        <div className={styles.product_name}>
                                            SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912
                                        </div>
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
                                        <div className={styles.product_discount_label}>-40%</div>
                                    </div>
                                    <div className={styles.product_info}>
                                        <div className={styles.product_name}>
                                            SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912
                                        </div>
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
                                        <div className={styles.product_discount_label}>-40%</div>
                                    </div>
                                    <div className={styles.product_info}>
                                        <div className={styles.product_name}>
                                            SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912
                                        </div>
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
                                        <div className={styles.product_discount_label}>-40%</div>
                                    </div>
                                    <div className={styles.product_info}>
                                        <div className={styles.product_name}>
                                            SƠ MI HỌA TIẾT SM41912 SƠ MI HỌA TIẾT SM41912
                                        </div>
                                        <div className={styles.product_price}>
                                            <div className={styles.new_price}>185.000₫</div>
                                            <div className={styles.old_price}>290.000₫</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.pagination}>
                            <Pagination itemsPerPage={2} />
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
            <div onClick={handleCloseModal} className={clsx(styles.modal, { [styles.close]: closeModal })}>
                <div onClick={(e) => e.stopPropagation()} className={styles.modal_upload}>
                    <div onClick={handleUpload} className={styles.modal_upload_btn}>
                        <input
                            value={null}
                            onChange={handleChooseFile}
                            id="fileInput"
                            style={{ display: 'none' }}
                            type="file"
                        />
                        <Icon path={mdiCamera} size={2}></Icon>
                    </div>
                    <div id="image_container" className={styles.modal_upload_image}>
                        Tải hình ảnh để tìm kiếm
                    </div>
                    <button className={styles.modal_search_btn}>Tìm kiếm</button>
                </div>
            </div>
        </>
    );
}

export default Product;
