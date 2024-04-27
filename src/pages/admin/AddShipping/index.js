import styles from './AddShipping.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useState } from 'react';
import api from '../../../utils/api';
import { notify, notifyError } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function AddShipping() {
    const [shipping, setShipping] = useState({ name: '', code: '' });

    const navigate = useNavigate();

    const handleOnchange = (e) => {
        setShipping({ ...shipping, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/shipping', shipping);
        if (result && result.statusCode === 200) {
            notify('Lưu thành công');
            navigate('/admin/shipping');
        } else {
            notifyError('Lưu không thành công');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý loại ship" detail="Thêm loại ship">
                <Input onChange={handleOnchange} name="name" label="Tên loại ship" />
                <Input onChange={handleOnchange} name="cost" label="Giá tiền" type="number" />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default AddShipping;
