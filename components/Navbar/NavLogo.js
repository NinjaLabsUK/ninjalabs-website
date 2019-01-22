import Link from "next/link";
import { CONTAINER_WIDTH } from "../../styles";
export default () => (
  <div className="container">
    <Link>
      <img className="image" src="/static/logo.svg" />
    </Link>
    <style jsx>
      {`
        .container {
          position: absolute;
          text-align: center;
          width: 100%;
          max-width: ${CONTAINER_WIDTH};
        }

        .image {
          max-width: 175px;
        }

        .image:hover {
          cursor: pointer;
        }
      `}
    </style>
  </div>
);
