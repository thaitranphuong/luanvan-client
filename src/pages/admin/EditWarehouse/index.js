import styles from './EditWarehouse.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function EditWarehouse() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý kho hàng" detail="Thêm kho hàng">
                <Input label="Tên kho" />
                <Input label="Địa chỉ" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default EditWarehouse;
