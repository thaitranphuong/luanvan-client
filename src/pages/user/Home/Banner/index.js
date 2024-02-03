import { Link } from 'react-router-dom';

import styles from './Banner.module.scss';
import SlideShow from '../../../../components/SlideShow';

function Banner() {
    return (
        <div className={styles.slide}>
            <SlideShow>
                <div className={styles.item}>
                    <img className={styles.img} src={require('../../../../assets/images/2.jpeg')} alt="Image 2" />
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
                    <img className={styles.img} src={require('../../../../assets/images/1.jpg')} alt="Image 2" />
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
                    <img className={styles.img} src={require('../../../../assets/images/3.jpeg')} alt="Image 2" />
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
    );
}

export default Banner;
