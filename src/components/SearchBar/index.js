import Icon from '@mdi/react';
import styles from './SearchBar.module.scss';
import { mdiMagnify } from '@mdi/js';

function SearchBar({ placeholder }) {
    return (
        <div className={styles.wrapper}>
            <input className={styles.input} placeholder={placeholder} />
            <button className={styles.btn}>
                <Icon path={mdiMagnify} size={1.7} />
            </button>
        </div>
    );
}

export default SearchBar;
