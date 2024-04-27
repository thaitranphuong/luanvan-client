import styles from './EditShipping.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { useParams } from 'react-router-dom';
import { notify, notifyError } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function EditShipping() {
    const [shipping, setShipping] = useState({});

    const navigate = useNavigate();
    const id = useParams().id;

    const render = async () => {
        let result = await api.getRequest(`/shipping/${id}`);
        setShipping(result.data);
    };

    useEffect(() => {
        render();
    }, []);

    const handleChangeshipping = (e) => {
        setShipping({
            ...shipping,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const result = await api.putRequest('/shipping', shipping);
        if (result && result.statusCode === 200) {
            notify('Lưu thành công');
            navigate('/admin/shipping');
        } else {
            notifyError('Lưu không thành công');
        }
    };
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý loại ship" detail="Sửa loại ship">
                <Input value={shipping.name} onChange={handleChangeshipping} name="name" label="Tên loại ship" />
                <Input
                    value={shipping.cost}
                    onChange={handleChangeshipping}
                    name="cost"
                    label="Giá tiền"
                    type="number"
                />
                <SaveButton onClick={handleSubmit} />
            </Wrapper>
        </div>
    );
}

export default EditShipping;
