import { FaGithub, FaTwitter } from "react-icons/fa";

import NavLinksContainer from "./NavLinksContainer";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { COLOURS, SHADOWS, SPACING, CONTAINER_WIDTH } from "../../styles";

const LINKS = [
  {
    href: "https://twitter.com/NinjaLabsUK",
    icon: <FaTwitter size="1.6em" />
  },
  {
    href: "https://github.com/KChadwick96",
    icon: <FaGithub size="1.6em" />
  }
];

const Navbar = () => (
  <nav>
    <div className="container">
      <NavLinksContainer>
        <NavLink title="My CV" href="/cv" />
        <NavLink title="Playground" href="/playground" />
      </NavLinksContainer>
      <NavLogo />
      <NavLinksContainer>
        {LINKS.map(({ href, icon: Icon }, index) => (
          <a key={`link-${index}`} href={href} className="icon" target="_blank">
            {Icon}
          </a>
        ))}
      </NavLinksContainer>
    </div>
    <style jsx>{`
      nav {
        background-color: ${COLOURS.white};
        box-shadow: ${SHADOWS.light};
      }

      .container {
        height: 75px;
        max-width: ${CONTAINER_WIDTH};
        margin: 0 auto;
        padding: 0 ${SPACING.small};
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
      }

      .icon {
        margin-left: ${SPACING.small};
        color: ${COLOURS.black};
      }

      .icon:hover {
        color: ${COLOURS.primary};
      }
    `}</style>
  </nav>
);

export default Navbar;
