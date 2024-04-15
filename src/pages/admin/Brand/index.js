import Icon from '@mdi/react';
import { mdiPen, mdiTrashCan } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';
import styles from './Brand.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import Excel from '../../../components/Excel';

function Brand() {
    const [brands, setBrands] = useState([]);
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');

    const render = async () => {
        let result = await api.getRequest(`/brand?page=${page}&limit=5&name=${name}`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setBrands(result.data.listResult);
        console.log(result.data.listResult);
    };

    useEffect(() => {
        render();
    }, [page, name]);

    useEffect(() => {
        setPage(1);
    }, [name]);

    const handleDelete = async (id) => {
        let result = await api.deleteRequest(`/brand/${id}`);
        if (result.statusCode === 200) {
            render();
            alert('OK');
        } else {
            alert('Loi');
        }
    };

    const handleExportFile = async () => {
        const listExcel = [];
        let result = await api.getRequest(`/brand/get-all`);
        result.data.forEach((item) => {
            listExcel.push({ ...item });
        });
        await Excel.exportExcel([...listExcel], 'Danh sách', 'Danh sách');
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhãn hàng" detail="Danh sách nhãn hàng">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SearchBar
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Tìm kiếm theo nhãn hàng"
                    />
                    <div>
                        <AddButton to="/admin/brand/add-brand" />
                        <ExcelButton onClick={handleExportFile} />
                    </div>
                </div>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Mã code</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands &&
                            brands.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1 + (page - 1) * 5}</td>
                                    <td>{item.name}</td>
                                    <td>{item.code}</td>
                                    <td>
                                        <Link
                                            to={`/admin/brand/edit-brand/${item.id}`}
                                            style={{ marginRight: '20px', color: 'blue', cursor: 'pointer' }}
                                        >
                                            <Icon path={mdiPen} size={1.5} />
                                        </Link>
                                        <span
                                            onClick={() => handleDelete(item.id)}
                                            style={{ color: 'red', cursor: 'pointer' }}
                                        >
                                            <Icon path={mdiTrashCan} size={1.5} />
                                        </span>
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

export default Brand;
