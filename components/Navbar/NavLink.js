import Link from "../ActiveLink";
import styles from "./NavLink.module.css";

const NavLink = ({ title, href }) => (
  <Link href={href} activeClassName={styles.active}>
    <a className={styles.link}>{title}</a>
  </Link>
);

export default NavLink;
