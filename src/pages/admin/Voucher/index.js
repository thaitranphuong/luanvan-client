import Icon from '@mdi/react';
import { mdiPen, mdiTrashCan } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';
import styles from './Voucher.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import Excel from '../../../components/Excel';

function Voucher() {
    const [vouchers, setVouchers] = useState([]);
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');

    const render = async () => {
        let result = await api.getRequest(`/voucher?page=${page}&limit=5&name=${name}`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setVouchers(result.data.listResult);
    };

    useEffect(() => {
        render();
    }, [page, name]);

    useEffect(() => {
        setPage(1);
    }, [name]);

    const handleDelete = async (id) => {
        let result = await api.deleteRequest(`/voucher/${id}`);
        if (result.statusCode === 200) {
            render();
            alert('OK');
        } else {
            alert('Loi');
        }
    };

    const handleExportFile = async () => {
        const listExcel = [];
        let result = await api.getRequest(`/voucher/get-all`);
        result.data.forEach((item) => {
            listExcel.push({ ...item });
        });
        await Excel.exportExcel([...listExcel], 'Danh sách', 'Danh sách');
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý voucher" detail="Danh sách voucher">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SearchBar
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Tìm kiếm theo mã voucher"
                    />
                    <div>
                        <AddButton to="/admin/voucher/add-voucher" />
                        <ExcelButton onClick={handleExportFile} />
                    </div>
                </div>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã voucher</th>
                            <th>Chỉ số giảm</th>
                            <th>Giảm tối đa</th>
                            <th>Số lượng</th>
                            <th>Còn lại</th>
                            <th>Loại</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vouchers &&
                            vouchers.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1 + (page - 1) * 5}</td>
                                    <td>{item.name}</td>
                                    <td>{item._index}</td>
                                    <td>{item.maxDiscount}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.remainingQuantity}</td>
                                    <td>{item.category ? 'VNĐ' : 'Phần trăm'}</td>
                                    <td>{item.startTime}</td>
                                    <td>{item.endTime}</td>
                                    <td>
                                        <Link
                                            to={`/admin/voucher/edit-voucher/${item.id}`}
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

export default Voucher;
