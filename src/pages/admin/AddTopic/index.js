import styles from './AddTopic.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function AddTopic() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý chủ đề" detail="Thêm chủ đề">
                <Input label="Tên chủ đề" />
                <Input label="Mã code" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default AddTopic;
