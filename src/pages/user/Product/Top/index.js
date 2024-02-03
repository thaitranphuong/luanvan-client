import { mdiCamera } from '@mdi/js';
import Icon from '@mdi/react';

import styles from './Top.module.scss';

function Top({ setCloseModal }) {
    const handleOpenModal = () => {
        setCloseModal(false);
    };

    return (
        <div className={styles.top}>
            <select className={styles.top_item}>
                <option className={styles.top_item_option} value="">
                    Sắp xếp
                </option>
                <option className={styles.top_item_option} value="">
                    Theo giá
                </option>
                <option className={styles.top_item_option} value="">
                    Theo tên
                </option>
            </select>
            <select className={styles.top_item}>
                <option className={styles.top_item_option} value="">
                    Hiển thị 6
                </option>
                <option className={styles.top_item_option} value="">
                    Hiển thị 9
                </option>
            </select>
            <div className={styles.top_item}>
                <input className={styles.top_item_input} placeholder="Tìm kiến sản phẩm theo tên" />
                <div onClick={handleOpenModal} className={styles.top_item_search}>
                    <Icon path={mdiCamera} size={2}></Icon>
                </div>
            </div>
        </div>
    );
}

export default Top;
