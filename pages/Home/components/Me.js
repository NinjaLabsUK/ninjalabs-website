import Link from "next/link";

import { COLOURS } from "../../../styles";

const Me = () => {
  return (
    <p>
      A software developer from Manchester, UK currently working at Booking.com.
      You can view my CV&nbsp;
      <Link href="/cv">
        <span style={{ cursor: "pointer", color: COLOURS.blue }}>here</span>
      </Link>
    </p>
  );
};

export default Me;
