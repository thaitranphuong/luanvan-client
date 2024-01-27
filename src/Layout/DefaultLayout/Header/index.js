import clsx from 'clsx';
import Icon from '@mdi/react';
import { mdiBellOutline, mdiCartVariant, mdiMessageText } from '@mdi/js';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.png';
import { useEffect, useState } from 'react';
import vi from '../../../assets/images/vi.svg';
import avatar from '../../../assets/images/avatar.png';

function Header() {
    const [active, setActive] = useState(1);
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        scrollToTop();
    }, [window.location.pathname]);

    useEffect(() => {
        if (window.location.pathname.includes('product')) {
            setActive(2);
        } else if (window.location.pathname.includes('blog')) {
            setActive(3);
        } else if (window.location.pathname.includes('voucher')) {
            setActive(4);
        } else if (window.location.pathname.includes('about')) {
            setActive(5);
        } else if (window.location.pathname === '/') {
            setActive(1);
        } else {
            setActive(0);
        }
    });

    function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }

    function handleScroll() {
        let scrollY = window.scrollY;
        if (scrollY > 32) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }
    window.addEventListener('scroll', handleScroll);

    return (
        <div className={styles.wrapper}>
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
                                <Link to="/notification" className={styles.window_item}>
                                    <div className={styles.noti_title}>Đơn hàng đã được duyệt</div>
                                    <div className={styles.noti_content}>
                                        Đơn hàng <strong>12113</strong> đã được duyệt và đang trong quá trình chuẩn bị
                                        hàng.
                                    </div>
                                </Link>
                                <Link to="/notification" className={styles.window_item}>
                                    <div className={styles.noti_title}>Đơn hàng đã được duyệt</div>
                                    <div className={styles.noti_content}>
                                        Đơn hàng <strong>12113</strong> đã được duyệt và đang trong quá trình chuẩn bị
                                        hàng.
                                    </div>
                                </Link>
                                <Link to="/notification" className={styles.window_item}>
                                    <div className={styles.noti_title}>Đơn hàng đã được duyệt</div>
                                    <div className={styles.noti_content}>
                                        Đơn hàng <strong>12113</strong> đã được duyệt và đang trong quá trình chuẩn bị
                                        hàng.
                                    </div>
                                </Link>
                                <Link to="/notification" className={styles.window_item}>
                                    <div className={styles.noti_title}>Đơn hàng đã được duyệt</div>
                                    <div className={styles.noti_content}>
                                        Đơn hàng <strong>12113</strong> đã được duyệt và đang trong quá trình chuẩn bị
                                        hàng.
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.body, { [styles.fixed]: fixed })}>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt=""></img>
                </Link>
                <div className={styles.nav}>
                    <Link to="/" className={clsx(styles.nav_item, { [styles.active]: active === 1 })}>
                        TRANG CHỦ
                    </Link>
                    <Link to="/product" className={clsx(styles.nav_item, { [styles.active]: active === 2 })}>
                        SẢN PHẨM
                    </Link>
                    <Link to="/blog" className={clsx(styles.nav_item, { [styles.active]: active === 3 })}>
                        TIN TỨC
                    </Link>
                    <Link to="/voucher" className={clsx(styles.nav_item, { [styles.active]: active === 4 })}>
                        GIẢM GIÁ
                    </Link>
                    <Link to="/about" className={clsx(styles.nav_item, { [styles.active]: active === 5 })}>
                        GIỚI THIỆU
                    </Link>
                </div>
                <div className={styles.icon}>
                    <Link to="/message" className={styles.icon_item}>
                        <div className={styles.message}>
                            <Icon path={mdiMessageText} size={1.4} />
                            <div className={styles.message_amount}>0</div>
                        </div>
                    </Link>
                    <Link to="/cart" className={styles.icon_item}>
                        <div className={styles.cart}>
                            <Icon path={mdiCartVariant} size={1.5} />
                            <div className={styles.cart_amount}>0</div>
                        </div>
                    </Link>
                    <Link to="/account" className={styles.icon_item}>
                        <img className={styles.avatar} src={avatar} alt="Avatar" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
