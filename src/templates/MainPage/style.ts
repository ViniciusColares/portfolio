import styled from 'styled-components'
import css from '@styled-system/css'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Heading } from '@components/Typo'

import { colors, medias } from '@styles/theme'

export const Wrapper = styled('section')(
  css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'url(/assets/bg.png) left top repeat-x scroll,linear-gradient(to bottom,#7C31D2 20%,#5614E2 90%)',
    backgroundAttachment: 'fixed',
    backgroundSize: '540px',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    zIndex: 0,
    '::before': {
      content: '""',
      position: 'absolute',
      bg: 'rgba(0, 0, 0, 0.35)',
      width: '100vw',
      height: '100vh'
    }
  })
)

export const Main = styled(motion.main)(
  css({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 1,
    transformStyle: 'preserve-3d',
    transform: 'perspective(0.5cm)',
    background: `url('/assets/bg.png') center top no-repeat scroll, linear-gradient(to bottom,${colors.primary1} 20%,${colors.primary2} 90%)`,
    backgroundSize: '100%',
    [medias('sm')]: {
      height: '80vh',
      width: '480px',
      borderWidth: '4px',
      borderStyle: 'solid',
      borderColor: 'white',
      borderRadius: '32px'
    }
  })
)

export const MainContent = styled(motion.section)(
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    borderRadius: '16px',
    pb: 4,
    zIndex: 1
  })
)

export const Header = styled('header')(
  css({
    position: 'relative',
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'content-box',
    height: '30px',
    padding: '20px 0',
    '.menu-trigger': {
      content: "''",
      position: 'absolute',
      left: 4
    }
  })
)

export const PageTitle = styled(Heading)(
  css({
    fontFamily: 'heading',
    justifySelf: 'center',
    margin: 0,
    fontSize: 1,
    lineHeight: '18px',
    fontWeight: 100
  })
)

export const Menu = styled(motion.nav)(
  css({
    display: 'grid',
    position: 'absolute',
    width: '100%',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, auto)',
    gridGap: '16px',
    padding: '16px',
    zIndex: 99,
    cursor: 'pointer',
    transition: 'bottom 0.2 ease-out',
    bg: 'rgba(255, 255, 255, 0.30)',
    borderRadius: '16px 16px 0 0',
    boxShadow: '0 -3px 20px 0px rgba(0 0 0 / 30%)',
    backdropFilter: 'blur(5px)'
  })
)

export const MenuTrigger = styled(motion.div)(
  css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'flex-start',
    position: 'absolute',
    width: '32px',
    height: '32px',
    left: 'calc(50% - 15px)',
    borderRadius: '50%',
    boxShadow: '0px 0px 2px 1px rgb(0 0 0 / 25%)',
    zIndex: 1,
    svg: {
      boxShadow: '0px 0px 2px 1px rgb(255 255 255 / 25%)',
      backdropFilter: 'blur(3px)',
      borderRadius: '50%',
      bg: 'rgb(255 255 255 / 5%)',
      p: 1
    }
  })
)

export const MenuItem = styled(motion.div)<{ inactive?: boolean }>(
  css({
    p: 2,
    bg: 'primary1',
    display: 'flex',
    position: 'relative',
    borderRadius: '8px',
    border: '2px solid rgb(255 255 255 / 30%)',
    height: '85px',
    pl: '32%',
    zIndex: 0,
    '> div:first-child': {
      position: 'absolute !important',
      left: '4%',
      top: -3
    },
    ':hover': {
      borderColor: 'accent',
      boxShadow: '2px 2px 4px 0px rgb(0 0 0 / 25%)'
    },
    ':nth-of-type(2)': {
      gridColumn: '1/3',
      bg: 'primaryDark',
      pl: '15%'
    }
  }),
  ({ inactive }) =>
    inactive &&
    css({
      filter: 'grayscale(100%)',
      cursor: 'not-allowed',
      ':hover': {
        borderColor: 'rgb(255 255 255 / 30%)',
        boxShadow: 'none'
      }
    })
)

export const MenuIllustration = styled(Image)(
  css({
    boxShadow: '0px 0px 0px 0px rgba(0 0 0 / 20%)'
  })
)

export const MenuInfo = styled(motion.div)(
  css({
    ml: 4,
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    alignSelf: 'flex-start',
    h2: {
      fontFamily: 'heading',
      fontWeight: 100,
      fontSize: 1,
      mb: 1
    },
    p: {
      fontFamily: 'text',
      fontWeight: 400,
      fontSize: 1,
      color: 'rgb(255 255 255 / 50%)'
    }
  })
)
