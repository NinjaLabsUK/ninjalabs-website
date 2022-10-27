import Container from "./Container/Container";
import { COLOURS } from "../styles";

const Section = ({ children, className, style, light }) => (
  <div
    className={className}
    style={{
      backgroundColor: light ? COLOURS.white : COLOURS.darkerGrey,
      color: light ? COLOURS.black : COLOURS.white,
      ...style,
    }}
  >
    <Container>{children}</Container>
  </div>
);

export default Section;
