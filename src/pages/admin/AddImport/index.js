import styles from './AddImport.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import Select from '../../../components/Select';
import Icon from '@mdi/react';
import { mdiTrashCan } from '@mdi/js';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';

function AddImport() {
    const [suppliers, setSuppliers] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const [products, setProducts] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    let [productDetailSizes, setProductDetailSizes] = useState([]);
    const [_import, setImport] = useState();

    const getSuppliers = async () => {
        let result = await api.getRequest(`/supplier/get-all`);
        if (result.statusCode === 200) setSuppliers(result.data);
    };

    const getWarehouses = async () => {
        let result = await api.getRequest(`/warehouse/get-all`);
        if (result.statusCode === 200) setWarehouses(result.data);
    };

    const getProducts = async () => {
        let result = await api.getRequest(`/product/get-all`);
        if (result.statusCode === 200) setProducts(result.data);
    };

    useEffect(() => {
        getSuppliers();
        getWarehouses();
        getProducts();
    }, []);

    const handleOnchange = (e) => {
        setImport({ ..._import, [e.target.name]: e.target.value });
    };

    const handleChooseProduct = async (e) => {
        const result = await api.getRequest('/product/' + e.target.value);
        if (result.statusCode === 200) {
            const temp = [];
            result.data.listProductDetail.forEach((item) => {
                temp.push({ ...item, name: item.color });
            });
            setProductDetails(temp);
            setProductDetailSizes([]);
        }
    };

    const handleChooseProductDetail = (e) => {
        let temp = [];
        productDetailSizes = [];
        productDetails.forEach((item) => {
            if (item.id == e.target.value) temp = [...item.listProductDetailSizes];
        });
        temp.forEach((item) => {
            productDetailSizes.push({ ...item, name: item.size });
        });
        setProductDetailSizes([...productDetailSizes]);
    };

    // const handleSave = async () => {
    //     const result = await api.postRequest('/category', _import);
    //     if (result.statusCode === 200) {
    //         alert('Luu thanh cong');
    //     } else {
    //         alert('Loi');
    //     }
    // };

    console.log(_import);

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhập hàng" detail="Thêm phiếu nhập">
                <div style={{ border: '1px solid #000', width: '100%', margin: '10px 0' }}></div>
                <div className={styles.title}>Thông tin phiếu nhập</div>
                <Select onChange={handleOnchange} name="supplierId" label="Chọn nhà cung cấp" array={suppliers} />
                <Select onChange={handleOnchange} name="warehouseId" label="Chọn kho hàng" array={warehouses} />
                <div style={{ border: '1px solid #000', width: '100%', margin: '10px 0' }}></div>
                <div className={styles.title}>Thêm chi tiết phiếu nhập</div>
                <Select onChange={handleChooseProduct} width="50%" label="Chọn sản phẩm" array={products} />
                <Select onChange={handleChooseProductDetail} width="25%" label="Chọn màu" array={productDetails} />
                <Select
                    onChange={handleOnchange}
                    name="productDetailSizeId"
                    width="25%"
                    label="Chọn kích cỡ"
                    array={productDetailSizes}
                />
                <Input onChange={handleOnchange} name="quantity" label="Số lượng" type="number" />
                <Input onChange={handleOnchange} name="price" label="Đơn giá (VND)" type="number" />
                <button className={styles.btn_add}>Thêm</button>
                <div style={{ border: '1px solid #ccc', width: '100%', margin: '10px 0' }}></div>
                <table
                    style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse', margin: '20px 5px' }}
                >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <Icon style={{ cursor: 'pointer', color: 'red' }} path={mdiTrashCan} size={1.5} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <SaveButton />
            </Wrapper>
        </div>
    );
}

export default AddImport;
