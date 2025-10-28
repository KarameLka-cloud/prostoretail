import styles from "./Main.module.scss";

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.main__content}>
                <div className={styles.main__slider}>Slider</div>
                <div className={styles.main__section}>Products</div>
                <div className={styles.main__hit}>Hits</div>
            </div>
        </main>
    );
}
