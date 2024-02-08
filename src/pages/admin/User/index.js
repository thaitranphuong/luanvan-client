import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';
import styles from './User.module.scss';
import Pagination from '../../../components/Pagination';

function User() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý người dùng" detail="Thêm người dùng">
                <div style={{ width: '100%' }}>
                    asdsadas
                    <ExcelButton />
                </div>
                <Input width={'50%'} label={'Họ và tên'} />
                <Input width={'50%'} label={'Họ và tên'} />
                <Select width={'100%'} label={'Họ và tên'} />
                <TextArea height={'100px'} width={'50%'} label={'Họ và tên'} />
                <div style={{ width: '100%' }}>
                    <Pagination />
                </div>
            </Wrapper>
        </div>
    );
}

export default User;
