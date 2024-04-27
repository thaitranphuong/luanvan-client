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
import AddUser from '../pages/admin/AddUser';
import AddBanners from '../pages/admin/AddBanners';
import AddBlog from '../pages/admin/AddBlog';
import AddBrand from '../pages/admin/AddBrand';
import AddCategory from '../pages/admin/AddCategory';
import AddImport from '../pages/admin/AddImport';
import AddProduct from '../pages/admin/AddProduct';
import AddShipping from '../pages/admin/AddShipping';
import AddSupplier from '../pages/admin/AddSupplier';
import AddTopic from '../pages/admin/AddTopic';
import AddVoucher from '../pages/admin/AddVoucher';
import AddWarehouse from '../pages/admin/AddWarehouse';
import EditBanners from '../pages/admin/EditBanners';
import EditBlog from '../pages/admin/EditBlog';
import EditBrand from '../pages/admin/EditBrand';
import EditCategory from '../pages/admin/EditCategory';
import EditImport from '../pages/admin/EditImport';
import EditProduct from '../pages/admin/EditProduct';
import EditShipping from '../pages/admin/EditShipping';
import EditSupplier from '../pages/admin/EditSupplier';
import EditTopic from '../pages/admin/EditTopic';
import EditUser from '../pages/admin/EditUser';
import EditVoucher from '../pages/admin/EditVoucher';
import EditWarehouse from '../pages/admin/EditWarehouse';
import ViewOrder from '../pages/admin/ViewOrder';
import InStock from '../pages/admin/InStock';

import { getToken } from '../utils/localstorage';
import VNPayResult from '../pages/user/VNPayResult';

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

const privateRoute = [];

if (getToken()) {
    if (
        JSON.parse(localStorage.getItem('user')).role === 'admin' ||
        JSON.parse(localStorage.getItem('user')).role === 'saler'
    ) {
        privateRoute.push(
            { path: '/message', component: Message },
            { path: '/cart', component: Cart },
            { path: '/order', component: Order, layout: null },
            { path: '/payment-vnpay', component: VNPay, layout: null },
            { path: '/payment-vnpay/result', component: VNPayResult, layout: null },
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
            { path: '/admin/banners/add-banners', component: AddBanners, layout: AdminLayout },
            { path: '/admin/banners/edit-banners/:id', component: EditBanners, layout: AdminLayout },
            { path: '/admin/blog', component: AdminBlog, layout: AdminLayout },
            { path: '/admin/blog/add-blog', component: AddBlog, layout: AdminLayout },
            { path: '/admin/blog/edit-blog/:id', component: EditBlog, layout: AdminLayout },
            { path: '/admin/brand', component: AdminBrand, layout: AdminLayout },
            { path: '/admin/brand/add-brand', component: AddBrand, layout: AdminLayout },
            { path: '/admin/brand/edit-brand/:id', component: EditBrand, layout: AdminLayout },
            { path: '/admin/category', component: AdminCategory, layout: AdminLayout },
            { path: '/admin/category/add-category', component: AddCategory, layout: AdminLayout },
            { path: '/admin/category/edit-category/:id', component: EditCategory, layout: AdminLayout },
            { path: '/admin/import', component: AdminImport, layout: AdminLayout },
            { path: '/admin/import/add-import', component: AddImport, layout: AdminLayout },
            { path: '/admin/import/edit-import/:id', component: EditImport, layout: AdminLayout },
            { path: '/admin/message', component: AdminMessage, layout: AdminLayout },
            { path: '/admin/order', component: AdminOrder, layout: AdminLayout },
            { path: '/admin/order/view-order/:id', component: ViewOrder, layout: AdminLayout },
            { path: '/admin/product', component: AdminProduct, layout: AdminLayout },
            { path: '/admin/product/add-product', component: AddProduct, layout: AdminLayout },
            { path: '/admin/product/edit-product/:id', component: EditProduct, layout: AdminLayout },
            { path: '/admin/shipping', component: AdminShipping, layout: AdminLayout },
            { path: '/admin/shipping/add-shipping', component: AddShipping, layout: AdminLayout },
            { path: '/admin/shipping/edit-shipping/:id', component: EditShipping, layout: AdminLayout },
            { path: '/admin/supplier', component: AdminSupplier, layout: AdminLayout },
            { path: '/admin/supplier/add-supplier', component: AddSupplier, layout: AdminLayout },
            { path: '/admin/supplier/edit-supplier/:id', component: EditSupplier, layout: AdminLayout },
            { path: '/admin/topic', component: AdminTopic, layout: AdminLayout },
            { path: '/admin/topic/add-topic', component: AddTopic, layout: AdminLayout },
            { path: '/admin/topic/edit-topic/:id', component: EditTopic, layout: AdminLayout },
            { path: '/admin/user', component: AdminUser, layout: AdminLayout },
            { path: '/admin/user/add-user', component: AddUser, layout: AdminLayout },
            { path: '/admin/user/edit-user/:id', component: EditUser, layout: AdminLayout },
            { path: '/admin/voucher', component: AdminVoucher, layout: AdminLayout },
            { path: '/admin/voucher/add-voucher', component: AddVoucher, layout: AdminLayout },
            { path: '/admin/voucher/edit-voucher/:id', component: EditVoucher, layout: AdminLayout },
            { path: '/admin/warehouse', component: AdminWarehouse, layout: AdminLayout },
            { path: '/admin/warehouse/add-warehouse', component: AddWarehouse, layout: AdminLayout },
            { path: '/admin/warehouse/edit-warehouse/:id', component: EditWarehouse, layout: AdminLayout },
            { path: '/admin/in-stock', component: InStock, layout: AdminLayout },
        );
    }

    if (JSON.parse(localStorage.getItem('user')).role === 'customer') {
        privateRoute.push(
            { path: '/message', component: Message },
            { path: '/cart', component: Cart, layout: null },
            { path: '/order', component: Order, layout: null },
            { path: '/payment-vnpay', component: VNPay, layout: null },
            { path: '/payment-vnpay/result', component: VNPayResult, layout: null },
            { path: '/otp', component: OTP },
            { path: '/user/account', component: Account },
            { path: '/user/address', component: Address },
            { path: '/user/change-password', component: ChangePassword },
            { path: '/user/voucher', component: VoucherWarehouse },
            { path: '/user/purchase', component: Purchase },
            { path: '/user/notification', component: Notification },
        );
    }
}

export { publicRoute, privateRoute };
