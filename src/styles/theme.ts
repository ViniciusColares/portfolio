import { DefaultTheme } from 'styled-components'

export const colors = {
  primary1: '#7C31D2',
  primary2: '#5614E2',
  primaryDark: '#290759',
  accent: '#FFB800',
  accentDark: '#BB8B0E',
  gray: '#C1BDCB',
  grayDark: '#938CA3',
  grayLight: '#E9D9FF',
  contrast: '#FFFFFF',
  black: '#444'
}

export const fonts = {
  heading: "'Bungee', cursive",
  text: "'Rubik', sans-serif"
}

export const fontSizes = [
  '0.8rem',
  '1rem',
  '1.1rem',
  '1.3rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3rem'
]

export const space = [0, 4, 8, 12, 20, 32, 52, 84]

export const breakpoints = [40, 52, 64, 78, 94]

export const medias = (key) => {
  switch (key) {
    case 'xs':
      return `@media (min-width: ${breakpoints[0]}em)`
    case 'sm':
      return `@media (min-width: ${breakpoints[1]}em)`
    case 'md':
      return `@media (min-width: ${breakpoints[2]}em)`
    case 'lg':
      return `@media (min-width: ${breakpoints[3]}em)`
    case 'xl':
      return `@media (min-width: ${breakpoints[4]}em)`
    default:
      return `@media (min-width: 0em)`
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    medias: (key: keyof typeof breakpoints) => string
    colors: { [key in keyof typeof colors]: string }
    fonts: { [key in keyof typeof fonts]: string }
    breakpoints: number[]
    fontSizes: string[]
    space: number[]
  }
}

export const theme: DefaultTheme = {
  medias,
  colors,
  breakpoints,
  fonts,
  fontSizes,
  space
}
