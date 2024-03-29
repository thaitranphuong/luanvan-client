import Icon from '@mdi/react';
import { mdiAccount, mdiKey, mdiLogout, mdiMenu } from '@mdi/js';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { useState } from 'react';

function Header({ showNav, setShowNav }) {
    const [window, setWindow] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <button onClick={() => setShowNav(!showNav)} className={styles.menu}>
                    <Icon path={mdiMenu} size={1.5} />
                </button>
                <div className={styles.title}>TRANG QUẢN TRỊ</div>
            </div>
            <button onClick={() => setWindow(!window)} className={styles.right}>
                <Icon path={mdiAccount} size={1.7} />
                {window && (
                    <div onClick={(e) => e.stopPropagation()} className={styles.window}>
                        <div className={styles.window_top}>
                            <Link to="" className={styles.window_item}>
                                <Icon style={{ color: '#b9b9b9', marginRight: '15px' }} path={mdiAccount} size={1.7} />
                                Trần Phương Thái
                            </Link>
                            <Link to="" className={styles.window_item}>
                                <Icon style={{ color: '#b9b9b9', marginRight: '15px' }} path={mdiKey} size={1.7} />
                                Đổi mật khẩu
                            </Link>
                        </div>
                        <div className={styles.window_bottom}>
                            <div className={styles.window_item}>
                                <Icon style={{ color: '#b9b9b9', marginRight: '15px' }} path={mdiLogout} size={1.7} />
                                Đăng xuất
                            </div>
                        </div>
                    </div>
                )}
            </button>
        </div>
    );
}

export default Header;
