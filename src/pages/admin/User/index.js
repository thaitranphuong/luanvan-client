import Icon from '@mdi/react';
import { mdiPen, mdiEye, mdiEyeOff } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';
import styles from './User.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import Excel from '../../../components/Excel';

function User() {
    const [users, setUsers] = useState([]);
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    console.log(users);

    const render = async () => {
        let result = await api.getRequest(`/user?page=${page}&limit=5&name=${name}`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setUsers(result.data.listResult);
    };

    useEffect(() => {
        render();
    }, [page, name]);

    useEffect(() => {
        setPage(1);
    }, [name]);

    const handleHide = async (index) => {
        const user = { ...users[index], enabled: false };
        const result = await api.putRequest('/user', user);
        render();
    };

    const handleShow = async (index) => {
        const user = { ...users[index], enabled: true };
        const result = await api.putRequest('/user', user);
        render();
    };

    const handleExportFile = async () => {
        const listExcel = [];
        let result = await api.getRequest(`/user/get-all`);
        result.data.forEach((item) => {
            listExcel.push({ ...item });
        });
        await Excel.exportExcel([...listExcel], 'Danh sách', 'Danh sách');
    };
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý người dùng" detail="Danh sách người dùng">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SearchBar
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Tiềm kiếm theo tên người dùng"
                    />
                    <div>
                        <AddButton to="/admin/user/add-user" />
                        <ExcelButton onClick={handleExportFile} />
                    </div>
                </div>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Email</th>
                            <th>Họ và tên</th>
                            <th>Số điện thoại</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1 + (page - 1) * 5}</td>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.birthday}</td>
                                <td>{item.gender === true ? 'Nam' : 'Nữ'}</td>
                                <td>{item.role}</td>
                                <td>
                                    <Link
                                        to={`/admin/user/edit-user/${item.id}`}
                                        style={{ marginRight: '20px', color: 'blue', cursor: 'pointer' }}
                                    >
                                        <Icon path={mdiPen} size={1.5} />
                                    </Link>
                                    {item.enabled ? (
                                        <span
                                            onClick={() => handleHide(index)}
                                            style={{ color: 'green', cursor: 'pointer' }}
                                        >
                                            <Icon path={mdiEye} size={1.5} />
                                        </span>
                                    ) : (
                                        <span
                                            onClick={() => handleShow(index)}
                                            style={{ color: 'red', cursor: 'pointer' }}
                                        >
                                            <Icon path={mdiEyeOff} size={1.5} />
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ width: '100%' }}>
                    <Pagination page={page} setPage={setPage} totalPage={totalPage} />
                </div>
            </Wrapper>
        </div>
    );
}

export default User;
