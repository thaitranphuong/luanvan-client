import Footer from '../../../Layout/DefaultLayout/Footer';
import NavLeft from '../../../components/NavLeft';
import styles from './Account.module.scss';

function Account() {
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
            reader.onload = function () {
                imageContainer.innerHTML = `<img style="border-radius: 50%; width: 100px; height: 100px; object-fit: cover;" src=${reader.result} alt="avatar" />`;
            };
            reader.readAsDataURL(file);
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
                            <input className={styles.input} />
                            <div className={styles.lable}>Số điện thoại</div>
                            <input className={styles.input} />
                            <div className={styles.lable}>Địa chỉ</div>
                            <input className={styles.input} />
                            <div className={styles.lable}>Ngày sinh</div>
                            <input type="date" className={styles.input} />
                            <div className={styles.lable}>Giới tính</div>
                            <select className={styles.input}>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                            </select>
                            <button className={styles.btn_submit}>Lưu</button>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.avatar} id="avatar">
                                <img
                                    className={styles.avatar_img}
                                    src={require('../../../assets/images/avatar.png')}
                                    alt="avatar"
                                />
                            </div>

                            <input onChange={handleChooseFile} type="file" hidden id="input-upload"></input>
                            <div className={styles.name}>Trần Phương Thái</div>
                            <div className={styles.email}>tranphuongthai000@gmail.com</div>
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
