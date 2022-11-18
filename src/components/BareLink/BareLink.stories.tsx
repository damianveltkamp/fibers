import { Story } from "@storybook/react";

import { BareLink, BareLinkProps } from "./BareLink";

const storyConfig = {
  title: "Components/BareLink",
  component: BareLink,
  argTypes: {
    href: {
      description: "Defines the link to which should be redirected.",
    },
    isExternal: {
      description: "Indicates if the link is an inbound or outbound link.",
    },
  },
};

export const bareLink: Story<BareLinkProps> = () => {
  return <BareLink href="#Link">Hey</BareLink>;
};

export default storyConfig;
