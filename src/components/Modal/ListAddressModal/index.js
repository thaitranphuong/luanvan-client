import clsx from 'clsx';

import styles from './ListAddressModal.module.scss';
import AddAdressModal from '../AddAdressModal';
import { useState } from 'react';

function ListAddressModal({ setModal, addresses, address, setAddress, getAddresses }) {
    const [modalAdd, setModalAdd] = useState(false);

    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal}>
                <div className={styles.modal_title}>Địa Chỉ Của Tôi</div>
                <div className={styles.modal_body}>
                    <div className={styles.modal_body_addresses}>
                        {addresses &&
                            addresses.map((item) => (
                                <div className={styles.modal_body_item}>
                                    <div
                                        onClick={() => setAddress({ ...item })}
                                        className={clsx(styles.modal_body_radio, {
                                            [styles.active]: address.id === item.id,
                                        })}
                                    ></div>
                                    <div className={styles.modal_body_main}>
                                        <div className={styles.modal_body_main_name}>
                                            {item.username} ({item.phone})
                                        </div>
                                        <div className={styles.modal_body_specific}>
                                            {address.specification} Phường {address.ward}, Quận {address.district},{' '}
                                            {address.city}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <button onClick={() => setModalAdd(true)} className={styles.modal_add}>
                        + Thêm địa chỉ mới
                    </button>
                </div>

                <button onClick={() => setModal(false)} className={styles.modal_confirm}>
                    XÁC NHẬN
                </button>
            </div>
            {modalAdd && <AddAdressModal setModalAdd={setModalAdd} getAddresses={getAddresses} />}
        </div>
    );
}

export default ListAddressModal;
