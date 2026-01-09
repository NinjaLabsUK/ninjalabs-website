"use client";

import { PropsWithChildren, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface RevealProps {
  title: string;
}

const Reveal = ({ title, children }: PropsWithChildren<RevealProps>) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => setShow(!show)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          cursor: "pointer",
          paddingInlineStart: 2,
          paddingInlineEnd: 2,
        }}
      >
        {show ? <FaAngleUp /> : <FaAngleDown />}
        {title}
      </button>
      {show ? <div style={{ paddingInlineStart: 16 }}>{children}</div> : null}
    </>
  );
};

export default Reveal;
