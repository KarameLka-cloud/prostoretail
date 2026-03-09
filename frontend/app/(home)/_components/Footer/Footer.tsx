import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo_img from "@/public/images/logo.jpeg";

export default function FooterHome() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        {/* <div className={styles.footer__info}> */}
        <Link href="/" className={styles.footer__main_link}>
          <Image src={logo_img} alt="" className={styles.footer__logo} />
        </Link>
        <div className={styles.footer__info}>
          <div className={styles.footer__address}>
            г. Иркутск, ул. 30-й Дивизии, 55
          </div>
          <div className={styles.footer__email}>prostoretail@mail.ru</div>
          <div className={styles.footer__phone}>92 - 22 - 42</div>
        </div>
        <div className={styles.footer__social}>
          <a href="" className={styles.footer__social__link}>
            Phone
          </a>
          <a href="" className={styles.footer__social__link}>
            Telegram
          </a>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.footer__additional_info}>
        <div>© 2026 Prostoretail - магазин электроники</div>
        <div>Powered by KarameLka</div>
      </div>
      {/* </div> */}
    </footer>
  );
}
