import Icon from '@mdi/react';
import { mdiDeveloperBoard } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import styles from './Order.module.scss';
import { Link } from 'react-router-dom';
import Select from '../../../components/Select';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import Excel from '../../../components/Excel';

function Order() {
    const [orders, setOrders] = useState([]);
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('');

    const render = async () => {
        let result = await api.getRequest(`/order?page=${page}&limit=5&status=${status}`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setOrders(result.data.listResult);
    };

    useEffect(() => {
        render();
    }, [page, status]);

    useEffect(() => {
        setPage(1);
    }, [status]);

    const handleExportFile = async () => {
        const listExcel = [];
        let result = await api.getRequest(`/order/get-all`);
        result.data.forEach((item) => {
            listExcel.push({ ...item });
        });
        await Excel.exportExcel([...listExcel], 'Danh sách', 'Danh sách');
    };

    const array = [
        {
            id: '',
            name: 'Tất cả',
        },
        {
            id: 0,
            name: 'Chờ xác nhận',
        },
        {
            id: 1,
            name: 'Đang chuẩn bị hàng',
        },
        {
            id: 2,
            name: 'Đang giao',
        },
        {
            id: 3,
            name: 'Đã giao',
        },
        {
            id: 4,
            name: 'Đã hủy',
        },
    ];

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý đơn hàng" detail="Danh sách đơn hàng">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Select onChange={(e) => setStatus(e.target.value)} width="300px" array={array} />
                    <div>
                        <ExcelButton onClick={handleExportFile} />
                    </div>
                </div>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>Mã đơn</th>
                            <th>Tên khách hàng</th>
                            <th>Số điện thoại</th>
                            <th>Ngày đặt</th>
                            <th>Loại ship</th>
                            <th>Trạng thái</th>
                            <th>Shipper</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders &&
                            orders.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.createdTime}</td>
                                    <td>{item.shippingName}</td>
                                    <td>
                                        {(item.status === 0 && 'Chờ xác nhận') ||
                                            (item.status === 1 && 'Đang chuẩn bị hàng') ||
                                            (item.status === 2 && 'Đang giao hàng') ||
                                            (item.status === 3 && 'Đã nhận hàng') ||
                                            (item.status === 4 && 'Đã hủy đơn')}
                                    </td>
                                    <td>{item.shipperName}</td>
                                    <td>
                                        <Link
                                            to={'/admin/order/view-order/' + item.id}
                                            style={{ color: 'orange', cursor: 'pointer' }}
                                        >
                                            <Icon path={mdiDeveloperBoard} size={2} />
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

export default Order;
