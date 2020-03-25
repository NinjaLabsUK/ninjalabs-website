import Link from "next/link";

const NavLogo = () => (
  <div className="container">
    <Link href="/">
      <img className="image" src="/img/logo-white.svg" />
    </Link>
    <style jsx>
      {`
        .container {
          position: absolute;
          min-width: 400px;
          left: 0;
          right: 0;
          text-align: center;
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

export default NavLogo;
