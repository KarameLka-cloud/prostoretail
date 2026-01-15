import styles from "./Footer.module.scss";
import Logo from "@components/UI/Logo/Logo";
import NavLinkType from "@/types/NavLink.types";
import { HEADER_TOP_LINKS } from "@constants/navigation";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.footer_content__top}>
                    <Logo className={styles.footer_logo} />
                    <div className={styles.footer_information}>
                        г. Иркутск, ул. 30-й Дивизии, 55
                        <br />
                        +7 (900) 000 00-00
                    </div>
                    <div className={styles.footer_links}>
                        {HEADER_TOP_LINKS.map(
                            ({ id, name, url }: NavLinkType) => (
                                <NavLink
                                    to={url}
                                    key={id}
                                    className={styles.footer_link}
                                >
                                    {name}
                                </NavLink>
                            )
                        )}
                    </div>
                </div>

                <div className={styles.footer_additional_information}>
                    <div>© 2026 Prostoretail - Магазин цифровой техники</div>
                    <div>Powered by KarameLka</div>
                </div>
            </div>
        </footer>
    );
}
