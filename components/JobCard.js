import { SPACING, SHADOWS, FONT_SIZE } from "../styles";

const JobCard = ({ companyName, position, description, colour }) => (
  <div className="job-card">
    <h3 className="job-card__title">{companyName}</h3>
    <p className="job-card__subtitle">{position}</p>

    <p className="job-card__description">{description}</p>

    <style jsx>{`
      .job-card {
        box-shadow: ${SHADOWS.light};
        width: 280px;
        height: 240px;
        padding: ${SPACING.medium};
        margin: ${SPACING.medium} ${SPACING.small};
        display: inline-block;
        white-space: normal;
        vertical-align: top;
        border-bottom: 4px solid ${colour};
      }

      .job-card__title {
        margin-bottom: ${SPACING.smaller} !important;
      }

      .job-card__subtitle {
        font-size: ${FONT_SIZE.medium};
      }

      .job-card__description {
        font-size: ${FONT_SIZE.small};
      }
    `}</style>
  </div>
);

export default JobCard;
