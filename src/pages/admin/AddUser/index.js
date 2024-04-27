import { useState } from 'react';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import Select from '../../../components/Select';
import styles from './AddUser.module.scss';
import api from '../../../utils/api';
import { notify, notifyError } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const [user, setUser] = useState({ name: '', code: '' });

    const navigate = useNavigate();

    const handleOnchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/user', user);
        if (result && result.statusCode === 200 && result.data.id !== null) {
            notify('Lưu thành công');
            navigate('/admin/user');
        } else {
            notifyError('Lưu không thành công');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý người dùng" detail="Thêm người dùng">
                <Input onChange={handleOnchange} name="email" label="Email" />
                <Input onChange={handleOnchange} name="password" label="Mật khẩu" />
                <Input onChange={handleOnchange} name="name" label="Họ và tên" />
                <Input onChange={handleOnchange} name="phone" label="Số điện thoại" />
                <Input onChange={handleOnchange} name="address" label="Địa chỉ" />
                <Input onChange={handleOnchange} name="birthday" label="Ngày sinh" type="date" />
                <Select
                    onChange={handleOnchange}
                    name="gender"
                    label="Giới tính"
                    array={[
                        { id: true, name: 'Nam' },
                        { id: false, name: 'Nữ' },
                    ]}
                />
                <Select
                    onChange={handleOnchange}
                    name="roleId"
                    label="Vai trò"
                    array={[
                        { id: 1, name: 'Admin' },
                        { id: 2, name: 'Saler' },
                        { id: 3, name: 'Shipper' },
                        { id: 4, name: 'Customer' },
                    ]}
                />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default AddUser;
