import clsx from 'clsx';

import styles from './Navbar.module.scss';
import Icon from '@mdi/react';
import {
    mdiAccountMultiple,
    mdiApplicationImport,
    mdiBagPersonalTag,
    mdiCash,
    mdiCurrencyUsd,
    mdiFlag,
    mdiHanger,
    mdiHomeVariant,
    mdiLightbulb,
    mdiMessageText,
    mdiPost,
    mdiSale,
    mdiShape,
    mdiTextBox,
    mdiTruck,
    mdiViewDashboard,
    mdiWarehouse,
    mdiWatermark,
} from '@mdi/js';
import { Link } from 'react-router-dom';

function NavBar({ showNav }) {
    return (
        <div className={clsx(styles.wrapper, { [styles.show]: showNav })}>
            <div className={styles.title}>Danh mục</div>
            <Link to="/admin" className={clsx(styles.item, { [styles.active]: window.location.pathname === '/admin' })}>
                <Icon className={styles.icon} path={mdiViewDashboard} size={1.2} />
                <div className={styles.label}>Trang chủ</div>
            </Link>
            <Link
                to="/admin/user"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('user') })}
            >
                <Icon className={styles.icon} path={mdiAccountMultiple} size={1.2} />
                <div className={styles.label}>Quản lý người dùng</div>
            </Link>
            <Link
                to="/admin/category"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('category') })}
            >
                <Icon className={styles.icon} path={mdiShape} size={1.2} />
                <div className={styles.label}>Quản lý danh mục</div>
            </Link>
            <Link
                to="/admin/brand"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('brand') })}
            >
                <Icon className={styles.icon} path={mdiWatermark} size={1.2} />
                <div className={styles.label}>Quản lý nhãn hàng</div>
            </Link>
            <Link
                to="/admin/product"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('product') })}
            >
                <Icon className={styles.icon} path={mdiHanger} size={1.2} />
                <div className={styles.label}>Quản lý sản phẩm </div>
            </Link>
            <Link
                to="/admin/banners"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('banners') })}
            >
                <Icon className={styles.icon} path={mdiFlag} size={1.2} />
                <div className={styles.label}>Quản lý băng rôn</div>
            </Link>
            <Link
                to="/admin/topic"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('topic') })}
            >
                <Icon className={styles.icon} path={mdiLightbulb} size={1.2} />
                <div className={styles.label}>Quản lý chủ đề</div>
            </Link>
            <Link
                to="/admin/blog"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('blog') })}
            >
                <Icon className={styles.icon} path={mdiPost} size={1.2} />
                <div className={styles.label}>Quản lý bài đăng</div>
            </Link>
            <Link
                to="/admin/shipping"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('shipping') })}
            >
                <Icon className={styles.icon} path={mdiTruck} size={1.2} />
                <div className={styles.label}>Quản lý loại ship</div>
            </Link>
            <Link
                to="/admin/voucher"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('voucher') })}
            >
                <Icon className={styles.icon} path={mdiSale} size={1.2} />
                <div className={styles.label}>Quản lý voucher</div>
            </Link>
            <Link
                to="/admin/supplier"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('supplier') })}
            >
                <Icon className={styles.icon} path={mdiBagPersonalTag} size={1.2} />
                <div className={styles.label}>Quản lý NCC</div>
            </Link>
            <Link
                to="/admin/warehouse"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('warehouse') })}
            >
                <Icon className={styles.icon} path={mdiWarehouse} size={1.2} />
                <div className={styles.label}>Quản lý kho hàng</div>
            </Link>
            <Link
                to="/admin/import"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('import') })}
            >
                <Icon className={styles.icon} path={mdiApplicationImport} size={1.2} />
                <div className={styles.label}>Quản lý nhập hàng</div>
            </Link>
            <Link
                to="/admin/order"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('order') })}
            >
                <Icon className={styles.icon} path={mdiTextBox} size={1.2} />
                <div className={styles.label}>Quản lý đơn hàng</div>
            </Link>
            <Link
                to="/admin/message"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('message') })}
            >
                <Icon className={styles.icon} path={mdiMessageText} size={1.2} />
                <div className={styles.label}>Quản lý tin nhắn</div>
            </Link>
            <Link
                to="/admin/revenue"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('revenue') })}
            >
                <Icon className={styles.icon} path={mdiCash} size={1.2} />
                <div className={styles.label}>Thống kê doanh thu</div>
            </Link>
            <Link
                to="/admin/profit"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('profit') })}
            >
                <Icon className={styles.icon} path={mdiCurrencyUsd} size={1.2} />
                <div className={styles.label}>Thống kê lợi nhuận</div>
            </Link>
            <Link
                to="/admin/in-stock"
                className={clsx(styles.item, { [styles.active]: window.location.pathname.includes('in-stock') })}
            >
                <Icon className={styles.icon} path={mdiHomeVariant} size={1.2} />
                <div className={styles.label}>Thống kê tồn kho</div>
            </Link>
        </div>
    );
}

export default NavBar;
