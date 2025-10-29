import styles from "./Footer.module.scss";

interface FooterType {
    className?: string;
}

export default function Footer({ className }: FooterType) {
    return (
        <footer
            className={`${styles.footer} ${styles.footer__margin_top} ${className}`}
        >
            <div className={styles.footer__content}>
                <div className={styles.footer__content__info}>
                    <a href="/" className={styles.footer__logo}>
                        Logo
                    </a>
                    <div className={styles.footer__address}>
                        ​Иркутской 30-й Дивизии, 55​цокольный этаж
                    </div>
                    <div className={styles.footer__phone}>
                        +7 (900) 000-00-00
                    </div>
                    <div className={styles.footer__socials}>Social</div>
                </div>
                <div className={styles.footer__content__menu}>Menu</div>
            </div>
        </footer>
    );
}
