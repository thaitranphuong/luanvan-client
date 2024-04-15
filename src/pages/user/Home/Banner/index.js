import { Link } from 'react-router-dom';

import styles from './Banner.module.scss';
import SlideShow from '../../../../components/SlideShow';
import { useEffect, useState } from 'react';
import api from '../../../../utils/api';
import { config } from '../../../../utils/config';

function Banner() {
    const [banners, setBanners] = useState([]);

    const render = async () => {
        let result = await api.getRequest(`/banner/get-all`);
        setBanners(result.data);
    };

    useEffect(() => {
        render();
    }, []);
    return (
        <div className={styles.slide}>
            <SlideShow>
                {banners &&
                    banners.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <img
                                className={styles.img}
                                src={config.baseURL + '/getimage/banners/' + item.image}
                                alt=""
                            />
                            <div className={styles.block}>
                                <div className={styles.block_name}>{item.name}</div>
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
                    ))}
            </SlideShow>
        </div>
    );
}

export default Banner;
