import Icon from '@mdi/react';
import { mdiEye, mdiEyeOff, mdiPen } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import ImageModal from '../../../components/Modal/ImageModal';
import api from '../../../utils/api';
import { useEffect, useState } from 'react';
import Excel from '../../../components/Excel';
import { config } from '../../../utils/config';

function Product() {
    const [products, setProducts] = useState([]);
    const [totalPage, setTotalpage] = useState(1);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');

    const render = async () => {
        let result = await api.getRequest(`/product?page=${page}&limit=5&name=${name}`);
        setTotalpage(result.data.totalPage);
        setPage(result.data.page);
        setProducts(result.data.listResult);
    };

    useEffect(() => {
        render();
    }, [page, name]);

    useEffect(() => {
        setPage(1);
    }, [name]);

    const handleExportFile = async () => {
        const listExcel = [];
        let result = await api.getRequest(`/product/get-all`);
        result.data.forEach((item) => {
            listExcel.push({ ...item });
        });
        await Excel.exportExcel([...listExcel], 'Danh sách', 'Danh sách');
    };

    const handleHide = async (index) => {
        const product = { ...products[index], enabled: false };
        const result = await api.putRequest('/product', product);
        render();
    };

    const handleShow = async (index) => {
        const product = { ...products[index], enabled: true };
        const result = await api.putRequest('/product', product);
        render();
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý sản phẩm" detail="Danh sách sản phẩm">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SearchBar
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Tìm kiếm theo sản phẩm"
                    />
                    <div>
                        <AddButton to="/admin/product/add-product" />
                        <ExcelButton onClick={handleExportFile} />
                    </div>
                </div>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Danh mục</th>
                            <th>Thương hiệu</th>
                            <th>Đã bán</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products &&
                            products.map((item, index) => (
                                <tr>
                                    <td>{index + 1 + (page - 1) * 5}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <ImageModal
                                            style={{ height: '50px' }}
                                            imageUrl={config.baseURL + '/getimage/products/' + item.thumbnail}
                                        />
                                    </td>
                                    <td>{item.categoryName}</td>
                                    <td>{item.brandName}</td>
                                    <td>{item.soldQuantity}</td>
                                    <td>
                                        <Link
                                            to={`/admin/product/edit-product/${item.id}`}
                                            style={{ marginRight: '20px', color: 'blue', cursor: 'pointer' }}
                                        >
                                            <Icon path={mdiPen} size={1.5} />
                                        </Link>
                                        {item.enabled ? (
                                            <span
                                                onClick={() => handleHide(index)}
                                                style={{ color: 'green', cursor: 'pointer' }}
                                            >
                                                <Icon path={mdiEye} size={1.5} />
                                            </span>
                                        ) : (
                                            <span
                                                onClick={() => handleShow(index)}
                                                style={{ color: 'red', cursor: 'pointer' }}
                                            >
                                                <Icon path={mdiEyeOff} size={1.5} />
                                            </span>
                                        )}
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

export default Product;
