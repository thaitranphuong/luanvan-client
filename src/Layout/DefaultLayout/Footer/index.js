import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.column}>
                    <div className={styles.topic}>Top Products</div>
                    <div className={styles.item}>Managed Website</div>
                    <div className={styles.item}>Manage Reputation</div>
                    <div className={styles.item}>Power Tools</div>
                    <div className={styles.item}>Marketing Service</div>
                </div>
                <div className={styles.column}>
                    <div className={styles.topic}>Quick Links</div>
                    <div className={styles.item}>Managed Website</div>
                    <div className={styles.item}>Manage Reputation</div>
                    <div className={styles.item}>Power Tools</div>
                    <div className={styles.item}>Marketing Service</div>
                </div>
                <div className={styles.column}>
                    <div className={styles.topic}>Features</div>
                    <div className={styles.item}>Managed Website</div>
                    <div className={styles.item}>Manage Reputation</div>
                    <div className={styles.item}>Power Tools</div>
                    <div className={styles.item}>Marketing Service</div>
                </div>
                <div className={styles.column}>
                    <div className={styles.topic}>Resources</div>
                    <div className={styles.item}>Managed Website</div>
                    <div className={styles.item}>Manage Reputation</div>
                    <div className={styles.item}>Power Tools</div>
                    <div className={styles.item}>Marketing Service</div>
                </div>
            </div>
            <div className={styles.copyright}>Bản quyền ©2024 Luận văn tốt nghiệp của Trần Phương Thái ❤️</div>
        </div>
    );
}

export default Footer;
