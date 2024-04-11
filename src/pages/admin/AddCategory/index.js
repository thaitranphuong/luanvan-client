import { useState } from 'react';

import styles from './AddCategory.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import api from '../../../utils/api';

function AddCategory() {
    const [category, setCategory] = useState({ name: '', code: '' });

    const handleOnchange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/category', category);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
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
