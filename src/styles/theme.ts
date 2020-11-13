import { DefaultTheme } from 'styled-components'

const colors = {
  primary1: '#7C31D2',
  primary2: '#5614E2',
  primaryDark: '#290759',
  accent: '#FFB800',
  accentDark: '#BB8B0E',
  gray: '#C1BDCB',
  grayDark: '#938CA3',
  grayLight: '#E9D9FF',
  contrast: '#F2F2F2',
  black: '#444'
}

const fonts = {
  heading: "'Bungee', cursive",
  text: "'Rubik', sans-serif"
}

const fontSizes = [
  '0.8rem',
  '1rem',
  '1.2rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3rem'
]

const space = [0, 4, 8, 12, 20, 32, 52, 84]

const breakpoints = {
  xs: 40,
  sm: 52,
  md: 64,
  lg: 78,
  xl: 94
}

export const medias = (key) => `@media (min-width: ${breakpoints[key]}em)`

declare module 'styled-components' {
  export interface DefaultTheme {
    medias: (key: keyof typeof breakpoints) => string
    colors: { [key in keyof typeof colors]: string }
    fonts: { [key in keyof typeof fonts]: string }
    fontSizes: string[]
    space: number[]
  }
}

export const theme: DefaultTheme = {
  medias,
  colors,
  fonts,
  fontSizes,
  space
}
