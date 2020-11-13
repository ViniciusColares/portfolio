import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { linearGradient } from 'polished'
import { motion, AnimatePresence } from 'framer-motion'
import styled, { ThemeProvider } from 'styled-components'
import css from '@styled-system/css'

import Menu from '@components/Menu'

import GlobalStyles from '@styles/global'
import { theme, medias } from '@styles/theme'

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

const Main = styled(motion.main)(
  css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    zIndex: 1,
    background: `url('/assets/bg.png') center top no-repeat scroll, linear-gradient(to bottom,${theme.colors.primary1} 20%,${theme.colors.primary2} 90%)`,
    backgroundSize: '100%',
    [medias('sm')]: {
      height: '80vh',
      width: 'clamp(470px, 30vw, 600px)',
      borderWidth: '4px !important',
      borderStyle: 'solid !important',
      borderColor: 'white !important',
      borderRadius: '16px !important',
      boxShadow: '20px 20px 20px rgba(0,0,0,0.3) !important'
    }
  })
)

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const isOpen = false
  console.log(Component, pageProps)

  const variants = {
    pageInitial: {
      scale: 1,
      translateX: '0%',
      borderRadius: '16px',
      border: '0px solid white',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0.3)'
    },
    open: {
      scale: 0.8,
      translateX: ['0%', '40%'],
      borderRadius: '16px',
      border: '5px solid white',
      boxShadow: '-20px 20px 20px rgba(0, 0, 0, 0.3)'
    },
    closed: {
      scale: [0.8, 1],
      translateX: '0%',
      borderRadius: '0px',
      border: '0px solid white',
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.3)'
    },
    pageExit: {
      scale: 0
    }
  }
  return (
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
        <Main
          key={router.pathname}
          transition={{ type: 'spring', bounce: 0.3, duration: 0.7 }}
          initial="pageInitial"
          animate={isOpen ? 'open' : 'closed'}
          exit="pageExit"
          variants={variants}
        >
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </Main>
      </Template>
    </ThemeProvider>
  )
}

export default App
