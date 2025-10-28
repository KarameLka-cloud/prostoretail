import styles from "./Main.module.scss";

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.main__content}>
                <div className={`${styles.main_slider} ${styles.section}`}>
                    Slider
                </div>
                <div className={`${styles.main_section} ${styles.section}`}>
                    Products
                </div>
                <div className={`${styles.main_hit} ${styles.section}`}>
                    Hits
                </div>
            </div>
        </main>
    );
}
