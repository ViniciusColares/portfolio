import { DefaultTheme } from "styled-components";

const colors = {
  primary1: "#7C31D2",
  primary2: "#5614E2",
  primaryDark: "#290759",
  accent: "#FFB800",
  accentDark: "#BB8B0E",
  gray: "#C1BDCB",
  grayDark: "#938CA3",
  grayLight: "#E9D9FF",
  contrast: "#F2F2F2",
};

const fonts = {
  heading: "'Bungee', cursive",
  text: "'Cambay', sans-serif",
};

const space = [0, 4, 8, 12, 20, 32, 52, 84];
const breakpoints = [320, 600, 960, 1280, 1920];

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: number[];
    colors: { [key in keyof typeof colors]: string };
    fonts: { [key in keyof typeof fonts]: string };
    space: number[];
  }
}

export const theme: DefaultTheme = {
  colors,
  fonts,
  space,
  breakpoints,
};
