import { styled } from "../../theme/theme";

export const SC_Typography = styled("p", {
  margin: "0",
  color: "$white",

  variants: {
    variant: {
      white: {
        color: "$white",
      },
      black: {
        color: "$black",
      },
      DVBlue: {
        color: "$DVBlue",
      },
      DVOrange: {
        color: "$DVOrange",
      },
    },
    typography: {
      h1: {
        fontSize: "$mobileH1",
        fontFamily: "$mobileH1",
        fontWeight: "$mobileH1",
        lineHeight: "$mobileH1",

        "@minTablet": {
          fontSize: "$desktopH1",
          fontFamily: "$desktopH1",
          fontWeight: "$desktopH1",
          lineHeight: "$desktopH1",
        },
      },
      h2: {
        fontSize: "$mobileH2",
        fontFamily: "$mobileH2",
        fontWeight: "$mobileH2",
        lineHeight: "$mobileH2",

        "@minTablet": {
          fontSize: "$desktopH2",
          fontFamily: "$desktopH2",
          fontWeight: "$desktopH2",
          lineHeight: "$desktopH2",
        },
      },
      h3: {
        fontSize: "$mobileH3",
        fontFamily: "$mobileH3",
        fontWeight: "$mobileH3",
        lineHeight: "$mobileH3",

        "@minTablet": {
          fontSize: "$desktopH3",
          fontFamily: "$desktopH3",
          fontWeight: "$desktopH3",
          lineHeight: "$desktopH3",
        },
      },
      h4: {
        fontSize: "$mobileH4",
        fontFamily: "$mobileH4",
        fontWeight: "$mobileH4",
        lineHeight: "$mobileH4",

        "@minTablet": {
          fontSize: "$desktopH4",
          fontFamily: "$desktopH4",
          fontWeight: "$desktopH4",
          lineHeight: "$desktopH4",
        },
      },
      body: {
        fontSize: "$body",
        fontFamily: "$body",
        fontWeight: "$body",
        lineHeight: "$body",
      },
      timer: {
        fontSize: "$timer",
        fontFamily: "$timer",
        fontWeight: "$timer",
        lineHeight: "$timer",
      },
      tag: {
        fontSize: "$tag",
        fontFamily: "$tag",
        fontWeight: "$tag",
        lineHeight: "$tag",
      },
    },
  },
});
