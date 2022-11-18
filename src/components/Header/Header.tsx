import NextLink from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import {
  HeaderLogoLinkCSS,
  SC_Header,
  SC_HeaderMainNavigationContainer,
  SC_HeaderNavigationLI,
  SC_HeaderNavigationLink,
  SC_HeaderNavigationNav,
  SC_HeaderNavigationUL,
  SC_HeaderSocialNavigationLink,
} from "./Header.styles";
import { Logo } from "../../icons/components";
import { BareLink } from "../BareLink";

export type HeaderMenuItemProps = {
  title: string;
  href: string;
  subMenu?: HeaderMenuItemProps[];
};

export type HeaderSocialMenuItemProps = {
  icon: any;
  href: string;
};

export type HeaderProps = {
  menu: HeaderMenuItemProps[];
  socialsMenu: HeaderSocialMenuItemProps[];
};

const Link = ({ href, ...props }: any) => {
  return (
    <NextLink href={href} passHref>
      <SC_HeaderNavigationLink role="menuitem" {...props} />
    </NextLink>
  );
};

const SocialLink = ({ href, ...props }: any) => {
  return (
    <NextLink href={href} passHref>
      <SC_HeaderSocialNavigationLink role="menuitem" {...props} />
    </NextLink>
  );
};

export const Header = ({ menu, socialsMenu }: HeaderProps) => {
  return (
    <SC_Header>
      <SC_HeaderMainNavigationContainer>
        <BareLink
          aria-label="Website logo"
          href="/"
          className={HeaderLogoLinkCSS()}
        >
          <Logo size={40} />
        </BareLink>
        <SC_HeaderNavigationNav>
          <SC_HeaderNavigationUL role="menubar">
            {menu.map(({ href, title }) => (
              <SC_HeaderNavigationLI role="none">
                <Link href={href}>{title}</Link>
              </SC_HeaderNavigationLI>
            ))}
          </SC_HeaderNavigationUL>
        </SC_HeaderNavigationNav>
      </SC_HeaderMainNavigationContainer>
      {/* Social menu */}
      <SC_HeaderNavigationNav>
        <SC_HeaderNavigationUL role="menubar">
          {socialsMenu.map(({ href, icon: Icon }) => (
            <SC_HeaderNavigationLI role="none">
              <SocialLink href={href}>
                <Icon size={30} />
              </SocialLink>
            </SC_HeaderNavigationLI>
          ))}
        </SC_HeaderNavigationUL>
      </SC_HeaderNavigationNav>
    </SC_Header>
  );
};
