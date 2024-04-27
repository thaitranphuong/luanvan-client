import styles from './AddWarehouse.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useState } from 'react';
import api from '../../../utils/api';
import { notify, notifyError } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function AddWarehouse() {
    const [warehouse, setWarehouse] = useState({ name: '', code: '' });

    const navigate = useNavigate();

    const handleOnchange = (e) => {
        setWarehouse({ ...warehouse, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/warehouse', warehouse);
        if (result && result.statusCode === 200) {
            notify('Lưu thành công');
            navigate('/admin/warehouse');
        } else {
            notifyError('Lưu không thành công');
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
