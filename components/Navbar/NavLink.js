import { Fragment } from "react";
import Link from "../ActiveLink";
import { SPACING, COLOURS } from "../../styles";

export default ({ title, href }) => (
  <Fragment>
    <Link href={href} activeClassName="active">
      <a className="link">{title}</a>
    </Link>
    <style jsx>{`
      .link {
        padding: ${SPACING.xs};
        text-decoration: none;
        color: ${COLOURS.darkGrey};
        margin-right: ${SPACING.sm};
      }

      .link:hover {
        color: ${COLOURS.black};
      }

      .active {
        color: ${COLOURS.primary};
        font-weight: bold;
      }
    `}</style>
  </Fragment>
);
