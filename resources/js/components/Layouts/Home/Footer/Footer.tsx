import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__content__info}>
                    <div className={styles.footer__logo}>Logo</div>
                    <div className={styles.footer__address}>Address</div>
                    <div className={styles.footer__phone}>Phone</div>
                    <div className={styles.footer__socials}>Social</div>
                </div>
                <div className={styles.footer__content__menu}>Menu</div>
            </div>
        </footer>
    );
}
