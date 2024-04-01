import styles from './AddWarehouse.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useState } from 'react';
import api from '../../../utils/api';

function AddWarehouse() {
    const [warehouse, setWarehouse] = useState({ name: '', code: '' });

    const handleOnchange = (e) => {
        setWarehouse({ ...warehouse, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/warehouse', warehouse);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý kho hàng" detail="Thêm kho hàng">
                <Input onChange={handleOnchange} name="name" label="Tên kho" />
                <Input onChange={handleOnchange} name="address" label="Địa chỉ" />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default AddWarehouse;
