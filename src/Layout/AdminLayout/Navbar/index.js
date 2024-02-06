import clsx from 'clsx';

import styles from './Navbar.module.scss';

function NavBar({ showNav }) {
    return <div className={clsx(styles.wrapper, { [styles.show]: showNav })}>NavBar</div>;
}

export default NavBar;
