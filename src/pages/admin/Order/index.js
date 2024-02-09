import Icon from '@mdi/react';
import { mdiPen, mdiTrashCan } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';
import styles from './Order.module.scss';

function Order() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý đơn hàng" detail="Danh sách đơn hàng">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div></div>
                    <div>
                        <AddButton />
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
                                <span style={{ marginRight: '20px', color: 'blue', cursor: 'pointer' }}>
                                    <Icon path={mdiPen} size={1.5} />
                                </span>
                                <span style={{ color: 'red', cursor: 'pointer' }}>
                                    <Icon path={mdiTrashCan} size={1.5} />
                                </span>
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
