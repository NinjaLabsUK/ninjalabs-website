import NavLinksContainer from "./NavLinksContainer";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { COLOURS, SHADOWS, SPACING, CONTAINER_WIDTH } from "../../styles";

export default () => (
  <nav>
    <div className="container">
      <NavLinksContainer>
        <NavLink title="Posts" href="/posts" />
        <NavLink title="Playground" href="/playground" />
      </NavLinksContainer>
      <NavLogo />
      <NavLinksContainer>
        <span>Hello</span>
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
        padding: 0 ${SPACING.sm};
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </nav>
);
