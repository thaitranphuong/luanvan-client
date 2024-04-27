import { useState } from 'react';

import styles from './AddCategory.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import api from '../../../utils/api';
import { notify, notifyError } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function AddCategory() {
    const [category, setCategory] = useState({ name: '', code: '' });

    const navigate = useNavigate();

    const handleOnchange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/category', category);
        if (result && result.statusCode === 200) {
            notify('Lưu thành công');
            navigate('/admin/category');
        } else {
            notifyError('Lưu không thành công');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý danh mục" detail="Thêm danh mục">
                <Input onChange={handleOnchange} name="name" label="Tên danh mục" />
                <Input onChange={handleOnchange} name="code" label="Mã code" />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default AddCategory;
