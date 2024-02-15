import styles from './EditBlog.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function EditBlog() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý bài đăng" detail="Thêm bài đăng">
                <Input label="Mã code" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default EditBlog;
