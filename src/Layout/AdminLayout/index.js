import Header from './Header';
import NavBar from './Navbar';
import Footer from './Footer';
import styles from './AdminLayout.module.scss';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLayout({ children }) {
    const [showNav, setShowNav] = useState(true);

    return (
        <>
            <Header showNav={showNav} setShowNav={setShowNav} />
            <div className={styles.wrapper}>
                <NavBar showNav={showNav} />
                <div className={styles.body_wrapper}>
                    <ToastContainer position="top-center" theme="colored" />
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default AdminLayout;
