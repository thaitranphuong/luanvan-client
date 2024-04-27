import { useEffect, useState } from 'react';

import styles from './EditBlog.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import ImageModal from '../../../components/Modal/ImageModal';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';
import Editor from '../../../components/Editor';
import { config } from '../../../utils/config';
import { useParams } from 'react-router-dom';
import api from '../../../utils/api';
import { notify, notifyError } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function EditBlog() {
    const [blog, setBlog] = useState({});
    const [image, setImage] = useState(null);
    const [topics, setTopics] = useState([]);

    const navigate = useNavigate();
    const id = useParams().id;

    const getTopics = async () => {
        let result = await api.getRequest(`/topic/get-all`);
        if (result.statusCode === 200) setTopics(result.data);
    };

    const render = async () => {
        let result = await api.getRequest(`/blog/${id}`);
        setBlog(result.data);
    };

    useEffect(() => {
        getTopics();
        render();
    }, []);

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            setImage(file);
            setBlog({ ...blog, thumbnail: file.name });
        };
        reader.readAsDataURL(file);
    };

    const handleChangeInput = (e) => {
        setBlog((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSave = async () => {
        if (image) {
            const formData = new FormData();
            formData.append('image', image);
            await api.uploadFileRequest('/uploadimage/blogs', formData);
        }
        const result = await api.putRequest('/blog', blog);
        if (result && result.statusCode === 200) {
            notify('Lưu thành công');
            navigate('/admin/blog');
        } else {
            notifyError('Lưu không thành công');
        }
    };
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý bài đăng" detail="Sửa bài đăng">
                <Input value={blog.title} onChange={handleChangeInput} name="title" label="Tiêu đề" />
                <Input value={blog.code} onChange={handleChangeInput} name="code" label="Mã code" />
                <Select
                    value={blog.topicId}
                    onChange={handleChangeInput}
                    name="topicId"
                    label="Chủ đề"
                    array={topics}
                />
                <Input onChange={handleChangeFile} label="Hình ảnh" type="file" width="30%" />
                <ImageModal
                    style={{ width: '200px', height: '120px' }}
                    imageUrl={image ? URL.createObjectURL(image) : config.baseURL + '/getimage/blogs/' + blog.thumbnail}
                    alt=""
                />
                <TextArea
                    value={blog.shortDescription}
                    onChange={handleChangeInput}
                    name="shortDescription"
                    label="Mô tả ngắn"
                />
                <Editor
                    onChange={handleChangeInput}
                    name="content"
                    content={blog.content ? blog.content : ''}
                    label="Nội dung bài viết"
                />
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default EditBlog;
