import { CSS } from "@stitches/react";
import { HTMLAttributes } from "react";
import { SC_Typography } from "./Typography.styles";

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "time";
  typography?: "h1" | "h2" | "h3" | "h4" | "body" | "timer" | "tag";
  variant?: "white" | "black" | "DVOrange" | "DVBlue";
  css?: CSS;
};

export const Typography = ({
  as = "p",
  typography = "body",
  variant = "white",
  children,
  css,
  ...props
}: TypographyProps) => {
  return (
    <SC_Typography
      as={as}
      variant={variant}
      typography={typography}
      css={css}
      {...props}
    >
      {children}
    </SC_Typography>
  );
};
