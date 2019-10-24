import { COLOURS, SPACING, BORDER_RADIUS, FONT_SIZE } from "../styles";

const Badge = ({ text }) => (
  <>
    <span className="badge">{text}</span>
    <style jsx>{`
      .badge {
        background-color: ${COLOURS.primary};
        color: ${COLOURS.white};
        padding: ${SPACING.smaller} ${SPACING.small};
        border-radius: ${BORDER_RADIUS};
        margin-right: ${SPACING.smaller};
        margin-bottom: ${SPACING.smaller};
        white-space: nowrap;
        font-size: ${FONT_SIZE.small};
      }
    `}</style>
  </>
);

export default Badge;
