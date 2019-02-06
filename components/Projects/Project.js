import Dynamic from "next/dynamic";
import Link from "next/link";
import { BORDER_RADIUS, SPACING, COLOURS } from "../../styles";

export default ({ id, title, description, image }) => {
  const Description = Dynamic(() => import(`../../md/${id}/preview.mdx`));
  return (
    <div className="container">
      <div className="image-container">
        <img src={image} className="image" />
      </div>
      <div className="about-container">
        <h3 className="title">{title}</h3>
        <Description />

        <Link href={`/post?id=${id}`} as={`/post/${id}`}>
          <a className="more-link">Read more</a>
        </Link>
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }

          .image-container {
            flex: 0 300px;
          }

          .image {
            max-width: 100%;
            border-radius: ${BORDER_RADIUS};
          }

          .about-container {
            padding: ${SPACING.md};
            flex: 1 400px;
          }

          .title {
            margin: 0;
          }

          .more-link {
            color: ${COLOURS.lightGrey};
          }
        `}
      </style>
    </div>
  );
};
