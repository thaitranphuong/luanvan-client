import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import Select from '../../../components/Select';
import styles from './EditUser.module.scss';

function EditUser() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý người dùng" detail="Thêm người dùng">
                <Input label="Email" />
                <Input label="Mật khẩu" />
                <Input label="Họ và tên" />
                <Input label="Số điện thoại" />
                <Input label="Địa chỉ" />
                <Input label="Ngày sinh" type="date" />
                <Select
                    label="Giới tính"
                    array={[
                        { id: true, name: 'Nam' },
                        { id: false, name: 'Nữ' },
                    ]}
                />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default EditUser;
