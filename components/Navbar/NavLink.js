import Link from "../ActiveLink";
import styles from "./NavLink.module.css";

const NavLink = ({ title, href }) => (
  <Link href={href} className={styles.link} activeClassName={styles.active}>
    {title}
  </Link>
);

export default NavLink;
