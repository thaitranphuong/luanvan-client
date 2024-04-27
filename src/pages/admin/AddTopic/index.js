import styles from './AddTopic.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import api from '../../../utils/api';
import { useState } from 'react';
import { notify, notifyError } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function AddTopic() {
    const [topic, setTopic] = useState({ name: '', code: '' });

    const navigate = useNavigate();

    const handleOnchange = (e) => {
        setTopic({ ...topic, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/topic', topic);
        if (result && result.statusCode === 200) {
            notify('Lưu thành công');
            navigate('/admin/topic');
        } else {
            notifyError('Lưu không thành công');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý chủ đề" detail="Thêm chủ đề">
                <Input onChange={handleOnchange} name="name" label="Tên chủ đề" />
                <Input onChange={handleOnchange} name="code" label="Mã code" />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default AddTopic;
