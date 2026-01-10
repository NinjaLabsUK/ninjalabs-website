"use client";

import { PropsWithChildren, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Button from "../../../components/Button/Button";

interface RevealProps {
  title: string;
}

const Reveal = ({ title, children }: PropsWithChildren<RevealProps>) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        onClick={() => setShow(!show)}
        text={title}
        endSlot={show ? <FaAngleUp /> : <FaAngleDown />}
      />

      {show ? <div style={{ paddingInlineStart: 16 }}>{children}</div> : null}
    </>
  );
};

export default Reveal;
