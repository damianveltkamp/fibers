import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      DVBlue: "#1f2937",
      DVOrange: "#efa35d",
      white: "#ffffff",
      black: "#000000",
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
      paragraph: "Roboto-Regular",
      timer: "Roboto-Regular",
      tag: "Roboto-Regular",
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
      paragraph: "1rem",
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
      paragraph: "",
      timer: "",
      tag: "",
    },
    lineHeights: {
      headings: "150%",
      paragraph: "150%",
      timer: "150%",
      tag: "150%",
    },
    radii: {
      primary: "8px",
    },
    transitions: {
      primary: "250ms ease-in-out",
    },
  },
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
