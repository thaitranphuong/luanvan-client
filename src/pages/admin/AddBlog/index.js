import { useState } from 'react';

import styles from './AddBlog.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import ImageModal from '../../../components/Modal/ImageModal';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';
import Editor from '../../../components/Editor';

function AddBlog() {
    const [imageUrl, setImageUrl] = useState(null);
    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const array = [];
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý bài đăng" detail="Thêm bài đăng">
                <Input label="Tiêu đề" />
                <Input label="Mã code" />
                <Select label="Chủ đề" array={array} />
                <Input onChange={handleChangeFile} label="Hình ảnh" type="file" width="30%" />
                <ImageModal style={{ width: '200px', height: '120px' }} imageUrl={imageUrl} alt="" />
                <TextArea label="Mô tả ngắn" />
                <Editor content="<h1>AAA</h1>" label="Nội dung bài viết" />
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default AddBlog;
