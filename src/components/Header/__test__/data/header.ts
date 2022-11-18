import GithubBrands from "../../../../icons/components/GithubBrands";
import {
  HeaderMenuItemProps,
  HeaderProps,
  HeaderSocialMenuItemProps,
} from "../../Header";

const menu: HeaderMenuItemProps[] = [
  {
    title: "Projects",
    href: "#",
  },
  {
    title: "Services",
    href: "#",
    subMenu: [
      {
        title: "Tutoring",
        href: "#",
      },
      {
        title: "Consulting",
        href: "#",
      },
    ],
  },
  {
    title: "About me",
    href: "#",
  },
];

const socialsMenu: HeaderSocialMenuItemProps[] = [
  {
    icon: GithubBrands,
    href: "#",
  },
];

export const headerData: HeaderProps = {
  menu,
  socialsMenu,
};
