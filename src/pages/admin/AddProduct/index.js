import { useState } from 'react';

import styles from './AddProduct.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import ImageModal from '../../../components/Modal/ImageModal';
import SaveButton from '../../../components/SaveButton';
import TextArea from '../../../components/TextArea';
import Select from '../../../components/Select';
import Editor from '../../../components/Editor';
import Icon from '@mdi/react';
import { mdiPen, mdiTrashCan } from '@mdi/js';
import AddProductModal from '../../../components/Modal/AddProductModal';

function AddProduct() {
    const [imageUrl, setImageUrl] = useState(null);
    const [modal, setModal] = useState(false);

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
            <Wrapper title="Quản lý sản phẩm" detail="Thêm sản phẩm">
                <Input label="Tên sản phẩm" />
                <Input onChange={handleChangeFile} label="Hình ảnh" type="file" width="30%" />
                <ImageModal style={{ width: '200px', height: '110px' }} imageUrl={imageUrl} alt="" />
                <Select label="Danh mục" />
                <Select label="Thương hiệu" />
                <Input label="Chất liệu" width="33.33%" />
                <Input label="Xuất xứ" width="33.33%" />
                <Input label="Giảm giá (%)" width="33.33%" type="number" />
                <TextArea label="Mô tả ngắn" />
                <Editor content="<h1>AAA</h1>" label="Mô tả chi tiết" />
                <div style={{ border: '1px solid #000', width: '100%', margin: '30px 0' }}></div>
                <div className={styles.title}>Danh sách chi tiết sản phẩm</div>
                <button onClick={() => setModal(true)} className={styles.btn_add}>
                    +
                </button>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Hình ảnh</th>
                            <th>Màu sắc</th>
                            <th>Kích cỡ</th>
                            <th>Giá</th>
                            <th>Tồn kho</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <ImageModal
                                    style={{ height: '50px' }}
                                    imageUrl={require('../../../assets/images/product.png')}
                                />
                            </td>
                            <td>Trắng hồng</td>
                            <td style={{ maxWidth: '500px' }}>S, M, L, XL, XXL</td>
                            <td>100000đ</td>
                            <td>100</td>
                            <td>
                                <span
                                    onClick={() => setModal(true)}
                                    style={{ marginRight: '20px', color: 'blue', cursor: 'pointer' }}
                                >
                                    <Icon path={mdiPen} size={1.5} />
                                </span>
                                <span style={{ color: 'red', cursor: 'pointer' }}>
                                    <Icon path={mdiTrashCan} size={1.5} />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ border: '1px solid #ccc', width: '100%', margin: '30px 0' }}></div>
                <SaveButton />
            </Wrapper>

            {modal && <AddProductModal setModal={setModal} />}
        </div>
    );
}

export default AddProduct;
