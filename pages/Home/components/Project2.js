import { FaChevronRight } from "react-icons/fa";

import { SPACING, COLOURS, FONT_SIZE, BREAKPOINTS } from "../../../styles";

const ProjectLink = ({ text, href }) => (
  <a
    href={href}
    style={{
      color: COLOURS.primary,
      fontSize: FONT_SIZE.large,
      fontWeight: "bold",
      textDecoration: "none",
    }}
    target="_blank"
  >
    {text}
    <FaChevronRight size="14px" style={{ marginLeft: SPACING.smaller }} />
  </a>
);

const Project2 = () => {
  return (
    <div className="project2">
      <div className="project2__thumbnail">
        <img src="img/kwiz.png" style={{ maxWidth: "160px" }} />
      </div>

      <div className="project2__description">
        <h2 className="project__title">Kwizgame.com</h2>
        <p style={{ color: COLOURS.white, fontSize: FONT_SIZE.large }}>
          Host and manage a quiz or join and battle your friends with realtime
          leaderboards.
          <br />
          Build interesting and detailed quizzes with text input or multiple
          choice questions.
        </p>
        <ProjectLink href="http://kwizgame.com" text="Check it out!" />
      </div>

      <style jsx>{`
        .project2 {
          margin: ${SPACING.larger} 0;
          width: 100%;
          display: flex;
          align-items: center;
        }

        .project__title {
          color: ${COLOURS.white};
          font-weight: bold;
        }

        .project2__thumbnail {
          flex: 0 0 400px;
          text-align: center;
        }

        .project2__description {
          padding: ${SPACING.larger};
        }

        @media (max-width: ${BREAKPOINTS.tablet}) {
          .project2__thumbnail {
            display: none;
          }

          .project2__description {
            padding: ${SPACING.larger} 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Project2;
