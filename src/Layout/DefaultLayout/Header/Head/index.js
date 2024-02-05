import Icon from '@mdi/react';
import { mdiBellOutline } from '@mdi/js';
import { Link } from 'react-router-dom';

import vi from '../../../../assets/images/vi.svg';
import styles from './Head.module.scss';

function Head() {
    return (
        <div className={styles.head}>
            <div className={styles.left}>
                <div className={styles.info}>ĐIỆN THOẠI: 0843215643</div>
                <div className={styles.info}>EMAIL: THESTYLESHOP@GMAIL.COM</div>
            </div>
            <div className={styles.right}>
                <Link to="/login" className={styles.info}>
                    ĐĂNG NHẬP
                </Link>
                <Link to="/login" className={styles.info}>
                    ĐĂNG KÝ
                </Link>
                <div className={styles.info}>
                    <img src={vi} alt="" width="20px"></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.noti}>
                        <Icon className={styles.bell} path={mdiBellOutline} size={1.2} />
                        <div className={styles.noti_amount}>0</div>
                        <div className={styles.window}>
                            <div className={styles.window_title}>THÔNG BÁO MỚI NHẬN</div>
                            <Link to="/user/notification" className={styles.window_item}>
                                <div className={styles.noti_title}>Đơn hàng đã được duyệt</div>
                                <div className={styles.noti_content}>
                                    Đơn hàng <strong>12113</strong> đã được duyệt và đang trong quá trình chuẩn bị hàng.
                                </div>
                            </Link>
                            <Link to="/user/notification" className={styles.window_item}>
                                <div className={styles.noti_title}>Đơn hàng đã được duyệt</div>
                                <div className={styles.noti_content}>
                                    Đơn hàng <strong>12113</strong> đã được duyệt và đang trong quá trình chuẩn bị hàng.
                                </div>
                            </Link>
                            <Link to="/user/notification" className={styles.window_item}>
                                <div className={styles.noti_title}>Đơn hàng đã được duyệt</div>
                                <div className={styles.noti_content}>
                                    Đơn hàng <strong>12113</strong> đã được duyệt và đang trong quá trình chuẩn bị hàng.
                                </div>
                            </Link>
                            <Link to="/user/notification" className={styles.window_item}>
                                <div className={styles.noti_title}>Đơn hàng đã được duyệt</div>
                                <div className={styles.noti_content}>
                                    Đơn hàng <strong>12113</strong> đã được duyệt và đang trong quá trình chuẩn bị hàng.
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Head;
