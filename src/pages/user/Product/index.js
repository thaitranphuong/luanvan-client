import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { mdiCamera, mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Product.module.scss';
import product from '../../../assets/images/product.png';
import Pagination from '../../../components/Pagination';

function Product() {
    const handleUpload = () => {
        //Mở modal rồi mới upload file
        document.getElementById('fileInput').click();
    };
    return (
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
                            <div onClick={handleUpload} className={styles.top_item_search}>
                                <input id="fileInput" style={{ display: 'none' }} type="file" />
                                <Icon path={mdiCamera} size={2}></Icon>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.products}>
                            <div key={2} className={styles.product_item}>
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
                            </div>
                            <div key={2} className={styles.product_item}>
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
                            </div>
                            <div key={2} className={styles.product_item}>
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
                            </div>
                            <div key={2} className={styles.product_item}>
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
                            </div>
                            <div key={2} className={styles.product_item}>
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
                            </div>
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
    );
}

export default Product;
