import styles from './EditBrand.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { notify, notifyError } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function EditBrand() {
    const [brand, setBrand] = useState([]);

    const navigate = useNavigate();
    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/brand/${id}`);
        setBrand(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeBrand = (e) => {
        setBrand({
            ...brand,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const result = await api.putRequest('/brand', brand);
        if (result && result.statusCode === 200) {
            notify('Lưu thành công');
            navigate('/admin/brand');
        } else {
            notifyError('Lưu không thành công');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhãn hàng" detail="Sửa nhãn hàng">
                <Input value={brand.name} onChange={handleChangeBrand} name="name" label="Tên nhãn hàng" />
                <Input value={brand.code} onChange={handleChangeBrand} name="code" label="Mã code" />
                <SaveButton onClick={handleSubmit} />
            </Wrapper>
        </div>
    );
}

export default EditBrand;
