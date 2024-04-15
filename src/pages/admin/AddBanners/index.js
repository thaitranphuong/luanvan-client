import { useState } from 'react';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import styles from './AddBanners.module.scss';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import ImageModal from '../../../components/Modal/ImageModal';
import api from '../../../utils/api';

function AddBanners() {
    const [banner, setBanner] = useState({ name: '', image: '' });
    const [image, setImage] = useState(null);

    const handleOnchange = (e) => {
        setBanner({ ...banner, [e.target.name]: e.target.value });
    };

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImage(file);
            setBanner({ ...banner, image: file.name });
        };
        reader.readAsDataURL(file);
    };

    const handleSave = async () => {
        let json = JSON.stringify(banner);
        let blob = new Blob([json], {
            type: 'application/json',
        });
        const formData = new FormData();
        formData.append('banner', blob);
        formData.append('image', image);
        const result = await api.uploadFileRequest('/banner', formData);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý băng rôn" detail="Thêm băng rôn">
                <Input onChange={handleOnchange} name="name" label="Tên băng rôn" />
                <Input onChange={handleChangeFile} label="Hình ảnh" type="file" width="30%" />
                <ImageModal
                    style={{ width: '200px', height: '110px' }}
                    imageUrl={image && URL.createObjectURL(image)}
                    alt=""
                />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default AddBanners;
