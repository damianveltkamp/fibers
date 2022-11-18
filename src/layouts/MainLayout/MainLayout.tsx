import { HTMLAttributes } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header, HeaderProps } from "../../components/Header/Header";
import {
  SC_MainLayout,
  SC_MainLayoutContent,
  SC_MainLayoutFooter,
  SC_MainLayoutHeader,
  SC_MainLayoutMain,
} from "./MainLayout.styles";

export type MainLayoutProps = HTMLAttributes<HTMLElement> & {
  headerProps: HeaderProps;
};

export const MainLayout = ({ headerProps, children }: MainLayoutProps) => {
  return (
    <SC_MainLayout>
      <SC_MainLayoutHeader>
        <Header {...headerProps} />
      </SC_MainLayoutHeader>
      <SC_MainLayoutMain>
        <SC_MainLayoutContent>{children}</SC_MainLayoutContent>
      </SC_MainLayoutMain>
      <SC_MainLayoutFooter>
        <Footer />
      </SC_MainLayoutFooter>
    </SC_MainLayout>
  );
};
