import { Story } from "@storybook/react";
import { Header, HeaderProps } from "./Header";
import { headerData } from "./__test__/data/header";

const storyConfig = {
  title: "Components/Header",
  component: Header,
  argTypes: {},
};

export const header: Story<HeaderProps> = () => {
  return <Header {...headerData} />;
};

export default storyConfig;
