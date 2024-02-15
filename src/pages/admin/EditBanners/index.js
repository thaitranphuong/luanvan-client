import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import styles from './EditBanners.module.scss';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function EditBanners() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý băng rôn" detail="Thêm băng rôn">
                <Input label="Tên băng rôn" />
                <Input label="Hình ảnh" type="file" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default EditBanners;
