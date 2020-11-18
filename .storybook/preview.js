import React from 'react'
import { ThemeProvider } from 'styled-components'
import { withA11y } from '@storybook/addon-a11y'
import centered from '@storybook/addon-centered/react'

import { theme } from '@styles/theme'
import GlobalStyles from '@styles/global'

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider, centered, withA11y]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
