import Container from "./Container";
import { COLOURS } from "../styles";

const Section = ({ children, style, light }) => (
  <div
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
