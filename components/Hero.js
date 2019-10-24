import Card from "./Card";
import Container from "./Container";
import { COLOURS, SPACING } from "../styles";

export default () => (
  <div className="hero">
    <Container>
      <h1 className="hero__title">Kieran Chadwick</h1>
      <h2 className="hero__subtitle">
        Frontend Software Engineer - Booking.com
      </h2>

      <div className="hero__tech-stack">
        <img style={{ width: "100px" }} src="/react.png" />
        <img style={{ width: "100px" }} src="/node-logo.png" />
      </div>
    </Container>
    <style jsx>
      {`
        .hero {
          padding: ${SPACING.medium};
          background: ${COLOURS.darkGrey};
          background-size: 22px 22px;
        }

        .hero__title {
          color: ${COLOURS.white};
          margin: 0;
        }

        .hero__subtitle {
          color: ${COLOURS.white};
          font-size: 24px;
        }

        .hero__tech-stack {
          margin-top: ${SPACING.medium};
        }
      `}
    </style>
  </div>
);
