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
        padding: ${SPACING.xs} ${SPACING.sm};
        text-decoration: none;
        color: ${COLOURS.darkGrey};
        border-radius: 4px;
      }

      a:hover {
        color: ${COLOURS.black};
      }
    `}</style>
  </Fragment>
);
