import React from "react";

import Menu from "@components/menu";
import { Page, ContentPage } from "@styles/grid";

const PageLayout = ({ children }) => (
  <Page>
    <Menu />
    <ContentPage>{children}</ContentPage>
  </Page>
);

export default PageLayout;
