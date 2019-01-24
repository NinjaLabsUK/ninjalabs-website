import {
  COLOURS,
  SHADOWS,
  BORDER_RADIUS,
  SPACING,
  CARD_SIZES
} from "../styles";

export default ({ children, title, size = "md" }) => (
  <div className="card">
    <h2 className="card-title">{title}</h2>
    {children}
    <style jsx>
      {`
        .card {
          box-shadow: ${SHADOWS.medium};
          background-color: ${COLOURS.white};
          border-radius: ${BORDER_RADIUS};
          padding: ${SPACING.md};
          max-width: ${CARD_SIZES[size]};
        }

        .card-title {
          margin: 0;
        }
      `}
    </style>
  </div>
);
