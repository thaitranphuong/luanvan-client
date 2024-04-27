import Icon from '@mdi/react';
import { mdiPen, mdiTrashCan } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';
import styles from './Blog.module.scss';
import { Link } from 'react-router-dom';
import ImageModal from '../../../components/Modal/ImageModal';
import { config } from '../../../utils/config';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import Excel from '../../../components/Excel';
import { notify, notifyError } from '../../../utils/notify';

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');

    const render = async () => {
        let result = await api.getRequest(`/blog?page=${page}&limit=5&name=${name}`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setBlogs(result.data.listResult);
    };

    useEffect(() => {
        render();
    }, [page, name]);

    useEffect(() => {
        setPage(1);
    }, [name]);

    const handleDelete = async (id) => {
        let result = await api.deleteRequest(`/blog/${id}`);
        if (result && result.statusCode === 200) {
            render();
            notify('Xóa thành công');
        } else {
            notifyError('Xóa không thành công');
        }
    };

    const handleExportFile = async () => {
        const listExcel = [];
        let result = await api.getRequest(`/blog/get-all`);
        result.data.forEach((item) => {
            listExcel.push({ ...item });
        });
        await Excel.exportExcel([...listExcel], 'Danh sách', 'Danh sách');
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý bài đăng" detail="Danh sách bài đăng">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SearchBar
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Tìm kiếm theo tiêu đề bài đăng"
                    />
                    <div>
                        <AddButton to="/admin/blog/add-blog" />
                        <ExcelButton onClick={handleExportFile} />
                    </div>
                </div>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tiêu đề</th>
                            <th>Hình ảnh</th>
                            <th>Chủ đề</th>
                            <th>Tác giả</th>
                            <th>Lượt xem</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs &&
                            blogs.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1 + (page - 1) * 5}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <ImageModal
                                            style={{ height: '50px', width: '50px' }}
                                            imageUrl={config.baseURL + '/getimage/blogs/' + item.thumbnail}
                                        />
                                    </td>
                                    <td>{item.topicName}</td>
                                    <td>{item.authorName}</td>
                                    <td>{item.view}</td>
                                    <td>
                                        <Link
                                            to={`/admin/blog/edit-blog/${item.id}`}
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

export default Blog;
