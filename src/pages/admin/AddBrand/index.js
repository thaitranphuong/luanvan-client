import styles from './AddBrand.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useState } from 'react';
import api from '../../../utils/api';
import { notify, notifyError } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function AddBrand() {
    const [brand, setBrand] = useState({ name: '', code: '' });

    const navigate = useNavigate();

    const handleOnchange = (e) => {
        setBrand({ ...brand, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/brand', brand);
        if (result && result.statusCode === 200) {
            notify('Lưu thành công');
            navigate('/admin/brand');
        } else {
            notifyError('Lưu không thành công');
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
