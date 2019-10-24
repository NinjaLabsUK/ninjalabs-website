import { CONTAINER_WIDTH, SPACING } from "../styles";

export default ({ fluid = false, padding = true, children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        width: 100%;
        max-width: ${fluid ? "100%" : CONTAINER_WIDTH};
        margin: 0 auto;
        padding: ${padding ? PADDING_STYLE : "0 0"};
      }
    `}</style>
  </div>
);

const PADDING_STYLE = `${SPACING.large} ${SPACING.large}`;
