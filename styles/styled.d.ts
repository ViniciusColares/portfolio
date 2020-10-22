import { CSSProp } from "styled-components";
import { theme } from "./theme";

declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
