import { createGlobalStyle } from "styled-components";
import { linearGradient, normalize } from "polished";

const GlobalStyles = createGlobalStyle`
  ${normalize()}
  *{
    box-sizing: border-box;
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
    background-attachment: fixed;
    background: ${({ theme }) =>
      linearGradient({
        colorStops: [
          `${theme.colors.primary1} 20%`,
          `${theme.colors.primary2} 90%`,
        ],
        toDirection: "to bottom left",
        fallback: theme.colors.primary1,
      })};
  }
`;

export default GlobalStyles;
