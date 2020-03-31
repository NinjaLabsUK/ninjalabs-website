import { SPACING, COLOURS, FONT_SIZE } from "../styles";

export default () => (
  <style jsx global>
    {`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: "Open Sans", sans-serif;
        height: 100%;
      }

      div {
        box-sizing: border-box;
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
        font-size: 2.8rem;
        margin-bottom: ${SPACING.medium};
      }

      h2 {
        font-size: 2.2rem;
        margin-bottom: ${SPACING.medium};
      }

      h3 {
        font-size: 1.2rem;
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
