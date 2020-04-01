import Container from "./Container";
import { COLOURS, FONT_SIZE, SPACING } from "../styles";

const Footer = () => (
  <footer className="footer">
    <Container>
      <p className="footer__copyright">© 2020 Kieran</p>
    </Container>
    <style jsx>{`
      .footer {
        background-color: ${COLOURS.darkerGrey};
        color: ${COLOURS.white};
      }

      .footer__copyright {
        text-align: right;
        font-size: ${FONT_SIZE.smaller};
      }
    `}</style>
  </footer>
);

export default Footer;
