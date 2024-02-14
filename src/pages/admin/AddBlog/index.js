import styles from './AddBlog.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function AddBlog() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý bài đăng" detail="Thêm bài đăng">
                <Input label="Mã code" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default AddBlog;
