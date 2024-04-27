import SlideShow from '../../../../components/SlideShow';
import ProductItem from '../ProductItem';

function Slide({ arr }) {
    return (
        <SlideShow button autoplay={false} slidesToShow={4}>
            {arr && arr.map((item) => <ProductItem key={item.id} product={item} />)}
        </SlideShow>
    );
}

export default Slide;
