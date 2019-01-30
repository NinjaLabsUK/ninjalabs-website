import { COLOURS, SPACING } from "../styles";

export default () => (
  <div className="container">
    <div className="aboutme-container">
      <h2>Background</h2>
      <p>My name’s Kieran and I’m a frontend developer from Manchester, UK.</p>
      <p>
        I've been a developer for about 4 and a half years. I started off as an
        apprentice after I finished college in 2014 and since then I've been
        able to work my way to a much bigger team at Booking.com Taxis.
      </p>
      <p>My strongest skills include:</p>
      <ul>
        <li>React</li>
        <li>Angular & Typescript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>AWS Lambda + Serverless</li>
        <li>MongoDB</li>
      </ul>
    </div>

    <div className="current-position-container">
      <h2>Current Position</h2>
      <h3>Frontend Software Engineer</h3>
      <p className="current-position-text">
        Currently working on Booking.com Taxis at BookingGo in Manchester.
        Primarily workink with React and NodeJS.
      </p>
      <img className="current-position-image" src="/static/bookinggo.png" />
    </div>

    <style jsx>
      {`
        .container {
          padding: ${SPACING.md};
          display: flex;
          flex-wrap: wrap;
        }

        h2 {
          margin: 0;
        }

        h3 {
          margin: 0 0 ${SPACING.md} 0;
        }

        .aboutme-container {
          flex: 3;
          padding: ${SPACING.md};
        }

        .current-position-container {
          flex: 2;
          padding: ${SPACING.md};
        }

        .current-position-text {
          color: ${COLOURS.grey};
        }

        .current-position-image {
          width: 140px;
        }
      `}
    </style>
  </div>
);
