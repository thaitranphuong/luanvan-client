import Icon from '@mdi/react';
import { mdiDeveloperBoard } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import styles from './Order.module.scss';
import { Link } from 'react-router-dom';
import Select from '../../../components/Select';

function Order() {
    const array = [
        {
            id: 1,
            name: 'Chờ xác nhận',
        },
        {
            id: 2,
            name: 'Đang chuẩn bị hàng',
        },
        {
            id: 3,
            name: 'Đang giao',
        },
        {
            id: 4,
            name: 'Đã giao',
        },
        {
            id: 5,
            name: 'Đã hủy',
        },
    ];

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý đơn hàng" detail="Danh sách đơn hàng">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Select width="300px" array={array} />
                    <div>
                        <ExcelButton />
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
                        <tr>
                            <td>1</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <Link to="/admin/order/view-order" style={{ color: 'orange', cursor: 'pointer' }}>
                                    <Icon path={mdiDeveloperBoard} size={2} />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ width: '100%' }}>
                    <Pagination />
                </div>
            </Wrapper>
        </div>
    );
}

export default Order;
