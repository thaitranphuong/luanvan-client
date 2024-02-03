import Icon from '@mdi/react';
import { mdiCurrencyUsd, mdiHeadphones, mdiSaleOutline, mdiTruckOutline } from '@mdi/js';

import styles from './Favor.module.scss';

function Favor() {
    return (
        <div className={styles.favor}>
            <div className={styles.favor_item}>
                <Icon path={mdiSaleOutline} size={3}></Icon>
                <div className={styles.favor_title}>SIÊU KHUYẾN MÃI</div>
                <div className={styles.favor_content}>Giảm giá lên đến 50%</div>
            </div>
            <div className={styles.favor_item}>
                <Icon path={mdiTruckOutline} size={3}></Icon>
                <div className={styles.favor_title}>MIỄN PHÍ VẬN CHUYỂN</div>
                <div className={styles.favor_content}>Phạm vi trong khoảng 10km</div>
            </div>
            <div className={styles.favor_item}>
                <Icon path={mdiHeadphones} size={3}></Icon>
                <div className={styles.favor_title}>HỖ TRỢ TẬN TÂM</div>
                <div className={styles.favor_content}>Bất cứ lúc nào bạn cần</div>
            </div>
            <div className={styles.favor_item}>
                <Icon path={mdiCurrencyUsd} size={3}></Icon>
                <div className={styles.favor_title}>THANH TOÁN AN TOÀN</div>
                <div className={styles.favor_content}>Các cổng thanh toán uy tín</div>
            </div>
        </div>
    );
}

export default Favor;
