import clsx from 'clsx';
import Footer from '../../../Layout/DefaultLayout/Footer';
import styles from './Login.module.scss';
import { useState } from 'react';

function Login() {
    const [isLeft, setIsLeft] = useState();

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

    const handleRegister = () => {
        const elementArray = [];
        const nameElement = document.getElementsByName('name')[0];
        const emailElement = document.getElementsByName('email')[0];
        const phoneElement = document.getElementsByName('phone')[0];
        const pwdElement = document.getElementsByName('password')[0];
        const confirmPwdElement = document.getElementsByName('confirm_password')[0];
        elementArray.push(nameElement, emailElement, phoneElement, pwdElement, confirmPwdElement);
        if (elementArray.every((target) => check(target))) alert('Ok');
        else alert('No');
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.full}>
                    <div className={styles.main}>
                        <div className={styles.register}>
                            <input onBlur={handleCheck} name="name" className={styles.input} placeholder="Họ và tên" />
                            <div id="name" className={styles.error}></div>
                            <input onChange={handleCheck} name="email" className={styles.input} placeholder="Email" />
                            <div id="email" className={styles.error}></div>
                            <input
                                onChange={handleCheck}
                                name="phone"
                                className={styles.input}
                                placeholder="Số điện thoại"
                            />
                            <div id="phone" className={styles.error}></div>
                            <input
                                onChange={handleCheck}
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
                            <input className={styles.input} placeholder="Email" />
                            <input className={styles.input} placeholder="Mật khẩu" type="password" />
                            <div onClick={() => setIsLeft(false)} className={styles.to_register}>
                                Chưa có tài khoản?
                            </div>
                            <button className={styles.btn}>ĐĂNG NHẬP</button>
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
