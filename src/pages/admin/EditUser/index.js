import { useEffect, useState } from 'react';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import Select from '../../../components/Select';
import styles from './EditUser.module.scss';
import api from '../../../utils/api';
import { useParams } from 'react-router-dom';

function EditUser() {
    const [user, setUser] = useState({});

    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/user/${id}`);
        setUser(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const result = await api.putRequest('/user', user);
        if (result.statusCode === 200 && result.id !== null) {
            alert('Luu thanh cong');
        } else {
            alert('Email da ton tai');
        }
    };
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý người dùng" detail="Sửa người dùng">
                <Input value={user.email} onChange={handleChangeInput} name="email" label="Email" />
                <Input value={user.name} onChange={handleChangeInput} name="name" label="Họ và tên" />
                <Input value={user.phone} onChange={handleChangeInput} name="phone" label="Số điện thoại" />
                <Input value={user.address} onChange={handleChangeInput} name="address" label="Địa chỉ" />
                <Input
                    value={user.birthday}
                    onChange={handleChangeInput}
                    name="birthday"
                    label="Ngày sinh"
                    type="date"
                />
                <Select
                    value={user.gender}
                    onChange={handleChangeInput}
                    name="gender"
                    label="Giới tính"
                    array={[
                        { id: true, name: 'Nam' },
                        { id: false, name: 'Nữ' },
                    ]}
                />
                <Select
                    value={user.roleId}
                    onChange={handleChangeInput}
                    name="roleId"
                    label="Vai trò"
                    array={[
                        { id: 1, name: 'Admin' },
                        { id: 2, name: 'Saler' },
                        { id: 3, name: 'Shipper' },
                        { id: 4, name: 'Customer' },
                    ]}
                />
                <SaveButton onClick={handleSubmit} />
            </Wrapper>
        </div>
    );
}

export default EditUser;
