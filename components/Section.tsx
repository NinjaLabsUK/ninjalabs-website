import React from "react";

import Container from "./Container/Container";

interface SectionProps {
  className?: string;
}

const Section = ({
  children,
  className,
}: React.PropsWithChildren<SectionProps>) => (
  <div className={className}>
    <Container>{children}</Container>
  </div>
);

export default Section;
