import styles from "./Header.module.scss";
import icon_cart from "@assets/icons/Cart.svg";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
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

                    <a href="+79000000000" className={styles.header_top__phone}>
                        +79000000000
                    </a>

                    <a className={styles.header_top__link__icon}>Icon</a>
                    <a className={styles.header_top__link__icon}>Icon</a>
                    <a className={styles.header_top__link__icon}>Icon</a>
                </div>
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
                        Гаджеты
                    </a>
                    <a href="#" className={styles.header_main__link}>
                        Игровые приставки
                    </a>
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
        </header>
    );
}
