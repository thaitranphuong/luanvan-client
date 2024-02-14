import styles from './AddSupplier.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function AddSupplier() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhà cung cấp" detail="Thêm nhà cung cấp">
                <Input label="Tên nhà cung cấp" />
                <Input label="Số điện thoại" />
                <Input label="Email" />
                <Input label="Địa chỉ" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default AddSupplier;
