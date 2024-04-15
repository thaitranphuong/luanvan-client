import { useEffect, useState } from 'react';
import Footer from '../../../Layout/DefaultLayout/Footer';
import NavLeft from '../../../components/NavLeft';
import styles from './Account.module.scss';
import api from '../../../utils/api';
import { getUser } from '../../../utils/localstorage';
import { config } from '../../../utils/config';

function Account() {
    const [user, setUser] = useState({});
    const [image, setImage] = useState();
    const id = getUser().id;

    const render = async () => {
        let result = await api.getRequest(`/user/${id}`);
        setUser(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const handleUpload = () => {
        const input = document.getElementById('input-upload');
        input.click();
    };

    const handleChooseFile = () => {
        const input = document.getElementById('input-upload');
        const imageContainer = document.getElementById('avatar');
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            setImage(file);
            setUser({ ...user, avatar: file.name });
            reader.onload = function () {
                imageContainer.innerHTML = `<img style="border-radius: 50%; width: 100px; height: 100px; object-fit: cover;" src=${reader.result} alt="avatar" />`;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        let result = await api.putRequest('/user', user);
        if (result && result.statusCode === 200 && result.id !== null) {
            const formData = new FormData();
            formData.append('image', image);
            result = await api.uploadFileRequest('/uploadimage/users', formData);
            if (result && result.statusCode === 200) alert('Luu thanh cong');
        }
    };

    return (
        <>
            <div className={styles.wrapper}>
                <NavLeft />
                <div className={styles.box}>
                    <div className={styles.head}>
                        <div className={styles.head_title}>Hồ Sơ Của Tôi</div>
                        <div className={styles.head_description}>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.left}>
                            <div className={styles.lable}>Họ và tên</div>
                            <input
                                onChange={handleChangeInput}
                                value={user.name}
                                name="name"
                                className={styles.input}
                            />
                            <div className={styles.lable}>Số điện thoại</div>
                            <input
                                onChange={handleChangeInput}
                                value={user.phone}
                                name="phone"
                                className={styles.input}
                            />
                            <div className={styles.lable}>Địa chỉ</div>
                            <input
                                onChange={handleChangeInput}
                                value={user.address}
                                name="address"
                                className={styles.input}
                            />
                            <div className={styles.lable}>Ngày sinh</div>
                            <input
                                onChange={handleChangeInput}
                                value={user.birthday}
                                type="date"
                                className={styles.input}
                                name="birthday"
                            />
                            <div className={styles.lable}>Giới tính</div>
                            <select
                                name="gender"
                                onChange={handleChangeInput}
                                value={user.gender}
                                className={styles.input}
                            >
                                <option value={true}>Nam</option>
                                <option value={false}>Nữ</option>
                            </select>
                            <button onClick={handleSubmit} className={styles.btn_submit}>
                                Lưu
                            </button>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.avatar} id="avatar">
                                <img
                                    className={styles.avatar_img}
                                    src={
                                        user.avatar
                                            ? config.baseURL + '/getimage/users/' + user.avatar
                                            : require('../../../assets/images/avatar.png')
                                    }
                                    alt="avatar"
                                />
                            </div>

                            <input onChange={handleChooseFile} type="file" hidden id="input-upload"></input>
                            <div className={styles.name}>{user.name}</div>
                            <div className={styles.email}>{user.email}</div>
                            <button onClick={handleUpload} className={styles.btn}>
                                Chọn Ảnh
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Account;
