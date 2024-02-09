import Icon from '@mdi/react';
import { mdiPen, mdiTrashCan } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';
import styles from './Topic.module.scss';

function Topic() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý chủ đề" detail="Danh sách chủ đề">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SearchBar placeholder="Tiềm kiếm theo tên chủ đề" />
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
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Mã code</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
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

export default Topic;
