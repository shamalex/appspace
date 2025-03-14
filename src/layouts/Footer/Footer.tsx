import styles from "./Footer.module.css";

export const Footer = () => (
    <footer className={styles.footer}>
      <p>
        All data from{" "}
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
          Rick and Morty API
        </a>
      </p>
    </footer>
  );
