import { Link } from 'react-router-dom';

import styles from './ProductItem.module.scss';
import { config } from '../../../../utils/config';

function ProductItem({ product }) {
    return (
        <Link to={`/product-detail/${product.id}`} key={1} className={styles.product_item}>
            <div className={styles.img_wrapper}>
                <img
                    className={styles.product_img}
                    src={config.baseURL + '/getimage/products/' + product.thumbnail}
                    alt=""
                />
                <div className={styles.modal_img}>
                    <div className={styles.modal_btn}>XEM THÊM</div>
                </div>
            </div>
            <div className={styles.product_info}>
                <div className={styles.product_name}>{product.name}</div>
                <div className={styles.product_price}>
                    <div className={styles.new_price}>
                        {Math.round(
                            product.showedPrice - (product.showedPrice * product.percentDiscount) / 100,
                        ).toLocaleString('vi-VN')}
                        ₫
                    </div>
                    <div className={styles.old_price}> {Math.round(product.showedPrice).toLocaleString('vi-VN')}₫</div>
                </div>
            </div>
        </Link>
    );
}

export default ProductItem;
