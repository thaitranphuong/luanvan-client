import styles from './EditImport.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function EditImport() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhập hàng" detail="Thêm phiếu nhập">
                <Input label="Mã code" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default EditImport;
