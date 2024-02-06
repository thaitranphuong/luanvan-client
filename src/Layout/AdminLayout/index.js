import Header from './Header';
import NavBar from './Navbar';
import Footer from './Footer';
import styles from './AdminLayout.module.scss';
import { useState } from 'react';

function AdminLayout({ children }) {
    const [showNav, setShowNav] = useState(true);

    return (
        <>
            <Header showNav={showNav} setShowNav={setShowNav} />
            <div className={styles.wrapper}>
                <NavBar showNav={showNav} />
                <div className={styles.body_wrapper}>
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default AdminLayout;
