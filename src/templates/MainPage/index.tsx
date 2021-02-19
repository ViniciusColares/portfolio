import React, { ReactNode, useState } from 'react'
import Head from 'next/head'
import { useMotionValue } from 'framer-motion'
import { IoIosArrowUp } from 'react-icons/io'
import { useRouter } from 'next/router'

import * as $ from './style'

const MainPage = ({
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
    <$.Wrapper>
      <$.Main>
        <Head>
          <title>Vinícius Colares</title>
        </Head>
        <$.MainContent>
          {pageTitle && (
            <$.Header>
              <$.PageTitle>{pageTitle}</$.PageTitle>
            </$.Header>
          )}
          {children}
        </$.MainContent>
        <$.Menu
          onClick={toggleMenu}
          initial="hidden"
          animate={menuOpen ? 'open' : 'standard'}
          variants={menuAnim}
        >
          <$.MenuTrigger
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
          </$.MenuTrigger>
          <$.MenuItem style={{ translateY }} onClick={() => router.push('/')}>
            <$.MenuIllustration
              src="/assets/menu/home.png"
              alt="A rocket been launched in front a cellphone"
              width={47}
              height={84}
            />
            <$.MenuInfo>
              <h2>Início</h2>
              <p>
                Quer iniciar, ou melhorar algo?! <br />A tecnologia pode ajudar.
              </p>
            </$.MenuInfo>
          </$.MenuItem>
          <$.MenuItem
            style={{ translateY }}
            onClick={() => router.push('/perfil')}
          >
            <$.MenuIllustration
              src="/assets/menu/profile.png"
              alt="A man sitting in front of a projector screen"
              width={59}
              height={80}
            />
            <$.MenuInfo>
              <h2>Perfil</h2>
              <p>Um pouco de mim.</p>
            </$.MenuInfo>
          </$.MenuItem>
          <$.MenuItem
            inactive
            style={{ translateY }}
            onClick={(e) => e.stopPropagation()}
          >
            <$.MenuIllustration
              src="/assets/menu/apps.png"
              alt=""
              width={64}
              height={80}
            />
            <$.MenuInfo>
              <h2>Apps</h2>
              <p>Estou programando.</p>
            </$.MenuInfo>
          </$.MenuItem>
          <$.MenuItem
            inactive
            style={{ translateY }}
            onClick={(e) => e.stopPropagation()}
          >
            <$.MenuIllustration
              src="/assets/menu/blog.png"
              alt=""
              width={56}
              height={80}
            />
            <$.MenuInfo>
              <h2>Blog</h2>
              <p>Estou escrevendo.</p>
            </$.MenuInfo>
          </$.MenuItem>
          <$.MenuItem
            style={{ translateY }}
            onClick={() => router.push('/contato')}
          >
            <$.MenuIllustration
              src="/assets/menu/contact.png"
              alt=""
              width={58}
              height={80}
            />
            <$.MenuInfo>
              <h2>Contato</h2>
              <p>Precisa falar comigo?</p>
            </$.MenuInfo>
          </$.MenuItem>
        </$.Menu>
      </$.Main>
    </$.Wrapper>
  )
}

export default MainPage
