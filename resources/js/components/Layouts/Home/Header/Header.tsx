import styles from "./Header.module.scss";
import icon_telegram from "@assets/icons/telegram.svg";
import icon_whatsapp from "@assets/icons/whatsapp.svg";
import icon_cart from "@assets/icons/cart.svg";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.header_top}>
                    <div className={styles.header_top__content}>
                        <a href="#" className={styles.header_top__link}>
                            Гарантия
                        </a>
                        <a href="#" className={styles.header_top__link}>
                            Рассрочка
                        </a>
                        <a href="#" className={styles.header_top__link}>
                            Контакты
                        </a>
                        <a href="#" className={styles.header_top__link}>
                            О компании
                        </a>

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
                        <a href="#" className={styles.header_main__logo}>
                            Logo
                        </a>
                        <a href="#" className={styles.header_main__link}>
                            Apple
                        </a>
                        <a href="#" className={styles.header_main__link}>
                            Samsung
                        </a>
                        <a href="#" className={styles.header_main__link}>
                            Dyson
                        </a>
                        <a href="#" className={styles.header_main__link}>
                            Игровые приставки
                        </a>
                        <a href="#" className={styles.header_main__link}>
                            Гаджеты
                        </a>
                        <a href="#" className={styles.header_main__catalog}>
                            {/* <img src={icon_folder} /> */}
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
