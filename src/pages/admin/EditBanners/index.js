import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import styles from './EditBanners.module.scss';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useEffect, useState } from 'react';
import ImageModal from '../../../components/Modal/ImageModal';
import { config } from '../../../utils/config';
import api from '../../../utils/api';
import { useParams } from 'react-router-dom';

function EditBanners() {
    const [banner, setBanner] = useState({});
    const [image, setImage] = useState(null);

    const id = useParams().id;

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImage(file);
            setBanner({ ...banner, image: file.name });
        };
        reader.readAsDataURL(file);
    };

    const render = async () => {
        let result = await api.getRequest(`/banner/${id}`);
        setBanner(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeInput = (e) => {
        setBanner({
            ...banner,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async () => {
        if (image) {
            const formData = new FormData();
            formData.append('image', image);
            await api.uploadFileRequest('/uploadimage/banners', formData);
        }
        const result = await api.putRequest('/banner', banner);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý băng rôn" detail="Sửa băng rôn">
                <Input value={banner.name} onChange={handleChangeInput} name="name" label="Tên băng rôn" />
                <Input onChange={handleChangeFile} label="Hình ảnh" type="file" width="30%" />
                <ImageModal
                    style={{ width: '200px' }}
                    imageUrl={image ? URL.createObjectURL(image) : config.baseURL + '/getimage/banners/' + banner.image}
                    alt=""
                />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default EditBanners;
