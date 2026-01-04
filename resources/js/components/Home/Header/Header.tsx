import styles from "./Header.module.scss";
import telegram from "@assets/icons/telegram.svg";
import logo from "@assets/images/logo.jpg";
import basket from "@assets/icons/basket.svg";
import burger from "@assets/icons/burger.svg";
import profile from "@assets/icons/profile.svg";
import { NavLinkType } from "@/types/NavLinkType";
import { HOME_ROUTES } from "@constants/routes";
import { HEADER_TOP_LINKS, HEADER_NAV_LINKS } from "@/constants/navigation";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <div className={styles.header_top}>
                    <img src={burger} className={styles.header_top__burger} />
                    <div className={styles.header_top__links}>
                        {HEADER_TOP_LINKS.map(
                            ({ id, name, url }: NavLinkType) => (
                                <a
                                    href={url}
                                    key={id}
                                    className={styles.header_top__link}
                                >
                                    {name}
                                </a>
                            )
                        )}
                    </div>
                    <div className={styles.header_top__socials}>
                        <a
                            href="tel:+79000000000"
                            className={styles.header_top__socials__phone}
                        >
                            +7 (900) 000-00-00
                        </a>
                        <a href="#">
                            <img
                                src={telegram}
                                alt=""
                                className={styles.header_top__socials__icon}
                            />
                        </a>
                    </div>
                </div>
                <div className={styles.header_info}>
                    <a href={HOME_ROUTES.ROOT}>
                        <img
                            src={logo}
                            alt="Logo"
                            className={styles.header_info__logo}
                        />
                    </a>
                    <input
                        type="text"
                        className={styles.header_info__search}
                        placeholder="Поиск ещё не работает :("
                        // disabled={true}
                    />
                    <div className={styles.header_info__profile}>
                        <a href="#">
                            <img
                                src={profile}
                                alt=""
                                className={`${styles.header_info__profile__icon} ${styles.header_info__profile__auth}`}
                            />
                        </a>
                        <a href="#">
                            <img
                                src={basket}
                                alt=""
                                className={`${styles.header_info__profile__icon} ${styles.header_info__profile__basket}`}
                            />
                        </a>
                    </div>
                </div>
                <nav className={styles.header_nav}>
                    <div className={styles.header_nav__links}>
                        {HEADER_NAV_LINKS.map(
                            ({ id, name, url }: NavLinkType) => (
                                <a
                                    href={url}
                                    key={id}
                                    className={styles.header_nav__link}
                                >
                                    {name}
                                </a>
                            )
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}
