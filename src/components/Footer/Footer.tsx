import { Typography } from "../Typography";
import { SC_Footer } from "./Footer.styles";

export type FooterProps = {};

export const Footer = () => {
  return (
    <SC_Footer>
      <Typography as="p" typography="body" variant="black">
        Thanks for visiting 🖤
      </Typography>
    </SC_Footer>
  );
};
