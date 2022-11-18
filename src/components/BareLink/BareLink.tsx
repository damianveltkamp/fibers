import NextLink from "next/link";
import { HTMLAttributes } from "react";

import { SC_BareLink } from "./BareLink.styles";

export type BareLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  isExternal?: boolean;
};

export const BareLink = ({
  href,
  children,
  isExternal,
  ...props
}: BareLinkProps) => {
  return isExternal ? (
    <SC_BareLink href={href} {...props}>
      {children}
    </SC_BareLink>
  ) : (
    <NextLink href={href} passHref={true}>
      <SC_BareLink {...props}> {children}</SC_BareLink>
    </NextLink>
  );
};
