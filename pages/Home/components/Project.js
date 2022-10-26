import { FaChevronRight } from "react-icons/fa";

import Button from "../../../components/Button/Button";
import ExpandableImage from "../../../components/ExpandableImage";
import { COLOURS, FONT_SIZE, SPACING, BREAKPOINTS } from "../../../styles";

const Project = () => {
  return (
    <div className="project">
      <div className="project__main">
        <div className="project__thumbnail">
          <ExpandableImage src="img/rf2.jpg" alt="rFactor racing simulator" />
        </div>
        <div className="project__description">
          <h2 className="project__title">Sim Racing Overlay</h2>
          <p style={{ color: COLOURS.white, fontSize: FONT_SIZE.large }}>
            Broadcasting overlay built in React. Integrates with OBS to provide
            viewers with a real-time race overview.
          </p>
          <Button
            text="View Project"
            variant="tertiary"
            size="large"
            endSlot={<FaChevronRight size="14px" />}
            href="https://rf2.ninja-labs.co.uk"
          />
        </div>
      </div>

      <style jsx>{`
        .project {
          margin-bottom: ${SPACING.largest};
        }

        .project__main {
          display: flex;
          align-items: center;
        }

        .project__thumbnail {
          flex: 0 0 430px;
        }

        .project__description {
          padding: ${SPACING.larger};
        }

        .project__title {
          color: ${COLOURS.primary};
          font-weight: bold;
        }

        @media (max-width: ${BREAKPOINTS.tablet}) {
          flex-direction: column-reverse;

          .project__thumbnail {
            flex: 1;
          }

          .project__description {
            padding: ${SPACING.larger} 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Project;
