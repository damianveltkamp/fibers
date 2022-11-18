import { styled } from "../../theme/theme";

export const SC_MainLayout = styled("div", {
  minHeight: "100vh",
  display: "grid",
  gridTemplateAreas: "'header' 'main' 'footer'",
  gridTemplateRows: "auto 1fr auto",
});

export const SC_MainLayoutHeader = styled("div", {
  gridArea: "header",
});

export const SC_MainLayoutMain = styled("main", {
  gridArea: "main",
});

export const SC_MainLayoutContent = styled("main", {
  maxWidth: "1150px",
  margin: "0 auto",
});

export const SC_MainLayoutFooter = styled("div", {
  gridArea: "footer",
});
