import Icon from '@mdi/react';
import { mdiPen, mdiTrashCan } from '@mdi/js';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import ExcelButton from '../../../components/ExcelButton';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';
import styles from './Message.module.scss';

function Message() {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý tin nhắn" detail="Hỗ trợ khách hàng"></Wrapper>
        </div>
    );
}

export default Message;
