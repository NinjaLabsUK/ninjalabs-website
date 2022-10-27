import { FaChevronRight } from "react-icons/fa";

import Button from "../../../components/Button/Button";
import { SPACING, COLOURS, FONT_SIZE, BREAKPOINTS } from "../../../styles";

const Project2 = () => {
  return (
    <div className="project2">
      <div className="project2__thumbnail">
        <img
          src="img/kwiz.png"
          alt="Online quiz app"
          style={{ maxWidth: "160px" }}
        />
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
        <Button
          text="Check it out!"
          href="https://kwizgame.com"
          variant="tertiary"
          size="large"
          endSlot={<FaChevronRight size="14px" />}
        />
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
