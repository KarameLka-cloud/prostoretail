import styles from "./Main.module.scss";
import React from "react";

export default function MainHome({ children }: { children: React.ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}
