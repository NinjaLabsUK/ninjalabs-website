import { COLOURS, SPACING } from "../styles";

export default () => (
  <section className="hero">
    <h1>Frontend Engineer</h1>
    <div className="tech-stack">
      <img style={{ width: "100px" }} src="/react.png" />
      <img style={{ width: "100px" }} src="/node-logo.png" />
    </div>
    <style jsx>
      {`
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          min-height: 350px;
          padding: ${SPACING.md};
          background: linear-gradient(
                90deg,
                ${COLOURS.darkerGrey} 20px,
                transparent 1%
              )
              center,
            linear-gradient(${COLOURS.darkerGrey} 20px, transparent 1%) center,
            ${COLOURS.darkGrey};
          background-size: 22px 22px;
        }

        h1 {
          margin: 0;
          text-align: center;
          color: ${COLOURS.white};
          display: block;
          margin-bottom: ${SPACING.sm};
        }

        .tech-stack {
          margin-top: ${SPACING.md};
        }
      `}
    </style>
  </section>
);
