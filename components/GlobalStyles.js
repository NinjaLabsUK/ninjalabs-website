import { SPACING, COLOURS, FONT_SIZE } from "../styles";

const GlobalStyles = () => (
  <style jsx global>
    {`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: "Open Sans", sans-serif;
        height: 100%;
        overflow-x: hidden;
        background-color: ${COLOURS.darkerGrey};
      }

      div {
        box-sizing: border-box;
      }

      a {
        color: ${COLOURS.lightBlue};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
        font-family: "Bebas Neueu", sans-serif;
        letter-spacing: -1px;
      }

      h1 {
        font-size: ${FONT_SIZE.largest};
        margin-bottom: ${SPACING.medium};
      }

      h2 {
        font-size: ${FONT_SIZE.larger};
        margin-bottom: ${SPACING.medium};
      }

      h3 {
        font-size: ${FONT_SIZE.large};
        margin-bottom: ${SPACING.small};
      }

      p {
        margin-top: 0;
      }

      table {
        text-align: left;
        border-collapse: collapse;
        font-size: ${FONT_SIZE.medium};
      }

      th,
      td {
        border: 1px solid ${COLOURS.lightGrey};
        padding: ${SPACING.small} ${SPACING.medium};
      }
    `}
  </style>
);

export default GlobalStyles;
