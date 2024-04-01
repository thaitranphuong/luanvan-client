import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import styles from './SearchBar.module.scss';

function SearchBar({ placeholder, onChange, value }) {
    return (
        <div className={styles.wrapper}>
            <input value={value} onChange={onChange} className={styles.input} placeholder={placeholder} />
            <button className={styles.btn}>
                <Icon path={mdiMagnify} size={1.7} />
            </button>
        </div>
    );
}

export default SearchBar;
