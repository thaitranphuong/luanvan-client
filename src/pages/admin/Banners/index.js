import Icon from '@mdi/react';
import { mdiPen, mdiTrashCan } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import styles from './Banners.module.scss';
import AddButton from '../../../components/AddButton';
import { Link } from 'react-router-dom';
import ImageModal from '../../../components/Modal/ImageModal';
import { config } from '../../../utils/config';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import Excel from '../../../components/Excel';
import { notify, notifyError } from '../../../utils/notify';

function Banners() {
    const [banners, setBanners] = useState([]);
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');

    const render = async () => {
        let result = await api.getRequest(`/banner?page=${page}&limit=5&name=${name}`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setBanners(result.data.listResult);
    };

    useEffect(() => {
        render();
    }, [page, name]);

    useEffect(() => {
        setPage(1);
    }, [name]);

    const handleDelete = async (id) => {
        let result = await api.deleteRequest(`/banner/${id}`);
        if (result && result.statusCode === 200) {
            render();
            notify('Xóa thành công');
        } else {
            notifyError('Xóa không thành công');
        }
    };

    const handleExportFile = async () => {
        const listExcel = [];
        let result = await api.getRequest(`/banner/get-all`);
        result.data.forEach((item) => {
            listExcel.push({ ...item });
        });
        await Excel.exportExcel([...listExcel], 'Danh sách', 'Danh sách');
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý băng rôn" detail="Danh sách băng rôn">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SearchBar
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Tìm kiếm theo băng rôn"
                    />
                    <div>
                        <AddButton to="/admin/banners/add-banners" />
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
                            <th>Hình ảnh</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {banners &&
                            banners.map((item, index) => (
                                <tr>
                                    <td>{index + 1 + (page - 1) * 5}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <ImageModal
                                            style={{ height: '50px', width: '100px' }}
                                            imageUrl={config.baseURL + '/getimage/banners/' + item.image}
                                        />
                                    </td>
                                    <td>
                                        <Link
                                            to={`/admin/banners/edit-banners/${item.id}`}
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

export default Banners;
