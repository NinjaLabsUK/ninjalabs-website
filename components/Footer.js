import Container from "./Container";
import { COLOURS, FONT_SIZE, SPACING } from "../styles";

const Footer = () => (
  <footer className="footer">
    <Container>
      <img src="/img/logo-white-small.png" className="footer__logo" />
      <p>Some footer content here. some links to some shit idk</p>
      <p className="footer__copyright">© 2019 Keiran -_-.</p>
    </Container>
    <style jsx>{`
      .footer {
        background-color: ${COLOURS.darkerGrey};
        color: ${COLOURS.white};
      }

      .footer__logo {
        max-width: 180px;
        margin-bottom: ${SPACING.medium};
      }

      .footer__copyright {
        text-align: right;
        font-size: ${FONT_SIZE.smaller};
      }
    `}</style>
  </footer>
);

export default Footer;
