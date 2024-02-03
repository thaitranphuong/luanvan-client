import styles from './Home.module.scss';
import Footer from '../../../Layout/DefaultLayout/Footer';
import Favor from './Favor';
import Title from './Title';
import Banner from './Banner';
import Slide from './Slide';
import ProductItem from './ProductItem';
import Blog from './Blog';

function Home() {
    return (
        <>
            <div className={styles.wrapper}>
                <Banner />
                <Favor />
                <Title title="GỢI Ý SẢN PHẨM" description={'Bạn sẽ không thất vọng khi lựa chọn'} />
                <div className={styles.products}>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
                <Title title="SẢN PHẨM BÁN CHẠY" description={'Bạn sẽ không thất vọng khi lựa chọn'} />
                <div className={styles.products}>
                    <Slide />
                </div>
                <Title title="SẢN PHẨM MỚI" description={'Bạn sẽ không thất vọng khi lựa chọn'} />
                <div className={styles.products}>
                    <Slide />
                </div>
                <Title title="BLOG MỚI ĐĂNG" description={'Những bài blog về thời trang mới nhất'} />
                <div className={styles.blogs}>
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
