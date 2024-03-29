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

function Product() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý sản phẩm" detail="Danh sách sản phẩm">
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SearchBar placeholder="Tiềm kiếm theo sản phẩm" />
                    <div>
                        <AddButton to="/admin/product/add-product" />
                        <ExcelButton />
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
                        <tr>
                            <td>1</td>
                            <td>a</td>
                            <td>
                                <ImageModal
                                    style={{ height: '50px' }}
                                    imageUrl={require('../../../assets/images/product.png')}
                                />
                            </td>
                            <td>a</td>
                            <td>a</td>
                            <td>100</td>
                            <td>
                                <Link
                                    to="/admin/product/edit-product"
                                    style={{ marginRight: '20px', color: 'blue', cursor: 'pointer' }}
                                >
                                    <Icon path={mdiPen} size={1.5} />
                                </Link>
                                <span style={{ color: 'green', cursor: 'pointer' }}>
                                    <Icon path={mdiEye} size={1.5} />
                                </span>
                                <span style={{ color: 'red', cursor: 'pointer' }}>
                                    <Icon path={mdiEyeOff} size={1.5} />
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

export default Product;
