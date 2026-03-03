import styles from "./Main.module.scss";

export default function MainAuth({ children }: { children: React.ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}
