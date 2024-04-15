import Icon from '@mdi/react';
import { mdiDeveloperBoard } from '@mdi/js';
import { Link } from 'react-router-dom';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import AddButton from '../../../components/AddButton';
import styles from './Import.module.scss';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import Excel from '../../../components/Excel';
import SearchBar from '../../../components/SearchBar';

function Import() {
    const [imports, setImports] = useState([]);
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);
    const [id, setId] = useState('');

    const render = async () => {
        let result = await api.getRequest(`/import?page=${page}&limit=5&id=${id}`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setImports(result.data.listResult);
    };

    useEffect(() => {
        render();
    }, [page, id]);

    useEffect(() => {
        setPage(1);
    }, [id]);

    const handleExportFile = async () => {
        const listExcel = [];
        let result = await api.getRequest(`/import/get-all`);
        result.data.forEach((item) => {
            listExcel.push({ ...item });
        });
        await Excel.exportExcel([...listExcel], 'Danh sách', 'Danh sách');
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhập hàng" detail="Danh sách phiếu nhập">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <SearchBar
                            onChange={(e) => setId(e.target.value)}
                            value={id}
                            placeholder="Tìm kiếm theo mã phiếu nhập"
                        />
                    </div>
                    <div>
                        <AddButton to="/admin/import/add-import" />
                        <ExcelButton onClick={handleExportFile} />
                    </div>
                </div>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>Mã phiếu nhập</th>
                            <th>Ngày nhập hàng</th>
                            <th>Người nhập</th>
                            <th>Nhà cung cấp</th>
                            <th>Kho hàng</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {imports &&
                            imports.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.createdTime}</td>
                                    <td>{item.employeeName}</td>
                                    <td>{item.supplierName}</td>
                                    <td>{item.warehouseName}</td>
                                    <td>
                                        <Link
                                            to={`/admin/import/edit-import/${item.id}`}
                                            style={{ marginRight: '20px', color: 'orange', cursor: 'pointer' }}
                                        >
                                            <Icon path={mdiDeveloperBoard} size={1.5} />
                                        </Link>
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

export default Import;
