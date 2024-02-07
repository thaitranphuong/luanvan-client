//import { Fragment } from 'react';
import AdminLayout from '../Layout/AdminLayout';

import Login from '../pages/auth/Login';
import Product from '../pages/user/Product';
import Home from '../pages/user/Home';
import Blog from '../pages/user/Blog';
import Voucher from '../pages/user/Voucher';
import About from '../pages/user/About';
import Cart from '../pages/user/Cart';
import Message from '../pages/user/Message';
import ProductDetail from '../pages/user/ProductDetail';
import BlogDetail from '../pages/user/BlogDetail';
import Order from '../pages/user/Order';
import VNPay from '../pages/user/VNPay';
import OTP from '../pages/auth/OTP';
import Account from '../pages/auth/Account';
import Address from '../pages/auth/Address';
import ChangePassword from '../pages/auth/ChangePassword';
import VoucherWarehouse from '../pages/user/VoucherWarehouse';
import Purchase from '../pages/user/Purchase';
import Notification from '../pages/user/Notification';

import AdminHome from '../pages/admin/Home';
import AdminBanners from '../pages/admin/Banners';
import AdminBlog from '../pages/admin/Blog';
import AdminBrand from '../pages/admin/Brand';
import AdminCategory from '../pages/admin/Category';
import AdminImport from '../pages/admin/Import';
import AdminMessage from '../pages/admin/Message';
import AdminOrder from '../pages/admin/Order';
import AdminProduct from '../pages/admin/Product';
import AdminShipping from '../pages/admin/Shipping';
import AdminSupplier from '../pages/admin/Supplier';
import AdminTopic from '../pages/admin/Topic';
import AdminUser from '../pages/admin/User';
import AdminVoucher from '../pages/admin/Voucher';
import AdminWarehouse from '../pages/admin/Warehouse';

const publicRoute = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/product-detail/:id', component: ProductDetail },
    { path: '/blog', component: Blog },
    { path: '/blog-detail/:id', component: BlogDetail },
    { path: '/voucher', component: Voucher },
    { path: '/about', component: About },
    { path: '/login', component: Login },
];

const privateRoute = [
    { path: '/message', component: Message },
    { path: '/cart', component: Cart },
    { path: '/order', component: Order, layout: null },
    { path: '/payment', component: VNPay, layout: null },
    { path: '/otp', component: OTP },
    { path: '/user/account', component: Account },
    { path: '/user/address', component: Address },
    { path: '/user/change-password', component: ChangePassword },
    { path: '/user/voucher', component: VoucherWarehouse },
    { path: '/user/purchase', component: Purchase },
    { path: '/user/purchase', component: Purchase },
    { path: '/user/notification', component: Notification },
    { path: '/admin', component: AdminHome, layout: AdminLayout },
    { path: '/admin/banners', component: AdminBanners, layout: AdminLayout },
    { path: '/admin/blog', component: AdminBlog, layout: AdminLayout },
    { path: '/admin/brand', component: AdminBrand, layout: AdminLayout },
    { path: '/admin/category', component: AdminCategory, layout: AdminLayout },
    { path: '/admin/import', component: AdminImport, layout: AdminLayout },
    { path: '/admin/message', component: AdminMessage, layout: AdminLayout },
    { path: '/admin/order', component: AdminOrder, layout: AdminLayout },
    { path: '/admin/product', component: AdminProduct, layout: AdminLayout },
    { path: '/admin/shipping', component: AdminShipping, layout: AdminLayout },
    { path: '/admin/supplier', component: AdminSupplier, layout: AdminLayout },
    { path: '/admin/topic', component: AdminTopic, layout: AdminLayout },
    { path: '/admin/user', component: AdminUser, layout: AdminLayout },
    { path: '/admin/voucher', component: AdminVoucher, layout: AdminLayout },
    { path: '/admin/warehouse', component: AdminWarehouse, layout: AdminLayout },
];

if (JSON.parse(localStorage.getItem('role_id')) === 1) {
    privateRoute.push(
        {},
        //{path: '/teacher/exam/statistic', component: Statistic, layout: TeacherLayout, }
    );
}

if (JSON.parse(localStorage.getItem('role_id')) === 2) {
    privateRoute.push(
        {},
        { path: '/Cart', component: Cart },
        //{ path: '/auth/account/:id', component: Account }, //sử dụng useParams của react router dom để lấy id
    );
}

export { publicRoute, privateRoute };
