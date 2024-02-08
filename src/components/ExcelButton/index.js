import Icon from '@mdi/react';
import styles from './ExcelButton.module.scss';
import { mdiFileExcel } from '@mdi/js';

function ExcelButton() {
    return (
        <button className={styles.wrapper}>
            Xuất Excel <Icon style={{ marginTop: '-5px' }} path={mdiFileExcel} size={1.5} />
        </button>
    );
}

export default ExcelButton;
