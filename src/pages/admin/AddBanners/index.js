import { useState } from 'react';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import styles from './AddBanners.module.scss';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import ImageModal from '../../../components/Modal/ImageModal';

function AddBanners() {
    const [imageUrl, setImageUrl] = useState(null);
    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý băng rôn" detail="Thêm băng rôn">
                <Input label="Tên băng rôn" />
                <Input onChange={handleChangeFile} label="Hình ảnh" type="file" width="30%" />
                <ImageModal style={{ width: '200px', height: '110px' }} imageUrl={imageUrl} alt="" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default AddBanners;
