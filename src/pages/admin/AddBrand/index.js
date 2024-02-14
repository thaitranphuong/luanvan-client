import styles from './AddBrand.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function AddBrand() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhãn hàng" detail="Thêm nhãn hàng">
                <Input label="Tên nhãn hàng" />
                <Input label="Mã code" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default AddBrand;
