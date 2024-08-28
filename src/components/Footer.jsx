import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; Copyright {new Date().getFullYear()} WorldWise Inc.</p>
    </footer>
  );
}

export default Footer;
