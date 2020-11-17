import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { compose, layout } from 'styled-system'
import css from '@styled-system/css'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'

import MenuIcon from '@public/assets/icons/menu.svg'
import CloseIcon from '@public/assets/icons/close.svg'

import { Heading } from '@components/Typo'
import Context from '@components/Menu'
import { colors, medias } from '@styles/theme'
import { toggleMenu } from '@store/context'

const Main = styled(motion.main)(
  css({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    zIndex: 1,
    background: `url('/assets/bg.png') center top no-repeat scroll, linear-gradient(to bottom,${colors.primary1} 20%,${colors.primary2} 90%)`,
    backgroundSize: '100%',
    [medias('sm')]: {
      height: '80vh',
      width: '480px',
      borderWidth: '4px !important',
      borderStyle: 'solid !important',
      borderColor: 'white !important',
      borderRadius: '16px !important'
    }
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

export const MenuTrigger = styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'flex-start',
    cursor: 'pointer'
  }),
  compose(layout)
)

export const Close = styled(CloseIcon)(
  css({
    path: {
      fill: colors.contrast
    }
  })
)

export const Menu = styled(MenuIcon)(
  css({
    path: colors.contrast
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
  noHeader,
  pageTitle,
  children
}: {
  noHeader?: boolean
  pageTitle?: string
  children: ReactNode[]
}) => {
  const [isOpen, setToggleMenu] = useRecoilState(toggleMenu)
  const isMediumUp = useMediaQuery({
    query: medias('sm').replace('@media ', '')
  })
  const variants = {
    initial: {
      scale: 0,
      translateX: isMediumUp ? '0' : '100%',
      translateY: isMediumUp ? '120%' : '0%',
      borderRadius: '16px',
      border: '0px solid white'
    },
    open: {
      scale: isMediumUp ? 1 : 0.8,
      translateX: ['0%', '40%'],
      translateY: '0%',
      borderRadius: '16px',
      border: '5px solid white',
      boxShadow: '-20px 20px 20px rgba(0, 0, 0, 0.3)'
    },
    closed: {
      scale: isMediumUp ? 1 : [0.8, 1],
      translateY: '0%',
      translateX: '0%',
      borderRadius: '0px',
      border: '0px solid white',
      boxShadow: isMediumUp
        ? '20px 20px 20px rgba(0,0,0,0.3)'
        : '0px 0px 0px rgba(0, 0, 0, 0.3)'
    },
    exit: {
      scale: 0,
      translateX: isMediumUp ? '0' : '100%',
      translateY: isMediumUp ? '-120%' : '0%'
    }
  }

  return (
    <>
      <Context />
      <Main
        variants={variants}
        initial="initial"
        animate={isOpen ? 'open' : 'closed'}
        exit="exit"
        transition={{ type: 'spring', damping: 16 }}
      >
        <Head>
          <title>Vinícius Colares</title>
        </Head>
        {!noHeader && (
          <Header>
            {!isMediumUp && (
              <MenuTrigger
                className="menu-trigger"
                onClick={() => setToggleMenu(!isOpen)}
              >
                {isOpen ? (
                  <Close width={26} height={26} />
                ) : (
                  <Menu width={26} height={26} />
                )}
                <Heading fontSize="0.5rem" mt="3px">
                  menu
                </Heading>
              </MenuTrigger>
            )}
            <PageTitle>{pageTitle}</PageTitle>
          </Header>
        )}
        {children}
      </Main>
    </>
  )
}

export default PageLayout
