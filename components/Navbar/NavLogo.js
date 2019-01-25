import Link from "next/link";
import { CONTAINER_WIDTH } from "../../styles";
export default () => (
  <div className="container">
    <Link href="/">
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

        @media only screen and (max-width: 480px) {
          .container {
            display: none;
          }
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
