import { createStitches } from "@stitches/react";
import { gray } from "@radix-ui/colors";

export const theme = {
  colors: {
    DVBlue: "#1f2937",
    DVOrange: "#efa35d",
    white: "#ffffff",
    black: "#000000",
    ...gray,
  },
  fonts: {
    mobileH1: "Roboto-Bold",
    mobileH2: "Roboto-Bold",
    mobileH3: "Roboto-Medium",
    mobileH4: "Roboto-Medium",
    desktopH1: "Roboto-Bold",
    desktopH2: "Roboto-Bold",
    desktopH3: "Roboto-Medium",
    desktopH4: "Roboto-Medium",
    body: "Roboto-Regular",
  },
  fontSizes: {
    gobal: "18px",
    mobileH1: "1.953rem",
    mobileH2: "1.563rem",
    mobileH3: "1.25rem",
    mobileH4: "1rem",
    desktopH1: "2.441rem",
    desktopH2: "1.953rem",
    desktopH3: "1.563rem",
    desktopH4: "1.25rem",
    body: "1rem",
    timer: "1rem",
    tag: "0.65rem",
  },
  fontWeights: {
    mobileH1: "",
    mobileH2: "",
    mobileH3: "",
    mobileH4: "",
    desktopH1: "",
    desktopH2: "",
    desktopH3: "",
    desktopH4: "",
    body: "",
    timer: "",
    tag: "",
  },
  lineHeights: {
    headings: "150%",
    body: "150%",
    timer: "150%",
    tag: "150%",
  },
  radii: {
    primary: "4px",
  },
  transitions: {
    primary: "250ms ease-in-out",
  },
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "40px",
    10: "56px",
    11: "64px",
    12: "80px",
    13: "96px",
    14: "120px",
  },
};
export const { styled, css } = createStitches({
  theme: { ...theme },
  media: {
    minMobile: "(min-width: 30em)",
    maxMobile: "(max-width: 30em)",
    betweenMobileTablet: "(min-width: 30em) and (max-width: 48em)",
    betweenMobileLaptop: "(min-width: 30em) and (max-width: 64em)",
    betweenMobileDesktop: "(min-width: 30em) and (max-width: 80em)",

    minTablet: "(min-width: 48em)",
    maxTablet: "(min-width: 48em)",
    betweenTabletLaptop: "(min-width: 48em) and (max-width: 64em)",
    betweenTabletDesktop: "(min-width: 48em) and (max-width: 80em)",

    minLaptop: "(min-width: 64em)",
    maxLaptop: "(max-width: 64em)",
    betweenLaptopDesktop: "(min-width: 64em) and (max-width: 80em)",

    minDesktop: "(min-width: 80em)",
    maxDesktop: "(max-width: 80em)",
  },
});
