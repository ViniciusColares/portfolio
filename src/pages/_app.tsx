import Head from 'next/head'
import { AppProps } from 'next/app'
import { linearGradient } from 'polished'
import { RecoilRoot } from 'recoil'
import styled, { ThemeProvider } from 'styled-components'
import css from '@styled-system/css'

import Menu from '@components/Menu'

import GlobalStyles from '@styles/global'
import { theme } from '@styles/theme'

const Template = styled('div')(
  css({
    display: 'flex',
    bg: 'gray',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflow: 'hidden',
    ...linearGradient({
      colorStops: [
        `${theme.colors.primary1} 20%`,
        `${theme.colors.primary2} 80%`
      ],
      toDirection: 'to bottom left',
      fallback: theme.colors.primary1
    })
  })
)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Bungee&family=Rubik:wght@400;500;600;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#290759"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#290759" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#290759" />
        </Head>
        <GlobalStyles />
        <Template>
          <Menu />
          <Component {...pageProps} />
        </Template>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
