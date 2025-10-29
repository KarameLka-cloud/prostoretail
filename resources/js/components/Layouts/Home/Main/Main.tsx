import styles from "./Main.module.scss";
import HeaderPage from "@/components/ui/HeaderPage/HeaderPage";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image_1 from "@assets/images/slider/image_1.jpeg";
import image_2 from "@assets/images/slider/image_2.jpeg";

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.main__content}>
                <div className={styles.main__slider}>
                    <Splide
                        options={{
                            rewind: true,
                            gap: "1rem",
                        }}
                        aria-label="My Favorite Images"
                    >
                        <SplideSlide>
                            <img src={image_1} alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={image_2} alt="Image 2" />
                        </SplideSlide>
                    </Splide>
                </div>
                <div className={styles.main__section}>
                    <HeaderPage>Products</HeaderPage>
                </div>
                <div className={styles.main__hit}>
                    <HeaderPage>Hits</HeaderPage>
                </div>
            </div>
        </main>
    );
}
