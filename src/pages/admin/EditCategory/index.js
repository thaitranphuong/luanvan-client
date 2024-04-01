import styles from './EditCategory.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { useParams } from 'react-router-dom';

function EditCategory() {
    const [category, setCategory] = useState({});

    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/category/${id}`);
        setCategory(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeCategory = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const result = await api.putRequest('/category', category);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý danh mục" detail="Sửa danh mục">
                <Input value={category.name} onChange={handleChangeCategory} name="name" label="Tên danh mục" />
                <Input value={category.code} onChange={handleChangeCategory} name="code" label="Mã code" />
                <SaveButton onClick={handleSubmit} />
            </Wrapper>
        </div>
    );
}

export default EditCategory;
