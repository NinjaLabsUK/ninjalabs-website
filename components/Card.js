import {
  COLOURS,
  SHADOWS,
  BORDER_RADIUS,
  SPACING,
  BREAKPOINTS
} from "../styles";

const Card = ({ children, title, dark = false }) => (
  <div className={`card ${dark && "card--dark"}`}>
    {title && <h2 className="card-title">{title}</h2>}
    {children}
    <style jsx>
      {`
        .card {
          box-shadow: ${SHADOWS.light};
          background-color: ${COLOURS.white};
          border-radius: ${BORDER_RADIUS};
          padding: ${SPACING.larger};
          max-width: 100%;
        }

        @media (max-width: ${BREAKPOINTS.mobile}) {
          .card {
            padding: ${SPACING.large};
          }
        }

        .card--dark {
          background-color: ${COLOURS.darkerGrey};
          color: ${COLOURS.white};
        }

        .card-title {
          margin-top: 0;
          margin-bottom: ${SPACING.medium};
        }
      `}
    </style>
  </div>
);

export default Card;
