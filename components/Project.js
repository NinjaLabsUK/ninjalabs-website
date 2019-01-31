import { BORDER_RADIUS, SPACING } from "../styles";

export default ({ title, description, image }) => (
  <div className="container">
    <div className="image-container">
      <img src={image} className="image" />
    </div>
    <div className="about-container">
      <h3 className="title">{title}</h3>
      <p>{description}</p>
    </div>

    <style jsx>
      {`
        .container {
          display: flex;
          flex-wrap: wrap;
        }

        .image-container {
          padding: ${SPACING.md};
        }

        .image {
          max-width: 350px;
          border-radius: ${BORDER_RADIUS};
        }

        .about-container {
          padding: ${SPACING.md};
        }

        .title {
          margin: 0;
        }
      `}
    </style>
  </div>
);
