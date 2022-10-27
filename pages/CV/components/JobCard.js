import Button from "../../../components/Button/Button";
import {
  SPACING,
  SHADOWS,
  FONT_SIZE,
  COLOURS,
  BREAKPOINTS,
} from "../../../styles";

const JobCard = ({
  companyName,
  position,
  description,
  colour,
  onMoreClick,
}) => (
  <div className="job-card">
    <div className="job-card__wrapper">
      <div className="job-card__content">
        <h3 className="job-card__title">{companyName}</h3>
        <p className="job-card__subtitle">{position}</p>

        <p className="job-card__description">{description}</p>
      </div>

      <div className="job-card__actions">
        <Button text="Read more" onClick={onMoreClick} variant="link" />
      </div>
    </div>

    <style jsx>{`
      .job-card {
        box-shadow: ${SHADOWS.light};
        width: 280px;
        height: 290px;
        padding: ${SPACING.medium};
        margin: 0 ${SPACING.small};
        display: inline-block;
        white-space: normal;
        vertical-align: top;
        border-bottom: 4px solid ${colour};
        background-color: ${COLOURS.darkGrey};
      }

      .job-card:first-child {
        margin-left: 0;
      }

      @media (max-width: ${BREAKPOINTS.tablet}) {
        .job-card:first-child {
          margin-left: ${SPACING.large};
        }
      }

      .job-card__wrapper {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
      }

      .job-card__title {
        margin-bottom: ${SPACING.smaller} !important;
      }

      .job-card__subtitle {
        font-size: ${FONT_SIZE.small};
      }

      .job-card__description {
        font-size: ${FONT_SIZE.small};
      }
    `}</style>
  </div>
);

export default JobCard;
