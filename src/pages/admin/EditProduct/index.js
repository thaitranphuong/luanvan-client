import styles from './EditProduct.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function EditProduct() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý sản phẩm" detail="Thêm sản phẩm">
                <Input label="Mã code" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default EditProduct;
