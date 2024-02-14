import styles from './AddShipping.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function AddShipping() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý loại ship" detail="Thêm loại ship">
                <Input label="Tên loại ship" />
                <Input label="Giá tiền" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default AddShipping;
