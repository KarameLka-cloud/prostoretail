import styles from "./Main.module.scss";
import React from "react";

interface MainType {
    children: React.ReactNode;
}

export default function Main({ children }: MainType) {
    return (
        <main className={styles.main}>
            <div className={styles.main_content}>{children}</div>
        </main>
    );
}
