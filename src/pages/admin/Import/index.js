import Icon from '@mdi/react';
import { mdiDeveloperBoard } from '@mdi/js';
import { Link } from 'react-router-dom';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import AddButton from '../../../components/AddButton';
import styles from './Import.module.scss';

function Import() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhập hàng" detail="Danh sách phiếu nhập">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div></div>
                    <div>
                        <AddButton to="/admin/import/add-import" />
                        <ExcelButton />
                    </div>
                </div>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>Mã phiếu nhập</th>
                            <th>Ngày nhập hàng</th>
                            <th>Tên nhân viên</th>
                            <th>Tên nhà cung cấp</th>
                            <th>Kho hàng</th>
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
                            <td>
                                <Link
                                    to="/admin/import/edit-import"
                                    style={{ marginRight: '20px', color: 'orange', cursor: 'pointer' }}
                                >
                                    <Icon path={mdiDeveloperBoard} size={1.5} />
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

export default Import;
