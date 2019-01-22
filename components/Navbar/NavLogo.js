import Link from "next/link";

export default () => (
  <div className="container">
    <Link>
      <img className="image" src="/static/logo.svg" />
    </Link>
    <style jsx>
      {`
        .container {
          position: absolute;
          width: 100%;
          text-align: center;
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
