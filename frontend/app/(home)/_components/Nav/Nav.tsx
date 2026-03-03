import styles from "./Nav.module.scss";

export default function NavHome() {
  return (
    <nav className={styles.nav}>
      <div>Logo</div>
      <div>Search</div>
      <div>Profile</div>
    </nav>
  );
}
