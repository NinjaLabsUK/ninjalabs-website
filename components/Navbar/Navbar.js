import { FaGithub, FaTwitter } from "react-icons/fa";

import NavLinksContainer from "./NavLinksContainer";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { COLOURS, SPACING, CONTAINER_WIDTH } from "../../styles";

const SOCIAL_LINKS = [
  {
    href: "https://twitter.com/NinjaLabsUK",
    icon: <FaTwitter size="1.6em" />,
    label: "Ninja Labs twitter",
  },
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
];

const Navbar = () => (
  <nav>
    <div className="container">
      <NavLinksContainer>
        {LINKS.map((props, index) => (
          <NavLink key={`link-${index}`} {...props} />
        ))}
      </NavLinksContainer>
      <NavLogo />
      <NavLinksContainer>
        {SOCIAL_LINKS.map(({ href, icon: Icon, label }, index) => (
          <a
            key={`link-${index}`}
            href={href}
            aria-label={label}
            className="icon"
            target="_blank"
          >
            {Icon}
          </a>
        ))}
      </NavLinksContainer>
    </div>
    <style jsx>{`
      nav {
        background-color: ${COLOURS.darkerGrey};
      }

      .container {
        height: 75px;
        max-width: ${CONTAINER_WIDTH};
        margin: 0 auto;
        padding: 0 ${SPACING.medium};
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
      }

      .icon {
        margin-left: ${SPACING.small};
        color: ${COLOURS.white};
      }

      .icon:hover {
        color: ${COLOURS.primary};
      }
    `}</style>
  </nav>
);

export default Navbar;
