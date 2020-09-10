import { SHADOWS, COLOURS, SPACING } from "../../../styles";
import Container from "../../../components/Container";

const Sabre = () => {
  return (
    <section style={{ position: "relative" }}>
      <div className="overlay">
        <Container>
          <h2>Proud sponsor of Sabre Racing</h2>
          <p>Currently competing in iRacing endurance events</p>
          <img
            src="img/iracing-logo.svg"
            style={{ maxWidth: "120px", marginRight: SPACING.small }}
          />
          <img src="img/sabre-logo.png" style={{ maxWidth: "90px" }} />
        </Container>
      </div>

      <img
        src="img/sabre-daytona-compressed.jpg"
        className="background-image"
        alt="iRacing LMP2 car"
      />

      <style jsx>{`
        .overlay {
          position: absolute;
          right: 0;
          left: 0;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          color: ${COLOURS.white};
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .background-image {
          display: block;
          max-width: 100%;
          box-shadow: ${SHADOWS.light};
          min-height: 400px;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
};

export default Sabre;
