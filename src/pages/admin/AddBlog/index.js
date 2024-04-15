import { useEffect, useState } from 'react';

import styles from './AddBlog.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import ImageModal from '../../../components/Modal/ImageModal';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';
import Editor from '../../../components/Editor';
import { getUser } from '../../../utils/localstorage';
import api from '../../../utils/api';

function AddBlog() {
    const [blog, setBlog] = useState({ authorId: getUser().id });
    const [image, setImage] = useState(null);
    const [topics, setTopics] = useState([]);

    const getTopics = async () => {
        let result = await api.getRequest(`/topic/get-all`);
        if (result.statusCode === 200) setTopics(result.data);
    };

    useEffect(() => {
        getTopics();
    }, []);

    const handleOnchange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    };

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImage(file);
            setBlog({ ...blog, thumbnail: file.name });
        };
        reader.readAsDataURL(file);
    };

    const handleSave = async () => {
        let json = JSON.stringify(blog);
        let blob = new Blob([json], {
            type: 'application/json',
        });
        const formData = new FormData();
        formData.append('blog', blob);
        formData.append('thumbnail', image);
        const result = await api.uploadFileRequest('/blog', formData);
        if (result.statusCode === 200) {
            alert('Luu thanh cong');
        } else {
            alert('Loi');
        }
    };

    const array = [];
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý bài đăng" detail="Thêm bài đăng">
                <Input onChange={handleOnchange} name="title" label="Tiêu đề" />
                <Input onChange={handleOnchange} name="code" label="Mã code" />
                <Select onChange={handleOnchange} name="topicId" label="Chủ đề" array={topics} />
                <Input onChange={handleChangeFile} label="Hình ảnh" type="file" width="30%" />
                <ImageModal
                    style={{ width: '200px', height: '120px' }}
                    imageUrl={image && URL.createObjectURL(image)}
                    alt=""
                />
                <TextArea onChange={handleOnchange} name="shortDescription" label="Mô tả ngắn" />
                <Editor onChange={handleOnchange} name="content" content={blog.content} label="Nội dung bài viết" />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default AddBlog;
