import Icon from '@mdi/react';
import { mdiPen, mdiTrashCan } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';
import styles from './Warehouse.module.scss';
import { Link } from 'react-router-dom';

function Warehouse() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý kho hàng" detail="Danh sách kho hàng">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SearchBar placeholder="Tiềm kiếm theo tên kho hàng" />
                    <div>
                        <AddButton to="/admin/warehouse/add-warehouse" />
                        <ExcelButton />
                    </div>
                </div>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên kho</th>
                            <th>Địa chỉ</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <Link
                                    to="/admin/warehouse/edit-warehouse"
                                    style={{ marginRight: '20px', color: 'blue', cursor: 'pointer' }}
                                >
                                    <Icon path={mdiPen} size={1.5} />
                                </Link>
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

export default Warehouse;
