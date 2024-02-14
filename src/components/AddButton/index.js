import { Link } from 'react-router-dom';
import styles from './AddButton.module.scss';

function AddButton({ to }) {
    return (
        <Link to={to} className={styles.btn}>
            <div style={{ marginBottom: '4px' }}>+</div>
        </Link>
    );
}

export default AddButton;
