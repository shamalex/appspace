import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => (
  <div className={styles.errorPage}>
    <h1>Ups, 404 - Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/">Go back to the main page</Link>
  </div>
);

export default ErrorPage;
