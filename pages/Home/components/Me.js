import Link from "next/link";

import { FONT_SIZE } from "../../../styles";

const Me = () => {
  return (
    <>
      <h2 style={{ fontSize: FONT_SIZE.large }}>About Me</h2>
      <p>
        A software developer from Manchester, UK currently working at
        Booking.com. You can view my CV&nbsp;
        <Link href="/cv">here</Link>
      </p>
    </>
  );
};

export default Me;
