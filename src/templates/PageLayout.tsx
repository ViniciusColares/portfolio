import React, { useState, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import css from '@styled-system/css'
import { compose, layout } from 'styled-system'

import { Heading } from 'src/components/Typo'
import { theme, medias } from 'src/styles/theme'

import MenuIcon from '@public/assets/icons/menu.svg'

export const Page = styled(motion.section)(
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
      width: '470px',
      height: '80vh',
      borderWidth: '4px !important',
      borderStyle: 'solid !important',
      borderColor: 'white !important',
      borderRadius: '16px !important',
      boxShadow: '20px 20px 20px rgba(0,0,0,0.3) !important'
    }
  })
)

export const Header = styled('header')(
  css({
    position: 'relative',
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    '.menu-trigger': {
      content: "''",
      position: 'absolute',
      left: 4
    }
  })
)

export const MenuTrigger = styled(MenuIcon)(
  css({ cursor: 'pointer' }),
  compose(layout)
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
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

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
    <Page
      key={router.pathname}
      transition={{ type: 'spring', bounce: 0.3, duration: 0.7 }}
      initial="pageInitial"
      animate={isOpen ? 'open' : 'closed'}
      exit="pageExit"
      variants={variants}
    >
      {!noHeader && (
        <Header>
          <MenuTrigger
            display={['flex', , 'none']}
            onClick={() => setIsOpen((oldValue) => !oldValue)}
            className="menu-trigger"
          />
          <PageTitle>{pageTitle}</PageTitle>
        </Header>
      )}
      {children}
    </Page>
  )
}

export default PageLayout
