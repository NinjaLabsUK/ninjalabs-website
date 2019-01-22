import { COLOURS, SHADOWS } from "../styles";

export default () => (
  <header>
    <div>Header</div>
    <style jsx>{`
      header {
        height: 75px;
        background-color: ${COLOURS.white};
        box-shadow: ${SHADOWS.light};
      }
    `}</style>
  </header>
);
