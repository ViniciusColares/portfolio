import { DefaultTheme } from 'styled-components'

export const colors = {
  primary1: '#7C31D2',
  primary2: '#5614E2',
  primaryLight: '#B079FF',
  primaryDark: '#3C0D80',
  accent: '#FFB800',
  accentDark: '#BB8B0E',
  gray25: '#D3D3D3',
  gray50: '#938CA3',
  gray75: '#47454B',
  gray100: '#311B38',
  contrast: '#FFFFFF',
  shadow: '#3C0D80',
  aux: {
    success: '#00B007'
  }
}

export const fonts = {
  heading: "'Bungee', cursive",
  text: "'Rubik', sans-serif"
}

export const fontSizes = [
  '0.65rem',
  '0.8rem',
  '1rem',
  '1.2rem',
  '1.4rem',
  '1.7rem',
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
