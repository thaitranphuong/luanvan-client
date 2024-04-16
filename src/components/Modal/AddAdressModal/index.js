import axios from 'axios';
import styles from './AddAdressModal.module.scss';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { getUser } from '../../../utils/localstorage';

function AddAdressModal({ setModalAdd, getAddresses, id }) {
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [address, setAddress] = useState({ userId: getUser().id });
    const [wardIndex, setWardIndex] = useState();
    const [districtIndex, setDistrictIndex] = useState();
    const [cityIndex, setCityIndex] = useState();

    const getAddress = async (cities) => {
        const result = await api.getRequest('/address/' + id);
        if (result && result.statusCode === 200) {
            setAddress(result.data);
            let city, district, ward;
            cities.forEach((item, index) => {
                result.data.city === item.Name && (city = { city: item, index: index });
            });
            city.city.Districts.forEach((item, index) => {
                result.data.district === item.Name && (district = { district: item, index: index });
            });
            district.district.Wards.forEach((item, index) => {
                result.data.ward === item.Name && (ward = { ward: item, index: index });
            });
            setWardIndex(ward.index);
            setDistrictIndex(district.index);
            setCityIndex(city.index);
            setDistricts(cities[city.index].Districts);
            setWards(cities[city.index].Districts[district.index].Wards);
        }
    };

    var Parameter = {
        url: 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
        method: 'GET',
        responseType: 'application/json',
    };

    useEffect(() => {
        var promise = axios(Parameter);
        promise
            .then(function (result) {
                setCities(JSON.parse(result.data));
                return JSON.parse(result.data);
            })
            .then((cities) => id && getAddress(cities));
    }, []);

    const handleChangeCity = (index) => {
        if (cities[index]) {
            setDistricts([...cities[index].Districts]);
            setAddress({ ...address, city: cities[index].Name, district: '', ward: '' });
        } else {
            setDistricts([]);
            setAddress({ ...address, city: '', district: '', ward: '' });
        }
        setWards([]);
    };

    const handleChangeDistrict = (index) => {
        if (districts[index]) {
            setWards([...districts[index].Wards]);
            setAddress({ ...address, district: districts[index].Name, ward: '' });
        } else {
            setWards([]);
            setAddress({ ...address, district: '', ward: '' });
        }
    };

    const handleChangeWard = (index) => {
        if (wards[index]) setAddress({ ...address, ward: wards[index].Name });
        else setAddress({ ...address, ward: '' });
    };

    const handleSave = async () => {
        if (!address.username) {
            alert('Chưa nhập họ tên');
        } else if (!address.phone) {
            alert('Chưa nhập số điện thoại');
        } else if (!address.city) {
            alert('Chưa chọn thành phố');
        } else if (!address.district) {
            alert('Chưa chọn huyện');
        } else if (!address.ward) {
            alert('Chưa chọn xã');
        } else {
            if (!address.id) await api.postRequest('/address', address);
            else await api.putRequest('/address', address);
            getAddresses();
            setAddress({ userId: getUser().id });
            setModalAdd(false);
        }
    };

    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal}>
                <div className={styles.modal_title}>Cập nhật địa chỉ</div>
                <div className={styles.modal_body}>
                    <input
                        onChange={(e) => setAddress({ ...address, username: e.target.value })}
                        value={address.username && address.username}
                        style={{ width: '48%' }}
                        className={styles.modal_body_input}
                        placeholder="Họ và tên"
                    />
                    <input
                        onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                        value={address.phone && address.phone}
                        style={{ width: '48%', marginLeft: '4%' }}
                        className={styles.modal_body_input}
                        placeholder="Số điện thoại"
                    />
                    <select
                        onChange={(e) => handleChangeCity(e.target.value)}
                        value={cityIndex && cityIndex}
                        className={styles.modal_body_select}
                    >
                        <option value="">Tỉnh/Thành Phố</option>
                        {cities &&
                            cities.map((item, index) => (
                                <option key={item.Id} value={index}>
                                    {item.Name}
                                </option>
                            ))}
                    </select>
                    <select
                        onChange={(e) => handleChangeDistrict(e.target.value)}
                        value={districtIndex && districtIndex}
                        className={styles.modal_body_select}
                    >
                        <option value="">Quận/Huyện</option>
                        {districts &&
                            districts.map((item, index) => (
                                <option key={item.Id} value={index}>
                                    {item.Name}
                                </option>
                            ))}
                    </select>
                    <select
                        onChange={(e) => handleChangeWard(e.target.value)}
                        value={wardIndex && wardIndex}
                        className={styles.modal_body_select}
                    >
                        <option value="">Phường/Xã</option>
                        {wards &&
                            wards.map((item, index) => (
                                <option key={item.Id} value={index}>
                                    {item.Name}
                                </option>
                            ))}
                    </select>
                    <input
                        onChange={(e) => setAddress({ ...address, specification: e.target.value })}
                        value={address.specification && address.specification}
                        style={{ width: '100%' }}
                        className={styles.modal_body_input}
                        placeholder="Địa chỉ cụ thể"
                    />
                    <div className={styles.modal_body_map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125634.44145489468!2d105.76955167736344!3d10.255430501592397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1712994033698!5m2!1svi!2s"
                            width="100%"
                            height="100%"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <button onClick={handleSave} className={styles.modal_confirm}>
                    XÁC NHẬN
                </button>
                <button onClick={() => setModalAdd(false)} className={styles.modal_cancel}>
                    HỦY
                </button>
            </div>
        </div>
    );
}

export default AddAdressModal;
