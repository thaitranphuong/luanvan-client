import styles from './EditImport.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';

function EditImport() {
    const [_import, setImport] = useState({});
    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/import/${id}`);
        setImport(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhập hàng" detail="Chi tiết phiếu nhập">
                <strong>
                    &nbsp;&nbsp;Mã phiếu nhập: {_import.id} &nbsp;|&nbsp; Ngày nhập: {_import.createdTime}
                </strong>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_import.importDetails &&
                            _import.importDetails.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </Wrapper>
        </div>
    );
}

export default EditImport;
