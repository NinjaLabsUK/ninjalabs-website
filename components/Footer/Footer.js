import Container from "../Container/Container";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <p className={styles.copyright}>Built by Kieran Chadwick</p>
    </Container>
  </footer>
);

export default Footer;
