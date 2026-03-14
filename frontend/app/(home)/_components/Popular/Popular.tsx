import styles from "./Popular.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Popular() {
  return (
    <>
      <h2>Popular</h2>
      <div className={styles.popular}>
        <div className={styles.popular_content}>
          <div className={styles.popular_content__info}>
            <div className={styles.popular_content__header}>PlayStation</div>
            <div className={styles.popular_content__links}>
              <Link href="" className={styles.popular_content__link}>
                Консоли
              </Link>
              <Link href="" className={styles.popular_content__link}>
                Игры
              </Link>
              <Link href="" className={styles.popular_content__link}>
                Аксессуары
              </Link>
            </div>
          </div>
          <Image
            src="/images/logo.jpeg"
            width={110}
            height={60}
            alt=""
            className={styles.popular_content__image}
          />
        </div>

        <div className={styles.popular_content}>
          <div className={styles.popular_content__info}>
            <div className={styles.popular_content__header}>PlayStation</div>
            <div className={styles.popular_content__links}>
              <Link href="" className={styles.popular_content__link}>
                Консоли
              </Link>
              <Link href="" className={styles.popular_content__link}>
                Игры
              </Link>
              <Link href="" className={styles.popular_content__link}>
                Аксессуары
              </Link>
            </div>
          </div>
          <Image
            src="/images/logo.jpeg"
            width={110}
            height={60}
            alt=""
            className={styles.popular_content__image}
          />
        </div>
      </div>
    </>
  );
}
