import Container from "./Container/Container";
import { COLOURS, FONT_SIZE } from "../styles";

const Footer = () => (
  <footer className="footer">
    <Container>
      <p className="footer__copyright">Built by Kieran Chadwick</p>
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
