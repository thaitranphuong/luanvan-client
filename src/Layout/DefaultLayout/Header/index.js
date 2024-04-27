import clsx from 'clsx';
import Icon from '@mdi/react';
import { mdiCartVariant, mdiMessageText } from '@mdi/js';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.png';
import { useEffect, useState } from 'react';
import avatar from '../../../assets/images/avatar.png';
import Head from './Head';
import { getUser } from '../../../utils/localstorage';
import { config } from '../../../utils/config';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from '../../../redux/selectors';
import { getCart } from '../../../redux/slice/CartSlice';

function Header() {
    const [active, setActive] = useState(1);
    const [fixed, setFixed] = useState(false);
    const cartItems = useSelector(cartSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, []);

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
            <Head />
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
                    <a href="/message" className={styles.icon_item}>
                        <div className={styles.message}>
                            <Icon path={mdiMessageText} size={1.4} />
                            <div className={styles.message_amount}>0</div>
                        </div>
                    </a>
                    <Link to="/cart" className={styles.icon_item}>
                        <div className={styles.cart}>
                            <Icon path={mdiCartVariant} size={1.5} />
                            <div className={styles.cart_amount}>{cartItems.length}</div>
                        </div>
                    </Link>
                    {!!getUser() && (
                        <Link to="/user/account" className={styles.icon_item}>
                            <img
                                className={styles.avatar}
                                src={getUser().avatar ? config.baseURL + '/getimage/users/' + getUser().avatar : avatar}
                                alt="Avatar"
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
