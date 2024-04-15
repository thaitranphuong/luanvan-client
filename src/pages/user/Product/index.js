import { useEffect, useState } from 'react';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Product.module.scss';
import Pagination from '../../../components/Pagination';
import Head from '../../../components/Head';
import ProductItem from './ProductItem';
import Category from './Category';
import Top from './Top';
import ImageSearchModal from '../../../components/Modal/ImageSearchModal';
import api from '../../../utils/api';

function Product() {
    const [closeModal, setCloseModal] = useState(true);
    const [products, setProducts] = useState([]);
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [limit, setLimit] = useState(6);
    const [categoryId, setCategoryId] = useState('');
    const [brandId, setBrandId] = useState('');
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    const render = async () => {
        let result = await api.getRequest(
            `/product/customer-page?page=${page}&limit=${limit}&name=${name}&categoryId=${categoryId}&brandId=${brandId}`,
        );
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setProducts(result.data.listResult);
    };

    const getCategories = async () => {
        let result = await api.getRequest(`/category/get-all`);
        if (result.statusCode === 200) setCategories(result.data);
    };

    const getBrands = async () => {
        let result = await api.getRequest(`/brand/get-all`);
        if (result.statusCode === 200) setBrands(result.data);
    };

    useEffect(() => {
        getCategories();
        getBrands();
    }, []);

    useEffect(() => {
        render();
    }, [page, name, limit, categoryId, brandId]);

    useEffect(() => {
        setPage(1);
    }, [name, limit]);

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
                        <Category
                            setChoose={setCategoryId}
                            chose={categoryId}
                            categories={categories}
                            title={'Các danh mục'}
                        />
                        <Category
                            setChoose={setBrandId}
                            chose={brandId}
                            categories={brands}
                            title={'Các thương hiệu'}
                        />
                    </div>
                    <div className={styles.body_right}>
                        <Top
                            onChangeSearch={(e) => setName(e.target.value)}
                            onChangeLimit={(e) => setLimit(e.target.value)}
                            setCloseModal={setCloseModal}
                        />
                        <div className={styles.main}>
                            <div className={styles.products}>
                                {products && products.map((item) => <ProductItem key={item.id} product={item} />)}
                            </div>
                        </div>
                        <div className={styles.pagination}>
                            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
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
