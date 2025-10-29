import styles from "./HeaderPage.module.scss";
import { ReactNode } from "react";

interface HeaderPageType {
    children: ReactNode;
    className?: string;
}

export default function HeaderPage({ children, className }: HeaderPageType) {
    return <h2 className={`${styles.header_page} ${className}`}>{children}</h2>;
}
