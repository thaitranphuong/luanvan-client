import styles from './AddShipping.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useState } from 'react';
import api from '../../../utils/api';

function AddShipping() {
    const [shipping, setShipping] = useState({ name: '', code: '' });

    const handleOnchange = (e) => {
        setShipping({ ...shipping, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/shipping', shipping);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
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
