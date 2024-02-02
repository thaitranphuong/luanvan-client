//import { Fragment } from 'react';
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
    { path: '/Cart', component: Cart },
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
