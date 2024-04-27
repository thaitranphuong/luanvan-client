import styles from './EditCategory.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { notify, notifyError } from '../../../utils/notify';

function EditCategory() {
    const [category, setCategory] = useState({});

    const navigate = useNavigate();
    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/category/${id}`);
        setCategory(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeInput = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const result = await api.putRequest('/category', category);
        if (result && result.statusCode === 200) {
            notify('Lưu thành công');
            navigate('/admin/category');
        } else {
            notifyError('Lưu không thành công');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý danh mục" detail="Sửa danh mục">
                <Input value={category.name} onChange={handleChangeInput} name="name" label="Tên danh mục" />
                <Input value={category.code} onChange={handleChangeInput} name="code" label="Mã code" />
                <SaveButton onClick={handleSubmit} />
            </Wrapper>
        </div>
    );
}

export default EditCategory;
