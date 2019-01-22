import NavLinksContainer from "./NavLinksContainer";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { COLOURS, SHADOWS, SPACING } from "../../styles";

export default () => (
  <nav>
    <NavLinksContainer>
      <NavLink title="Posts" href="/posts" />
      <NavLink title="Playground" href="/playground" />
    </NavLinksContainer>
    <NavLogo />
    <NavLinksContainer>
      <span>Hello</span>
    </NavLinksContainer>

    <style jsx>{`
      nav {
        height: 75px;
        background-color: ${COLOURS.white};
        box-shadow: ${SHADOWS.light};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 ${SPACING.sm};
      }
    `}</style>
  </nav>
);
