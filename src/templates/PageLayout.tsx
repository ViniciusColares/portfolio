import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import styled from 'styled-components'
import css from '@styled-system/css'
import { motion, useMotionValue } from 'framer-motion'
import { IoIosArrowUp } from 'react-icons/io'

import { Heading } from '@components/Typo'

import { colors, medias } from '@styles/theme'
import { useRouter } from 'next/router'

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
    pb: 4,
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
    '::before': {
      content: '""',
      position: 'absolute',
      bg: 'rgba(255, 255, 255, 0.30)',
      width: '100%',
      height: '100%',
      borderRadius: '16px 16px 0 0',
      backdropFilter: 'blur(5px)',
      zIndex: -1,
      boxShadow: '0 -3px 20px 0px rgba(0 0 0 / 30%)'
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

export const MenuItem = styled(motion.div)(
  css({
    p: 2,
    bg: 'primary1',
    display: 'flex',
    position: 'relative',
    borderRadius: '8px',
    border: '2px solid transparent',
    height: '85px',
    pl: '32%',
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

const PageLayout = ({
  pageTitle,
  children
}: {
  pageTitle?: string
  children: ReactNode | ReactNode[]
}) => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const rotate = useMotionValue(0)
  const translateY = useMotionValue(150)

  const menuAnim = {
    hidden: { bottom: '-350px' },
    standard: { bottom: '-295px' },
    open: { bottom: '0px' }
  }
  const triggerAnim = {
    standard: { top: '-12px' },
    wave: { top: '-24px' }
  }

  const toggleMenu = () => {
    rotate.set(menuOpen ? 0 : 180)
    translateY.set(menuOpen ? 150 : 0)
    setMenuOpen(!menuOpen)
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
          onClick={toggleMenu}
          initial="hidden"
          animate={menuOpen ? 'open' : 'standard'}
          variants={menuAnim}
        >
          <MenuTrigger
            initial="standard"
            style={{ rotate }}
            animate={['wave']}
            variants={triggerAnim}
            transition={{
              top: {
                type: 'tween',
                duration: 1,
                repeat: Infinity,
                repeatType: 'mirror'
              },
              rotate: { type: 'spring' }
            }}
          >
            <IoIosArrowUp size={30} />
          </MenuTrigger>
          <MenuItem style={{ translateY }} onClick={() => router.push('/')}>
            <MenuIllustration
              src="/assets/menu/home.png"
              alt="A rocket been launched in front a cellphone"
              width={47}
              height={84}
            />
            <MenuInfo>
              <h2>Início</h2>
              <p>
                Quer iniciar, ou melhorar algo?! <br />A tecnologia pode ajudar.
              </p>
            </MenuInfo>
          </MenuItem>
          <MenuItem
            style={{ translateY }}
            onClick={() => router.push('/perfil')}
          >
            <MenuIllustration
              src="/assets/menu/profile.png"
              alt="A man sitting in front of a projector screen"
              width={65}
              height={80}
            />
            <MenuInfo>
              <h2>Perfil</h2>
              <p>Um pouco de mim.</p>
            </MenuInfo>
          </MenuItem>
          <MenuItem style={{ translateY }} onClick={() => router.push('/apps')}>
            <MenuIllustration
              src="/assets/menu/apps.png"
              alt=""
              width={64}
              height={80}
            />
            <MenuInfo>
              <h2>Apps</h2>
              <p>Faço pra me divertir.</p>
            </MenuInfo>
          </MenuItem>
          <MenuItem style={{ translateY }}>
            <MenuIllustration
              src="/assets/menu/blog.png"
              alt=""
              width={56}
              height={80}
            />
            <MenuInfo>
              <h2>Blog</h2>
              <p>Escrevo o que penso.</p>
            </MenuInfo>
          </MenuItem>
          <MenuItem
            style={{ translateY }}
            onClick={() => router.push('/contato')}
          >
            <MenuIllustration
              src="/assets/menu/contact.png"
              alt=""
              width={58}
              height={80}
            />
            <MenuInfo>
              <h2>Contato</h2>
              <p>Precisa falar comigo?</p>
            </MenuInfo>
          </MenuItem>
        </Menu>
      </Main>
    </Wrapper>
  )
}

export default PageLayout
