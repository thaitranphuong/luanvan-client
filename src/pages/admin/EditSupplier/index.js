import styles from './EditSupplier.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import api from '../../../utils/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditSupplier() {
    const [supplier, setSupplier] = useState({});

    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/supplier/${id}`);
        setSupplier(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeSupplier = (e) => {
        setSupplier({
            ...supplier,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const result = await api.putRequest('/supplier', supplier);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhà cung cấp" detail="Sửa nhà cung cấp">
                <Input value={supplier.name} onChange={handleChangeSupplier} name="name" label="Tên nhà cung cấp" />
                <Input value={supplier.phone} onChange={handleChangeSupplier} name="phone" label="Số điện thoại" />
                <Input value={supplier.email} onChange={handleChangeSupplier} name="email" label="Email" />
                <Input value={supplier.address} onChange={handleChangeSupplier} name="address" label="Địa chỉ" />
                <SaveButton onClick={handleSubmit} />
            </Wrapper>
        </div>
    );
}

export default EditSupplier;
