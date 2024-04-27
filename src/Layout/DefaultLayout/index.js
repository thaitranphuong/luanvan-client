import Header from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <ToastContainer position="top-center" theme="colored" />
            {children}
        </>
    );
}

export default DefaultLayout;
