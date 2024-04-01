import styles from './EditBrand.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';

function EditBrand() {
    const [brand, setBrand] = useState([]);

    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/brand/${id}`);
        setBrand(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeBrand = (e) => {
        setBrand({
            ...brand,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const result = await api.putRequest('/brand', brand);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhãn hàng" detail="Sửa nhãn hàng">
                <Input value={brand.name} onChange={handleChangeBrand} name="name" label="Tên nhãn hàng" />
                <Input value={brand.code} onChange={handleChangeBrand} name="code" label="Mã code" />
                <SaveButton onClick={handleSubmit} />
            </Wrapper>
        </div>
    );
}

export default EditBrand;
