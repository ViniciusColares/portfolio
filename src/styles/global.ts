import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { theme } from '@styles/theme'

const GlobalStyles = createGlobalStyle`
  ${normalize()}
  *{
    margin: 0;
    padding: 0;
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
    outline: none;
    font-size: 62.5%;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.contrast};
  }
  html, body,#__next{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  main{
    display: flex;
    justify-content: center;
    align-items: center
  }
`

export default GlobalStyles
