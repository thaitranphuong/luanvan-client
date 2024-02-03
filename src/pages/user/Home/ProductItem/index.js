import { Link } from 'react-router-dom';

import styles from './ProductItem.module.scss';
import product from '../../../../assets/images/product.png';

function ProductItem() {
    return (
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
    );
}

export default ProductItem;
