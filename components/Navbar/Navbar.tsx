import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import NavLinksContainer from "./NavLinksContainer";
import styles from "./Navbar.module.css";
import Container from "../Container/Container";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/KChadwick96",
    icon: <FaGithub size="1.6em" />,
    label: "My Github",
  },
];

const Navbar = () => (
  <nav>
    <Container className={styles.container}>
      <Link href="/">
        <Image src="/img/logo-white.svg" alt="Logo" width={120} height={36} />
      </Link>
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
    </Container>
  </nav>
);

export default Navbar;
