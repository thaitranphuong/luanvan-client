import styles from './AddVoucher.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import Select from '../../../components/Select';
import { useState } from 'react';
import api from '../../../utils/api';

function AddVoucher() {
    const [voucher, setVoucher] = useState();

    const handleOnchange = (e) => {
        setVoucher({ ...voucher, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const result = await api.postRequest('/voucher', voucher);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Ma voucher da ton tai');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý voucher" detail="Thêm voucher">
                <Input onChange={handleOnchange} name="name" label="Mã voucher" />
                <Select
                    onChange={handleOnchange}
                    name="category"
                    label="Loại giảm giá"
                    array={[
                        { id: false, name: 'Phần trăm' },
                        { id: true, name: 'VNĐ' },
                    ]}
                />
                <Input onChange={handleOnchange} name="_index" label="Chỉ số giảm (VNĐ, %)" type="number" />
                {/* Nếu là VNĐ thì giá giảm tối đa = chỉ số giảm */}
                <Input onChange={handleOnchange} name="maxDiscount" label="Giá giảm tối đa (VNĐ)" type="number" />
                <Input onChange={handleOnchange} name="quantity" label="Số lượng" type="number" />
                <Input onChange={handleOnchange} name="startTime" label="Thời gian bắt đầu" type="date" />
                <Input onChange={handleOnchange} name="endTime" label="Thời gian kết thúc" type="date" />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default AddVoucher;
