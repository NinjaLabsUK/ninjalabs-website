import Link from "next/link";
import { BORDER_RADIUS, SPACING, COLOURS, FONT_SIZE } from "../../styles";

const ProjectCard = ({ id, title, image }) => {
  return (
    <div className="project-card">
      <div className="title-container">
        <h3 className="title">{title}</h3>
        10th October 2019
      </div>
      <div className="image-container">
        <img src={image} className="image" />
      </div>

      {/* <Link href={`/post?id=${id}`} as={`/post/${id}`}>
          <a className="more-link">Read more</a>
        </Link> */}

      <style jsx>
        {`
          .project-card {
            flex-wrap: wrap;
            background-color: ${COLOURS.darkerGrey};
            border-radius: ${BORDER_RADIUS};
            max-width: 300px;
            position: relative;
          }

          .project-card:hover {
            cursor: pointer;
            opacity: 0.8;
          }

          .project-card:hover .title-container {
            opacity: 0.8;
          }

          .image-container {
            flex: 0 280px;
          }

          .image {
            border-radius: ${BORDER_RADIUS};
            max-width: 100%;
            display: block;
          }

          .about-container {
            padding: ${SPACING.medium};
            flex: 0 1 300px;
          }

          .title-container {
            background: black;
            position: absolute;
            width: 100%;
            height: 100%;
            padding: ${SPACING.large} ${SPACING.medium};
            opacity: 0;
            transition: opacity 0.3s;
          }

          .title {
            font-size: ${FONT_SIZE.large};
            margin-bottom: ${SPACING.small};
          }
        `}
      </style>
    </div>
  );
};

export default ProjectCard;
