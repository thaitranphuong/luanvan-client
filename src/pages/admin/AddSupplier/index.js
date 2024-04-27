import styles from './AddSupplier.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useState } from 'react';
import api from '../../../utils/api';
import { notify, notifyError } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function AddSupplier() {
    const [supplier, setSupplier] = useState({});

    const navigate = useNavigate();

    const handleOnchange = (e) => {
        setSupplier({ ...supplier, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/supplier', supplier);
        if (result && result.statusCode === 200) {
            notify('Lưu thành công');
            navigate('/admin/supplier');
        } else {
            notifyError('Lưu không thành công');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhà cung cấp" detail="Thêm nhà cung cấp">
                <Input onChange={handleOnchange} name="name" label="Tên nhà cung cấp" />
                <Input onChange={handleOnchange} name="phone" label="Số điện thoại" />
                <Input onChange={handleOnchange} name="email" label="Email" />
                <Input onChange={handleOnchange} name="address" label="Địa chỉ" />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default AddSupplier;
