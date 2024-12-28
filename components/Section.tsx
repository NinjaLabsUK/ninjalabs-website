import React from "react";

import Container from "./Container/Container";
import { COLOURS } from "../styles";

interface SectionProps {
  className?: string;
  light?: boolean;
}

const Section = ({
  children,
  className,
  light,
}: React.PropsWithChildren<SectionProps>) => (
  <div
    className={className}
    style={{
      backgroundColor: light ? COLOURS.white : COLOURS.darkerGrey,
      color: light ? COLOURS.black : COLOURS.white,
    }}
  >
    <Container>{children}</Container>
  </div>
);

export default Section;
