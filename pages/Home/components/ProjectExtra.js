import { useState } from "react";

import FastestLap from "./FastestLap";
import {
  COLOURS,
  FONT_SIZE,
  SPACING,
  BREAKPOINTS,
  BORDER_RADIUS,
  SHADOWS,
} from "../../../styles";

const ProjectExtra = () => {
  const [animationKey, setAnimationKey] = useState(1);

  const onReplay = () => {
    setAnimationKey(animationKey + 1);
  };

  return (
    <div className="project-extra">
      <div style={{ flexShrink: 0, flexBasis: "520px" }}>
        <h2>Built with Framer Motion</h2>

        <p className="project-extra__description">
          Position changes and fastest lap animated with Framer Motion to keep
          the viewer up to date.
        </p>

        <div className="project-extra__showcase">
          <FastestLap
            key={`fastest-lap-anim-${animationKey}`}
            firstName="Kieran"
            lastName="Chadwick"
            lapTime="1:24.543"
          />
        </div>

        <span onClick={onReplay} className="project-extra__replay">
          Replay animation
        </span>
      </div>
      <style jsx>{`
        .project-extra {
          margin: 40px 0;
          max-width: 100%;
          display: flex;
          align-items: center;
        }

        .project-extra__description {
          font-size: ${FONT_SIZE.large};
          margin-bottom: ${SPACING.larger};
        }

        .project-extra__showcase {
          transform-origin: 0 0;
          margin-bottom: ${SPACING.small};
        }

        .project-extra__replay {
          cursor: pointer;
          font-size: ${FONT_SIZE.smaller};
          color: ${COLOURS.blue};
        }

        @media (max-width: ${BREAKPOINTS.tablet}) {
          .project-extra {
            display: block;
            margin: ${SPACING.larger} 0;
          }

          .project-extra__img-container {
            display: none;
          }

          /*  .project-extra__showcase {
              transform: scale(0.7);
            } */
        }

        @media (max-width: ${BREAKPOINTS.mobile}) {
          .project-extra {
            margin: 0;
          }

          .project-extra__showcase {
            transform: scale(0.7);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectExtra;
