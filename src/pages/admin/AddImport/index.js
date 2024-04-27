import styles from './AddImport.module.scss';
import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import Input from '../../../components/Input';
import SaveButton from '../../../components/SaveButton';
import Select from '../../../components/Select';
import Icon from '@mdi/react';
import { mdiTrashCan } from '@mdi/js';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { getUser } from '../../../utils/localstorage';
import { notify, notifyError } from '../../../utils/notify';
import { useNavigate } from 'react-router-dom';

function AddImport() {
    const [suppliers, setSuppliers] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const [products, setProducts] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    let [productDetailSizes, setProductDetailSizes] = useState([]);
    const [_import, setImport] = useState({
        employeeId: getUser().id,
    });
    const [importDetail, setImportDetail] = useState({
        quantity: '',
        price: '',
        productDetailSizeId: '',
    });
    const [importDetails, setImportDetails] = useState([]);
    const [importDetailName, setImportDetailName] = useState({
        productName: '',
        productColor: '',
        productlSize: '',
    });
    const [importDetailNames, setImportDetailNames] = useState([]);

    const navigate = useNavigate();

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

    const handleOnchangeDetail = (e) => {
        setImportDetail({ ...importDetail, [e.target.name]: e.target.value });
        if (e.target.name === 'productDetailSizeId')
            productDetailSizes.forEach((item) => {
                if (item.id == e.target.value) setImportDetailName({ ...importDetailName, productSize: item.name });
            });
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
        products.forEach((item) => {
            if (item.id == e.target.value)
                setImportDetailName({ productName: item.name, productColor: '', productSize: '' });
        });
    };

    const handleChooseProductDetail = (e) => {
        let temp = [];
        productDetailSizes = [];
        productDetails.forEach((item) => {
            if (item.id == e.target.value) {
                temp = [...item.listProductDetailSizes];
                setImportDetailName({ ...importDetailName, productColor: item.name, productSize: '' });
            }
        });
        temp.forEach((item) => {
            productDetailSizes.push({ ...item, name: item.size });
        });
        setProductDetailSizes([...productDetailSizes]);
    };

    const handleAddDetail = () => {
        importDetails.push(importDetail);
        setImportDetails([...importDetails]);
        importDetailNames.push(importDetailName);
        setImportDetailNames([...importDetailNames]);
        setImportDetail({
            quantity: '',
            price: '',
            productDetailSizeId: '',
        });
        setImportDetailName({
            ...importDetailName,
            productSize: '',
        });
    };

    const handleRemoveDetail = (index) => {
        importDetails.splice(index, 1);
        setImportDetails([...importDetails]);
        importDetailNames.splice(index, 1);
        setImportDetailNames([...importDetailNames]);
    };

    const handleSave = async () => {
        _import.importDetails = [...importDetails];
        const result = await api.postRequest('/import', _import);
        if (result && result.statusCode === 200) {
            notify('Lưu thành công');
            navigate('/admin/import');
        } else {
            notifyError('Lưu không thành công');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý nhập hàng" detail="Thêm phiếu nhập">
                <div style={{ border: '1px solid #000', width: '100%', margin: '10px 0' }}></div>
                <div className={styles.title}>Thông tin phiếu nhập</div>
                <Select onChange={handleOnchange} name="supplierId" label="Nhà cung cấp" array={suppliers} />
                <Select onChange={handleOnchange} name="warehouseId" label="Kho hàng" array={warehouses} />
                <div style={{ border: '1px solid #000', width: '100%', margin: '10px 0' }}></div>
                <div className={styles.title}>Thêm chi tiết phiếu nhập</div>
                <Select onChange={handleChooseProduct} width="50%" label="Sản phẩm" array={products} />
                <Select onChange={handleChooseProductDetail} width="25%" label="Màu" array={productDetails} />
                <Select
                    onChange={handleOnchangeDetail}
                    name="productDetailSizeId"
                    width="25%"
                    label="Kích cỡ"
                    array={productDetailSizes}
                    value={importDetail.productDetailSizeId}
                />
                <Input
                    onChange={handleOnchangeDetail}
                    value={importDetail.quantity}
                    name="quantity"
                    label="Số lượng"
                    type="number"
                />
                <Input
                    onChange={handleOnchangeDetail}
                    value={importDetail.price}
                    name="price"
                    label="Đơn giá (VND)"
                    type="number"
                />
                <button onClick={handleAddDetail} className={styles.btn_add}>
                    Thêm
                </button>
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
                        {importDetails.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    {importDetailNames[index].productName +
                                        ' - ' +
                                        importDetailNames[index].productColor +
                                        ' - ' +
                                        importDetailNames[index].productSize}
                                </td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Icon
                                        onClick={() => handleRemoveDetail(index)}
                                        style={{ cursor: 'pointer', color: 'red' }}
                                        path={mdiTrashCan}
                                        size={1.5}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <SaveButton onClick={handleSave} />
            </Wrapper>
        </div>
    );
}

export default AddImport;
