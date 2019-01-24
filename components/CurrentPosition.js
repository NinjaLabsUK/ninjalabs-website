import { COLOURS, SPACING } from "../styles";
import bookingGo from "../static/bookinggo.png";

export default () => (
  <div className="container">
    <h2>Current Position</h2>
    <h3>Frontend Software Engineer</h3>
    <p>
      Currently working on Booking.com Taxis at BookingGo in Manchester. Mainly
      dealing with React and NodeJS.
    </p>
    <div style={{ textAlign: "right" }}>
      <img src={bookingGo} />
    </div>
    <style jsx>
      {`
        .container {
          padding: ${SPACING.md};
        }

        h2 {
          margin: 0;
        }

        h3 {
          margin: 0 0 ${SPACING.md} 0;
          color: ${COLOURS.grey};
        }

        p {
          color: ${COLOURS.grey};
        }

        img {
          width: 140px;
        }
      `}
    </style>
  </div>
);
