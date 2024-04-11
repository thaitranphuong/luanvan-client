import styles from './EditTopic.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../utils/api';

function EditTopic() {
    const [topic, setTopic] = useState({});

    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/topic/${id}`);
        setTopic(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeInput = (e) => {
        setTopic({
            ...topic,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const result = await api.putRequest('/topic', topic);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
        }
    };
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý chủ đề" detail="Sửa chủ đề">
                <Input value={topic.name} onChange={handleChangeInput} name="name" label="Tên chủ đề" />
                <Input value={topic.code} onChange={handleChangeInput} name="code" label="Mã code" />
                <SaveButton onClick={handleSubmit} />
            </Wrapper>
        </div>
    );
}

export default EditTopic;
