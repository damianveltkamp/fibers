import { Story } from "@storybook/react";
import { headerData } from "../../components/Header/__test__/data/header";
import { MainLayout, MainLayoutProps } from "./MainLayout";

const storyConfig = {
  title: "Layouts/MainLayout",
  component: MainLayout,
  argTypes: {},
};

export const mainLayout: Story<MainLayoutProps> = () => {
  return <MainLayout headerProps={headerData}>Content</MainLayout>;
};

export default storyConfig;
