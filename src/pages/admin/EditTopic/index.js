import styles from './EditTopic.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';

function EditTopic() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý chủ đề" detail="Sửa chủ đề">
                <Input label="Tên chủ đề" />
                <Input label="Mã code" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default EditTopic;
