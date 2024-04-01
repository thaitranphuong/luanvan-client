import styles from './AddBrand.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useState } from 'react';
import api from '../../../utils/api';

function AddBrand() {
    const [brand, setBrand] = useState({ name: '', code: '' });

    const handleOnchange = (e) => {
        setBrand({ ...brand, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/brand', brand);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhãn hàng" detail="Thêm nhãn hàng">
                <Input onChange={handleOnchange} name="name" label="Tên nhãn hàng" />
                <Input onChange={handleOnchange} name="code" label="Mã code" />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default AddBrand;
