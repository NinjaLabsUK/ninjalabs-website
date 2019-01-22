import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { COLOURS, SHADOWS, SPACING } from "../../styles";

export default () => (
  <nav>
    <NavLink />
    <NavLink />
    <NavLogo />
    <style jsx>{`
      nav {
        height: 75px;
        background-color: ${COLOURS.white};
        box-shadow: ${SHADOWS.light};
        display: flex;
        align-items: center;
        padding: 0 ${SPACING.sm};
      }
    `}</style>
  </nav>
);
