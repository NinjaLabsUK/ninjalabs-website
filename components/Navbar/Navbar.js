import { FaGithub, FaTwitter } from "react-icons/fa";
import NavLinksContainer from "./NavLinksContainer";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { COLOURS, SHADOWS, SPACING, CONTAINER_WIDTH } from "../../styles";

export default () => (
  <nav>
    <div className="container">
      <NavLinksContainer>
        <NavLink title="Blog" href="/blog" />
        <NavLink title="Playground" href="/playground" />
      </NavLinksContainer>
      <NavLogo />
      <NavLinksContainer>
        <a
          href="https://twitter.com/NinjaLabsUK"
          className="icon"
          target="_blank"
        >
          <FaTwitter size="1.6em" />
        </a>
        <a
          href="https://github.com/NinjaLabsUK"
          className="icon"
          target="_blank"
        >
          <FaGithub size="1.6em" />
        </a>
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
