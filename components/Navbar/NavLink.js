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
        padding: ${SPACING.smaller};
        text-decoration: none;
        color: ${COLOURS.white};
        margin-right: ${SPACING.small};
      }

      .link:hover,
      .active {
        color: ${COLOURS.primary};
      }
    `}</style>
  </Fragment>
);
