import clsx from 'clsx';
import Icon from '@mdi/react';
import { mdiAccountOutline, mdiCartVariant, mdiMessageText } from '@mdi/js';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.png';
import { useEffect, useState } from 'react';
import vi from '../../../assets/images/vi.svg';

function Header() {
    const [active, setActive] = useState(1);

    useEffect(() => {
        if (window.location.pathname.includes('product')) {
            setActive(2);
        } else if (window.location.pathname.includes('blog')) {
            setActive(3);
        } else if (window.location.pathname.includes('voucher')) {
            setActive(4);
        } else if (window.location.pathname.includes('about')) {
            setActive(5);
        } else {
            setActive(1);
        }
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <div className={styles.left}>
                    <div className={styles.info}>ĐIỆN THOẠI: 0843215643</div>
                    <div className={styles.info}>EMAIL: THESTYLESHOP@GMAIL.COM</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.info}>ĐĂNG NHẬP</div>
                    <div className={styles.info}>ĐĂNG KÝ</div>
                    <div className={styles.info}>
                        <img src={vi} alt="" width="20px"></img>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
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
                    <div className={styles.icon_item}>
                        <Icon path={mdiMessageText} size={1.4} />
                    </div>
                    <div className={styles.icon_item}>
                        <div className={styles.cart}>
                            <Icon path={mdiCartVariant} size={1.5} />
                            <div className={styles.cart_amount}>0</div>
                        </div>
                    </div>
                    <div className={styles.icon_item}>
                        <Icon path={mdiAccountOutline} size={1.5} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
