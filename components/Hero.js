import CurrentPosition from "./CurrentPosition";
import { COLOURS, SPACING } from "../styles";
import reactLogo from "../static/react.png";
import nodeLogo from "../static/node-logo.png";
import angularLogo from "../static/angular-logo.png";

export default () => (
  <section className="hero">
    <h1>Freelance Developer</h1>
    <div className="tech-stack">
      <img style={{ width: "100px" }} src={reactLogo} />
      <img style={{ width: "100px" }} src={nodeLogo} />
      <img style={{ width: "65px", margin: "6px 10px" }} src={angularLogo} />
    </div>
    <style jsx>
      {`
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          min-height: 350px;
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

          font-size: 2.4rem;
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
