import styles from './Home.module.scss';
import Footer from '../../../Layout/DefaultLayout/Footer';
import Favor from './Favor';
import Title from './Title';
import Banner from './Banner';
import Slide from './Slide';
import ProductItem from './ProductItem';
import Blog from './Blog';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';

function Home() {
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [newBlogs, setNewBlogs] = useState([]);
    const getBestSalesProducts = async () => {
        const result = await api.getRequest('/product/get-best-sales');
        setBestSalesProducts(result.data);
    };

    const getNewProducts = async () => {
        const result = await api.getRequest('/product/get-new-products');
        setNewProducts(result.data);
    };

    const getNewBlogs = async () => {
        let result = await api.getRequest(`/blog?page=1&limit=3`);
        setNewBlogs(result.data.listResult);
    };

    useEffect(() => {
        getBestSalesProducts();
        getNewProducts();
        getNewBlogs();
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <Banner />
                <Favor />
                <Title title="GỢI Ý SẢN PHẨM" description={'Bạn sẽ không thất vọng khi lựa chọn'} />
                <div className={styles.products}>
                    {/* <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem /> */}
                </div>
                <Title title="SẢN PHẨM BÁN CHẠY" description={'Bạn sẽ không thất vọng khi lựa chọn'} />
                <div className={styles.products}>
                    <Slide arr={bestSalesProducts} />
                </div>
                <Title title="SẢN PHẨM MỚI" description={'Bạn sẽ không thất vọng khi lựa chọn'} />
                <div className={styles.products}>
                    <Slide arr={newProducts} />
                </div>
                <Title title="BLOG MỚI ĐĂNG" description={'Những bài blog về thời trang mới nhất'} />
                <div className={styles.blogs}>{newBlogs && newBlogs.map((item) => <Blog blog={item} />)}</div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
