import styles from './EditVoucher.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import Select from '../../../components/Select';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../utils/api';

function EditVoucher() {
    const [voucher, setVoucher] = useState({});

    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/voucher/${id}`);
        setVoucher(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeInput = (e) => {
        setVoucher({
            ...voucher,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const result = await api.putRequest('/voucher', voucher);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý voucher" detail="Sửa voucher">
                <Input value={voucher.name} onChange={handleChangeInput} name="name" label="Mã voucher" />
                <Select
                    value={voucher.category}
                    onChange={handleChangeInput}
                    name="category"
                    label="Loại giảm giá"
                    array={[
                        { id: false, name: 'Phần trăm' },
                        { id: true, name: 'VNĐ' },
                    ]}
                />
                <Input
                    value={voucher.maxDiscount}
                    onChange={handleChangeInput}
                    name="maxDiscount"
                    label="Giá giảm tối đa (VNĐ)"
                    type="number"
                />
                <Input
                    value={voucher._index}
                    onChange={handleChangeInput}
                    name="_index"
                    label="Chỉ số giảm (VNĐ, %)"
                    type="number"
                />
                <Input
                    value={voucher.quantity}
                    onChange={handleChangeInput}
                    name="quantity"
                    label="Số lượng"
                    type="number"
                />
                <Input
                    value={voucher.startTime}
                    onChange={handleChangeInput}
                    name="startTime"
                    label="Thời gian bắt đầu"
                    type="date"
                />
                <Input
                    value={voucher.endTime}
                    onChange={handleChangeInput}
                    name="endTime"
                    label="Thời gian kết thúc"
                    type="date"
                />
                <SaveButton onClick={handleSubmit} />
            </Wrapper>
        </div>
    );
}

export default EditVoucher;
