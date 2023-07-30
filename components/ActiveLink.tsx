"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  activeClassName?: string;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({ children, ...props }) => {
  const pathname = usePathname();

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
