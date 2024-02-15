import styles from './EditCategory.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function EditCategory() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý danh mục" detail="Thêm danh mục">
                <Input label="Tên danh mục" />
                <Input label="Mã code" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default EditCategory;
