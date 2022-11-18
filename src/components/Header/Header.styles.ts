import { styled } from "../../theme/theme";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { css } from "@stitches/react";

export const SC_Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "$12",
  paddingBlock: "$5",
});

export const HeaderLogoLinkCSS = css({
  display: "block",

  "&:focus": {
    outline: "2px solid $DVOrange",
  },
});

export const SC_HeaderMainNavigationContainer = styled("div", {
  display: "flex",
  gap: "$9",
});

export const SC_HeaderNavigationNav = styled(NavigationMenu.Root, {
  display: "flex",
  alignItems: "center",
});
export const SC_HeaderNavigationUL = styled(NavigationMenu.List, {
  display: "flex",
  gap: "$3",
  margin: "0",
  padding: "0",
  listStyle: "none",
});

export const SC_HeaderNavigationLI = styled(NavigationMenu.Item, {});

export const SC_HeaderNavigationLink = styled(NavigationMenu.Link, {
  paddingBlock: "$1",
  paddingInline: "$3",
  textDecoration: "none",
  fontFamily: "$body",
  fontSize: "$body",
  fontWeight: "$body",
  borderRadius: "$primary",
  color: "$white",

  "&:hover": {
    backgroundColor: "$DVOrange",
    color: "$black",
  },

  "&:focus": {
    outline: "2px solid $DVOrange",
  },
});

export const SC_HeaderSocialNavigationLink = styled(NavigationMenu.Link, {
  display: "block",

  "&:focus": {
    outline: "2px solid $DVOrange",
  },
});
