import styles from "./Main.module.scss";
import HeaderPage from "@components/ui/HeaderPage/HeaderPage";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import image_1 from "@assets/images/slider/image_1.jpeg";
// import image_2 from "@assets/images/slider/image_2.jpeg";

interface MainType {
    className?: string;
}

export default function Main({ className }: MainType) {
    return (
        <main className={`${styles.main} ${className}`}>
            <div className={styles.main__content}>
                <div
                    className={`${styles.main__slider} ${styles.main__section}`}
                >
                    <Splide
                        options={{
                            rewind: true,
                            gap: "1rem",
                        }}
                        aria-label="My Favorite Images"
                    >
                        <SplideSlide>
                            <img
                                src="https://placehold.co/600x100"
                                alt="Image 1"
                                className={styles.main__slider__image}
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="https://placehold.co/600x100"
                                alt="Image 2"
                                className={styles.main__slider__image}
                            />
                        </SplideSlide>
                    </Splide>
                </div>
                <div
                    className={`${styles.main__goods} ${styles.main__section}`}
                >
                    <div className={styles.main__goods__content}>
                        <div className={styles.main__goods__item}>
                            Категория 1
                        </div>
                        <div className={styles.main__goods__item}>
                            Категория 2
                        </div>
                        <div className={styles.main__goods__item}>
                            Категория 3
                        </div>
                        <div className={styles.main__goods__item}>
                            Категория 4
                        </div>
                        <div className={styles.main__goods__item}>
                            Категория 5
                        </div>
                    </div>
                </div>
                <div className={`${styles.main__hit} ${styles.main__section}`}>
                    <HeaderPage>Хиты продаж</HeaderPage>
                    <div className={styles.main__hit__content}>
                        <div className={styles.main__hit__item}>Товар 1</div>
                        <div className={styles.main__hit__item}>Товар 2</div>
                        <div className={styles.main__hit__item}>Товар 3</div>
                        <div className={styles.main__hit__item}>Товар 4</div>
                        <div className={styles.main__hit__item}>Товар 5</div>
                        <div className={styles.main__hit__item}>Товар 6</div>
                    </div>
                </div>
                <div className={`${styles.main__news} ${styles.main__section}`}>
                    <HeaderPage>Новости</HeaderPage>
                    <div className={styles.main__news__content}>
                        <div className={styles.main__news__item}>Новость 1</div>
                        <div className={styles.main__news__item}>Новость 2</div>
                        <div className={styles.main__news__item}>Новость 3</div>
                        <div className={styles.main__news__item}>Новость 4</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
