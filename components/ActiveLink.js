import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ router, children, ...props }) => {
  const { pathname } = useRouter();
  let className = props.className || "";
  if (pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
};

export default ActiveLink;
