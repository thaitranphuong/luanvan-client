import Icon from '@mdi/react';
import styles from './NavLeft.module.scss';
import { mdiAccountOutline, mdiBellOutline, mdiTextBoxOutline, mdiTicketPercentOutline } from '@mdi/js';
import { Link } from 'react-router-dom';

function NavLeft() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Thông tin tài khoản</div>
            <Link to="/user/account" className={styles.line}>
                <Icon style={{ color: 'blue', marginRight: '10px' }} path={mdiAccountOutline} size={1.5} />
                Tài Khoản Của Tôi
            </Link>
            <Link to="/user/account" className={styles.line_item}>
                Hồ Sơ
            </Link>
            <Link to="/user/address" className={styles.line_item}>
                Địa Chỉ
            </Link>
            <Link to="/user/change-password" className={styles.line_item}>
                Đổi Mật Khẩu
            </Link>
            <Link to="/user/purchase" className={styles.line}>
                <Icon style={{ color: 'blue', marginRight: '10px' }} path={mdiTextBoxOutline} size={1.5} />
                Đơn Mua
            </Link>
            <Link to="/user/notification" className={styles.line}>
                <Icon style={{ color: '#f7482e', marginRight: '10px' }} path={mdiBellOutline} size={1.5} />
                Thông Báo
            </Link>
            <Link to="/user/voucher" className={styles.line}>
                <Icon style={{ color: '#f7482e', marginRight: '10px' }} path={mdiTicketPercentOutline} size={1.5} />
                Kho Voucher
            </Link>
        </div>
    );
}

export default NavLeft;
