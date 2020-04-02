import { COLOURS, BORDER_RADIUS, SPACING, FONT_SIZE } from "../styles";

const Button = ({ text, onClick = () => null, variant = "default" }) => (
  <>
    <button className={`button button--${variant}`} onClick={onClick}>
      {text}
    </button>
    <style jsx>{`
      .button {
        border-radius: ${BORDER_RADIUS};
        padding: ${SPACING.small} ${SPACING.large};
        font-size: ${FONT_SIZE.small};
        cursor: pointer;
        border: none;
        background: none;
      }

      .button--default {
        background-color: ${COLOURS.primary};
      }

      .button--default:hover {
        background-color: ${COLOURS.primaryDark};
      }

      .button--link {
        padding: 0;
        color: ${COLOURS.blue};
      }

      .button--link:hover {
        text-decoration: underline;
      }
    `}</style>
  </>
);

export default Button;
