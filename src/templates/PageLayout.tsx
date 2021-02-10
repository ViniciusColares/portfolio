import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import css from '@styled-system/css'
import { motion } from 'framer-motion'

import { IoIosArrowUp } from 'react-icons/io'
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

const Main = styled(motion.main)(
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

const MainContent = styled(motion.section)(
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    borderRadius: '16px',
    zIndex: 1
  })
)

const Header = styled('header')(
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

export const Menu = styled(motion.section)(
  css({
    display: 'grid',
    position: 'absolute',
    width: '100%',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, 82px)',
    gridGap: '16px',
    padding: '16px',
    bottom: '-37%',
    zIndex: 99,
    transition: 'bottom 0.2 ease-out',
    '::before': {
      content: '""',
      position: 'absolute',
      bg: 'rgba(255, 255, 255, 0.20)',
      width: '100%',
      height: '100%',
      borderRadius: '16px 16px 0 0',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 -3px 20px 0px rgba(0 0 0 / 30%)'
    },
    ':hover': {
      bottom: '0%'
    }
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
    cursor: 'pointer',
    borderRadius: '50%',
    boxShadow: '0px 0px 2px 1px rgb(0 0 0 / 25%)',
    svg: {
      boxShadow: '0px 0px 2px 1px rgb(255 255 255 / 25%)',
      backdropFilter: 'blur(3px)',
      borderRadius: '50%',
      bg: 'rgb(255 255 255 / 5%)',
      p: 1
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

const PageLayout = ({
  pageTitle,
  children
}: {
  pageTitle?: string
  children: ReactNode | ReactNode[]
}) => {
  const menuAnimations = {
    hidden: { bottom: '-350px' },
    standard: { bottom: '-285px' },
    open: { bottom: '0px' }
  }

  return (
    <Wrapper>
      <Main>
        <Head>
          <title>Vinícius Colares</title>
        </Head>
        <MainContent>
          {pageTitle && (
            <Header>
              <PageTitle>{pageTitle}</PageTitle>
            </Header>
          )}
          {children}
        </MainContent>
        <Menu
          initial="hidden"
          animate="standard"
          variants={menuAnimations}
          whileHover="open"
          transition={{
            type: 'keyframes'
          }}
        >
          <MenuTrigger
            initial={{ top: '-12px' }}
            animate={{ top: '-20px' }}
            transition={{
              type: 'tween',
              duration: 1,
              repeat: Infinity,
              repeatType: 'mirror'
            }}
          >
            <IoIosArrowUp size={30} />
          </MenuTrigger>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Menu>
      </Main>
    </Wrapper>
  )
}

export default PageLayout
