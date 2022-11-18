import * as NextImage from "next/image";
import { Parameters, DecoratorFn } from "@storybook/react";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "DVBlue",
    values: [
      {
        name: "DVBlue",
        value: "#1f2937",
      },
    ],
  },
};

export const decorators: DecoratorFn[] = [(Story) => <Story />];
