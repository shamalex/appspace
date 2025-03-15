import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>
          <Link to={{ pathname: "/", search: '' }}>Home</Link>
        </li>
      </ul>
    </nav>
  </header>
);
