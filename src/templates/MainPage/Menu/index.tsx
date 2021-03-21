import React, { useCallback, useState } from 'react'
import { useMotionValue } from 'framer-motion'
import { IoIosArrowUp } from 'react-icons/io'
import { useRouter } from 'next/router'
import Image from 'next/image'

import * as $ from './style'

const Menu: React.FC = () => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const rotate = useMotionValue(0)
  const translateY = useMotionValue(150)

  const menuAnim = {
    hidden: { bottom: '-350px' },
    standard: { bottom: '-265px' },
    open: { bottom: '0px' }
  }
  const triggerAnim = {
    standard: { top: '-12px' },
    wave: { top: '-24px' }
  }

  const toggleMenu = useCallback(() => {
    rotate.set(menuOpen ? 0 : 180)
    translateY.set(menuOpen ? 150 : 0)
    setMenuOpen(!menuOpen)
  }, [menuOpen])

  return (
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
        <$.MenuIllustration width={47} height={81} left={2} top={-8}>
          <Image
            src="/assets/menu/bg_rocket.png"
            alt="A cellphone launching a rocket"
            layout="fill"
          />
        </$.MenuIllustration>
        <$.MenuIllustration width={37} height={60} left="14px" top={-11}>
          <Image
            src="/assets/menu/rocket.png"
            alt="The rocket been launched"
            layout="fill"
          />
        </$.MenuIllustration>
        <$.MenuInfo>
          <h2>Início</h2>
          <p>
            Quer iniciar, ou melhorar algo?! <br />A tecnologia pode ajudar
          </p>
        </$.MenuInfo>
      </$.MenuItem>

      <$.MenuItem style={{ translateY }} onClick={() => router.push('/perfil')}>
        <$.MenuIllustration width={55} height={76} left={1} top={-5}>
          <Image
            src="/assets/avatar.png"
            alt="A man sitting in front of a projector screen"
            layout="fill"
          />
        </$.MenuIllustration>

        <$.MenuInfo>
          <h2>Perfil</h2>
          <p>Um pouco de mim</p>
        </$.MenuInfo>
      </$.MenuItem>

      <$.MenuItem
        inactive
        style={{ translateY }}
        onClick={(e) => e.stopPropagation()}
      >
        <$.MenuIllustration width={45} height={80} left={2} top={-7}>
          <Image
            src="/assets/menu/apps.png"
            alt="An illustration of a cellphone with some stats"
            layout="fill"
          />
        </$.MenuIllustration>
        <$.MenuInfo>
          <h2>Apps</h2>
          <p>Só por diversão</p>
        </$.MenuInfo>
      </$.MenuItem>
      <$.MenuItem
        inactive
        style={{ translateY }}
        onClick={(e) => e.stopPropagation()}
      >
        <$.MenuIllustration width={46} height={58} left={1} top={-7}>
          <Image
            src="/assets/menu/blog_article.png"
            alt="An illustration of an article in a webpage"
            layout="fill"
          />
        </$.MenuIllustration>
        <$.MenuIllustration width={32} height={60} left={24} top={0}>
          <Image
            src="/assets/menu/blog_phone.png"
            alt="An illustration of an article in a cellphone webpage"
            layout="fill"
          />
        </$.MenuIllustration>
        <$.MenuInfo>
          <h2>Blog</h2>
          <p>Viajando nas ideias</p>
        </$.MenuInfo>
      </$.MenuItem>
      <$.MenuItem
        style={{ translateY }}
        onClick={() => router.push('/contato')}
      >
        <$.MenuIllustration width={56} height={76} left={1} top={-7}>
          <Image
            src="/assets/menu/contact.png"
            alt="An illustration of a cellphone wearing a headset"
            layout="fill"
          />
        </$.MenuIllustration>
        <$.MenuInfo>
          <h2>Contato</h2>
          <p>Onde me encontrar</p>
        </$.MenuInfo>
      </$.MenuItem>
    </$.Menu>
  )
}

export default React.memo(Menu)
