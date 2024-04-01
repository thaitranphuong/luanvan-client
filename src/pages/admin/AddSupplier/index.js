import styles from './AddSupplier.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useState } from 'react';
import api from '../../../utils/api';

function AddSupplier() {
    const [supplier, setSupplier] = useState({});

    const handleOnchange = (e) => {
        setSupplier({ ...supplier, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/supplier', supplier);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
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
