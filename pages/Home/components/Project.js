import { FaChevronRight } from "react-icons/fa";

import ExpandableImage from "../../../components/ExpandableImage";
import { COLOURS, FONT_SIZE, SPACING, BREAKPOINTS } from "../../../styles";

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

const Project = () => {
  return (
    <div className="project">
      <div className="project__main">
        <div className="project__thumbnail">
          <ExpandableImage imgSrc="img/rf2.png" />
        </div>
        <div className="project__description">
          <h2 className="project__title">Sim Racing Overlay</h2>
          <p style={{ color: COLOURS.white, fontSize: FONT_SIZE.large }}>
            Broadcasting overlay built in React. Integrates with OBS to provide
            viewers with a real-time race overview.
          </p>
          <ProjectLink
            text="View Project"
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
