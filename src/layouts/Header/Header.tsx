import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  </header>
);
