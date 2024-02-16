import styles from './EditShipping.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function EditShipping() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý loại ship" detail="Sửa loại ship">
                <Input label="Tên loại ship" />
                <Input label="Giá tiền" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default EditShipping;
