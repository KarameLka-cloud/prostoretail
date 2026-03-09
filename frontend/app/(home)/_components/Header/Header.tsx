import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo_img from "@/public/images/logo.jpeg";
import search_icon from "@/public/icons/search.svg";
import basket_icon from "@/public/icons/basket.svg";
import profile_icon from "@/public/icons/profile.svg";
import burger_icon from "@/public/icons/burger.svg";

const topLinks = [
  {
    id: 1,
    title: "Trade-in",
    path: "trade_in",
  },
  {
    id: 2,
    title: "Инструкции",
    path: "instructions",
  },
  {
    id: 3,
    title: "О нас",
    path: "about",
  },
  {
    id: 4,
    title: "Контакты",
    path: "contacts",
  },
];

const navLinks = [
  {
    id: 1,
    title: "PlayStation",
    path: "1",
  },
  {
    id: 2,
    title: "Xbox",
    path: "2",
  },
  {
    id: 3,
    title: "Nintendo",
    path: "3",
  },
  {
    id: 4,
    title: "Игры",
    path: "4",
  },
  {
    id: 5,
    title: "Аксессуары",
    path: "5",
  },
];

export default function HeaderHome() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_top}>
          <div className={styles.header_top__content}>
            <div className={styles.header_top__links}>
              {topLinks.map(
                (item: { id: number; title: string; path: string }) => (
                  <a
                    key={item.id}
                    href={item.path}
                    className={styles.header_top__link}
                  >
                    {item.title}
                  </a>
                ),
              )}
            </div>
            <div className={styles.header_top__social}>
              <span>Telegram</span>
              <span> </span>
              <span>Phone</span>
            </div>
          </div>
        </div>
        <div className={styles.header_info}>
          <div className={styles.header_info__content}>Info</div>
        </div>
        <div className={styles.header_nav}>
          <div className={styles.header_nav__content}>
            {navLinks.map(
              (item: { id: number; title: string; path: string }) => (
                <a key={item.id} href={item.path}>
                  {item.title}
                </a>
              ),
            )}
          </div>
        </div>
      </header>

      <header className={styles.header_mobile}>
        <div className={styles.header_mobile__content}>
          <div className={styles.header_mobile__info}>
            <Link href="/">
              <Image
                src={logo_img}
                alt=""
                className={styles.header_mobile__logo}
              />
            </Link>
            <div className={styles.header_mobile__profile}>
              <Link href="" className={styles.header_mobile__link}>
                <Image
                  src={search_icon}
                  alt=""
                  className={styles.header_mobile__icon}
                />
              </Link>
              <Link href="" className={styles.header_mobile__link}>
                <Image
                  src={basket_icon}
                  alt=""
                  className={styles.header_mobile__icon}
                />
              </Link>
              <Link href="" className={styles.header_mobile__link}>
                <Image
                  src={profile_icon}
                  alt=""
                  className={styles.header_mobile__icon}
                />
              </Link>
              <Link href="" className={styles.header_mobile__link}>
                <Image
                  src={burger_icon}
                  alt=""
                  className={styles.header_mobile__icon}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
