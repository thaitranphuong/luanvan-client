import styles from './EditWarehouse.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../utils/api';

function EditWarehouse() {
    const [warehouse, setWarehouse] = useState([]);

    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/warehouse/${id}`);
        setWarehouse(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeWarehouse = (e) => {
        setWarehouse({
            ...warehouse,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const result = await api.putRequest('/warehouse', warehouse);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý kho hàng" detail="Sửa kho hàng">
                <Input value={warehouse.name} onChange={handleChangeWarehouse} name="name" label="Tên kho" />
                <Input value={warehouse.name} onChange={handleChangeWarehouse} name="address" label="Địa chỉ" />
                <SaveButton onClick={handleSubmit} />
            </Wrapper>
        </div>
    );
}

export default EditWarehouse;
