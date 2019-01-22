import { Fragment } from "react";
import Link from "next/link";
import { SPACING, COLOURS } from "../../styles";

export default ({ title, href }) => (
  <Fragment>
    <Link href={href}>
      <a>{title}</a>
    </Link>
    <style jsx>{`
      a {
        padding: ${SPACING.xs};
        text-decoration: none;
        color: ${COLOURS.darkGrey};
        margin-right: ${SPACING.sm};
      }

      a:hover {
        color: ${COLOURS.black};
      }
    `}</style>
  </Fragment>
);
