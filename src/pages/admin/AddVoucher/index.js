import styles from './AddVoucher.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import Select from '../../../components/Select';

function AddVoucher() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý voucher" detail="Thêm voucher">
                <Input label="Mã voucher" />
                <Select
                    label="Loại giảm giá"
                    array={[
                        { id: 0, name: 'Phần trăm' },
                        { id: 1, name: 'VNĐ' },
                    ]}
                />
                <Input label="Chỉ số giảm (VNĐ, %)" type="number" />
                {/* Nếu là VNĐ thì giá giảm tối đa = chỉ số giảm */}
                <Input label="Giá giảm tối đa (VNĐ)" type="number" />
                <Input label="Số lượng" type="number" />
                <Input label="Thời gian bắt đâu" type="date" />
                <Input label="Thời gian kết thúc" type="date" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default AddVoucher;
