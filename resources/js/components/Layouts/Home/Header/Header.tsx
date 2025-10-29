import styles from "./Header.module.scss";
import icon_telegram from "@assets/icons/telegram.svg";
import icon_whatsapp from "@assets/icons/whatsapp.svg";
import icon_cart from "@assets/icons/cart.svg";
import { HEADER_TOP_LINKS, HEADER_MAIN_LINKS } from "@/constants/navigation";
import { Link } from "react-router";

interface HeaderType {
    className?: string;
}

export default function Header({ className }: HeaderType) {
    return (
        <header className={`${styles.header} ${className}`}>
            <div className={styles.header__content}>
                <div className={styles.header_top}>
                    <div className={styles.header_top__content}>
                        {HEADER_TOP_LINKS.map(({ id, name, path }) => (
                            <Link
                                key={id}
                                to={path}
                                className={styles.header_top__link}
                            >
                                {name}
                            </Link>
                        ))}
                        <a
                            href="+79000000000"
                            className={styles.header_top__phone}
                        >
                            +7 (900) 000-00-00
                        </a>
                        <a href="#">
                            <img
                                src={icon_telegram}
                                alt="Telegram"
                                className={styles.header_top__link__icon}
                            />
                        </a>
                        <a href="#" className={styles.header_top__link__icon}>
                            <img
                                src={icon_whatsapp}
                                alt="Whatsapp"
                                className={styles.header_top__link__icon}
                            />
                        </a>
                        {/* <a href="#" className={styles.header_top__link__icon}>
                        <img
                            src={icon_whatsapp}
                            alt="Whatsapp"
                            className={styles.header_top__link__icon}
                        />
                    </a> */}
                    </div>
                </div>

                <div className={styles.header_main}>
                    <div className={styles.header_main__content}>
                        <a href="/" className={styles.header_main__logo}>
                            Logo
                        </a>
                        {HEADER_MAIN_LINKS.map(({ id, name, path }) => (
                            <Link
                                key={id}
                                to={path}
                                className={styles.header_main__link}
                            >
                                {name}
                            </Link>
                        ))}
                        <a href="#" className={styles.header_main__catalog}>
                            Каталог
                        </a>
                        <a href="#" className={styles.header_main__cart}>
                            <img
                                src={icon_cart}
                                className={styles.header_main__cart__icon}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
