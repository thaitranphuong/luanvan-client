import { Link } from 'react-router-dom';
import Head from '../../Layout/DefaultLayout/Header/Head';
import styles from './HeaderCustom.module.scss';
import logo from '../../assets/images/logo.png';

function HeaderCustom({ title }) {
    return (
        <>
            <Head />
            <div className={styles.wrapper}>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt=""></img>
                </Link>
                <div className={styles.title}>{title}</div>
            </div>
        </>
    );
}

export default HeaderCustom;
