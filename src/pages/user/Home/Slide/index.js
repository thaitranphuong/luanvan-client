import SlideShow from '../../../../components/SlideShow';
import ProductItem from '../ProductItem';

function Slide() {
    return (
        <SlideShow button autoplay={false} slidesToShow={4}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </SlideShow>
    );
}

export default Slide;
