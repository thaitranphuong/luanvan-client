import { useState } from 'react';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Product.module.scss';
import Pagination from '../../../components/Pagination';
import Head from '../../../components/Head';
import ProductItem from './ProductItem';
import Category from './Category';
import Top from './Top';
import ImageSearchModal from '../../../components/Modal/ImageSearchModal';

function Product() {
    const [closeModal, setCloseModal] = useState(true);

    return (
        <>
            <div className={styles.wrapper}>
                <Head
                    title="Danh mục sản phẩm"
                    description="Hãy lựa chọn sản phẩm phù hợp với chính bạn nào!"
                    currentPage="Sản Phẩm"
                    link="/product"
                />

                <div className={styles.body}>
                    <div className={styles.body_left}>
                        <Category title={'Các danh mục'} />
                        <Category title={'Các thương hiệu'} />
                    </div>
                    <div className={styles.body_right}>
                        <Top setCloseModal={setCloseModal} />
                        <div className={styles.main}>
                            <div className={styles.products}>
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
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
            <ImageSearchModal closeModal={closeModal} setCloseModal={setCloseModal} />
        </>
    );
}

export default Product;
