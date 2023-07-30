import { FaGithub } from "react-icons/fa";

import NavLinksContainer from "./NavLinksContainer";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import styles from "./Navbar.module.css";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/KChadwick96",
    icon: <FaGithub size="1.6em" />,
    label: "My Github",
  },
];

const LINKS = [
  {
    title: "My CV",
    href: "/cv",
  },
  {
    title: "Playground",
    href: "/playground",
  },
];

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.container}>
      <NavLinksContainer>
        {LINKS.map(({ href, title }, index) => (
          <NavLink key={`link-${index}`} title={title} href={href} />
        ))}
      </NavLinksContainer>
      <NavLogo className={styles.logo} />
      <NavLinksContainer>
        {SOCIAL_LINKS.map(({ href, icon: Icon, label }, index) => (
          <a
            key={`link-${index}`}
            href={href}
            aria-label={label}
            className={styles.icon}
            target="_blank"
          >
            {Icon}
          </a>
        ))}
      </NavLinksContainer>
    </div>
  </nav>
);

export default Navbar;
