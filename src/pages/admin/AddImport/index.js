import styles from './AddImport.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import Select from '../../../components/Select';
import Icon from '@mdi/react';
import { mdiTrashCan } from '@mdi/js';

function AddImport() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhập hàng" detail="Thêm phiếu nhập">
                <div style={{ border: '1px solid #000', width: '100%', margin: '10px 0' }}></div>
                <div className={styles.title}>Thông tin phiếu nhập</div>
                <Select label="Chọn nhà cung cấp" />
                <Select label="Chọn kho hàng" />
                <div style={{ border: '1px solid #000', width: '100%', margin: '10px 0' }}></div>
                <div className={styles.title}>Thêm chi tiết phiếu nhập</div>
                <Select width="50%" label="Chọn sản phẩm" />
                <Select width="25%" label="Chọn màu" />
                <Select width="25%" label="Chọn kích cỡ" />
                <Input label="Số lượng" type="number" />
                <Input label="Đơn giá" type="number" />
                <button className={styles.btn_add}>Thêm</button>
                <div style={{ border: '1px solid #ccc', width: '100%', margin: '10px 0' }}></div>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <Icon style={{ cursor: 'pointer', color: 'red' }} path={mdiTrashCan} size={1.5} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default AddImport;
