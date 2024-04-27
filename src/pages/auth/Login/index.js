import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Login.module.scss';
import Api from '../../../utils/api';
import { isLogin } from '../../../utils/localstorage';
import { notify, notifyError } from '../../../utils/notify';

function Login() {
    const [isLeft, setIsLeft] = useState();
    let [userLogin, setUserLogin] = useState({ email: '', password: '' });
    const [userSignup, setUserSignup] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin()) {
            navigate('/');
        }
    });

    const check = (target) => {
        const name = target.name;
        const value = target.value;
        const errElement = document.getElementById(name);
        switch (name) {
            case 'name': {
                if (value === '') {
                    errElement.innerHTML = 'Vui lòng nhập họ và tên';
                    return false;
                } else {
                    errElement.innerHTML = '';
                }
                break;
            }
            case 'email': {
                const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (regex.test(value) === false) {
                    errElement.innerHTML = 'Email không đúng định dạng';
                    return false;
                } else {
                    errElement.innerHTML = '';
                }
                break;
            }
            case 'phone': {
                const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
                if (regex.test(value) === false) {
                    errElement.innerHTML = 'Số điện thoại không đúng định dạng';
                    return false;
                } else {
                    errElement.innerHTML = '';
                }
                break;
            }
            case 'password': {
                if (value.length < 5) {
                    errElement.innerHTML = 'Mật khẩu phải từ 5 ký tự trở lên';
                    return false;
                } else {
                    errElement.innerHTML = '';
                }
                break;
            }
            case 'confirm_password': {
                const password = document.getElementById('password_input').value;
                if (value !== password) {
                    errElement.innerHTML = 'Mật khẩu không khớp';
                    return false;
                } else {
                    errElement.innerHTML = '';
                }
                break;
            }
        }
        return true;
    };

    const handleCheck = (e) => check(e.target);

    const handleChangeUserSignup = (e) => {
        handleCheck(e);
        setUserSignup({ ...userSignup, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        const elementArray = [];
        const nameElement = document.getElementsByName('name')[0];
        const emailElement = document.getElementsByName('email')[0];
        const phoneElement = document.getElementsByName('phone')[0];
        const pwdElement = document.getElementsByName('password')[0];
        const confirmPwdElement = document.getElementsByName('confirm_password')[0];
        elementArray.push(nameElement, emailElement, phoneElement, pwdElement, confirmPwdElement);
        if (elementArray.every((target) => check(target))) {
            localStorage.clear();
            const result = await Api.postRequest('/auth/signup', userSignup);
            if (result.data.id === null) notifyError('Email khoản đã tồn tại');
            else {
                userLogin = {
                    email: userSignup.email,
                    password: userSignup.password,
                };
                handleLogin();
            }
        }
    };

    const handleChangeUserLogin = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        localStorage.clear();
        const result = await Api.postRequest('/auth/login', userLogin);
        if (!result) {
            notifyError('Đăng nhập không thành công');
        } else {
            localStorage.setItem('token', JSON.stringify(result.data.accessToken));
            localStorage.setItem('user', JSON.stringify(result.data.user));
            notify('Đăng nhập thành công');

            if (result.data.user.role === 'admin' || result.data.user.role === 'saler')
                window.location.pathname = '/admin';
            else window.location.pathname = '/';
        }
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.full}>
                    <div className={styles.main}>
                        <div className={styles.register}>
                            <input
                                value={userSignup.name}
                                onBlur={handleCheck}
                                onChange={handleChangeUserSignup}
                                name="name"
                                className={styles.input}
                                placeholder="Họ và tên"
                            />
                            <div id="name" className={styles.error}></div>
                            <input
                                value={userSignup.email}
                                onChange={handleChangeUserSignup}
                                name="email"
                                className={styles.input}
                                placeholder="Email"
                            />
                            <div id="email" className={styles.error}></div>
                            <input
                                value={userSignup.phone}
                                onChange={handleChangeUserSignup}
                                name="phone"
                                className={styles.input}
                                placeholder="Số điện thoại"
                            />
                            <div id="phone" className={styles.error}></div>
                            <input
                                value={userSignup.password}
                                onChange={handleChangeUserSignup}
                                name="password"
                                id="password_input"
                                className={styles.input}
                                placeholder="Mật khẩu"
                                type="password"
                            />
                            <div id="password" className={styles.error}></div>
                            <input
                                onBlur={handleCheck}
                                name="confirm_password"
                                className={styles.input}
                                placeholder="Xác nhận mật khẩu"
                                type="password"
                            />
                            <div id="confirm_password" className={styles.error}></div>
                            <div onClick={() => setIsLeft(true)} className={styles.to_login}>
                                Đã có tài khoản?
                            </div>
                            <button onClick={handleRegister} className={styles.btn}>
                                ĐĂNG KÝ
                            </button>
                        </div>
                        <div className={styles.login}>
                            <div className={styles.auth0}>
                                <img
                                    className={styles.auth0_btn}
                                    src={require('../../../assets/images/google_logo.png')}
                                />
                                <img
                                    className={styles.auth0_btn}
                                    src={require('../../../assets/images/facebook_logo.png')}
                                />
                            </div>
                            <input
                                onChange={handleChangeUserLogin}
                                name="email"
                                className={styles.input}
                                placeholder="Email"
                                value={userLogin.email}
                            />
                            <input
                                onChange={handleChangeUserLogin}
                                name="password"
                                className={styles.input}
                                placeholder="Mật khẩu"
                                type="password"
                                value={userLogin.password}
                            />
                            <div onClick={() => setIsLeft(false)} className={styles.to_register}>
                                Chưa có tài khoản?
                            </div>
                            <button onClick={handleLogin} className={styles.btn}>
                                ĐĂNG NHẬP
                            </button>
                            <div className={styles.to_foget_pwd}>Quên mật khẩu?</div>
                        </div>
                    </div>
                    <div
                        className={clsx(styles.cover, {
                            [styles.left]: isLeft === true,
                            [styles.right]: isLeft === false,
                        })}
                    >
                        <div className={styles.brand}>THE STYLE</div>
                        <div className={styles.slogan}>Phong cách của bạn</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
