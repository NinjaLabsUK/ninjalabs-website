import Link from "next/link";

import styles from "./NavLogo.module.css";

const NavLogo = ({ className = "" }) => (
  <div className={`${styles.container} ${className}`}>
    <Link href="/">
      <img
        className={styles.image}
        src="/img/logo-white.svg"
        alt="Ninja Labs"
      />
    </Link>
  </div>
);

export default NavLogo;
