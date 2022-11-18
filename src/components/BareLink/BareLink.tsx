import NextLink from "next/link";
import { HTMLAttributes } from "react";

import { SC_BareLink } from "./BareLink.styles";

export type BareLinkProps = HTMLAttributes<HTMLLinkElement> & {
  href: string;
  isExternal?: boolean;
};

export const BareLink = ({
  href,
  children,
  className,
  isExternal,
}: BareLinkProps) => {
  return isExternal ? (
    <SC_BareLink href={href} className={className}>
      {children}
    </SC_BareLink>
  ) : (
    <NextLink href={href} passHref={true}>
      <SC_BareLink className={className}>{children}</SC_BareLink>
    </NextLink>
  );
};
