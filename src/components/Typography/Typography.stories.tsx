import { Story } from "@storybook/react";
import { Typography, TypographyProps } from "./Typography";

const storyConfig = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    as: {
      defaultValue: "p",
      description:
        "Describes what html tag the typography component should be.",
    },
    typography: {
      defaultValue: "paragraph",
      description: "Describes what the typography should look like.",
    },
  },
};

export const typography: Story<TypographyProps> = ({
  as,
  variant,
  typography,
}) => {
  return (
    <Typography as={as} variant={variant} typography={typography}>
      Typography component
    </Typography>
  );
};

export default storyConfig;
