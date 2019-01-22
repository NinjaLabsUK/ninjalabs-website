import Link from "next/link";
import { SPACING } from "../../styles";

export default () => (
  <Link>
    <a style={{ padding: `0 ${SPACING.sm}` }}>Link</a>
  </Link>
);
