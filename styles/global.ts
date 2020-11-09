import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { theme } from "@styles/theme";

const GlobalStyles = createGlobalStyle`
  ${normalize()}
  *{
    box-sizing: border-box;

    scrollbar-color: ${theme.colors.accent} transparent;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #C1BDCB44;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.accent};
      border: none;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.primaryDark};
      cursor: "pointer";
    }
  }
  html{
    overflow: hidden;
  }
  body {
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 1em;
    font-weight: 400;
    color: #F2F2F2;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.contrast};
  }
`;

export default GlobalStyles;
