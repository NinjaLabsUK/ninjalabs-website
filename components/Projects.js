import { COLOURS, SPACING } from "../styles";

export default () => (
  <div className="container">
    <h2>Projects</h2>
    <style jsx>
      {`
        .container {
          background-color: ${COLOURS.darkerGrey};
          color: ${COLOURS.white};
          padding: ${SPACING.sm};
        }

        h2 {
          text-align: center;
        }
      `}
    </style>
  </div>
);
