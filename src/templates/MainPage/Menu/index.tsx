import React, { useState } from 'react'
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
        <$.MenuIllustration minWidth="50px" height="100%">
          <Image
            src="/assets/menu/bg_rocket.png"
            alt="A cellphone launching a rocket"
            layout="responsive"
            sizes="(min-width: 360px) 47px, 30px"
            width={47}
            height={81}
          />
          <Image
            src="/assets/menu/rocket.png"
            alt="The rocket been launched"
            layout="responsive"
            sizes="(min-width: 360px) 47px, 30px"
            width={37}
            height={60}
          />
        </$.MenuIllustration>
        <$.MenuInfo>
          <h2>Início</h2>
          <p>
            Quer iniciar, ou melhorar algo?! <br />A tecnologia pode ajudar.
          </p>
        </$.MenuInfo>
      </$.MenuItem>

      <$.MenuItem style={{ translateY }} onClick={() => router.push('/perfil')}>
        <$.MenuIllustration minWidth="50px" height="100%">
          <Image
            src="/assets/avatar.png"
            alt="A man sitting in front of a projector screen"
            layout="responsive"
            width={59}
            height={80}
          />
        </$.MenuIllustration>

        <$.MenuInfo>
          <h2>Perfil &#x1F596;</h2>
          <p>Um pouco de mim.</p>
        </$.MenuInfo>
      </$.MenuItem>

      <$.MenuItem
        inactive
        style={{ translateY }}
        onClick={(e) => e.stopPropagation()}
      >
        <$.MenuIllustration minWidth="50px" height="100%">
          <Image
            src="/assets/menu/apps.png"
            alt="An illustration of a cellphone with some stats"
            layout="responsive"
            width={64}
            height={80}
          />
        </$.MenuIllustration>
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
        <$.MenuIllustration minWidth="50px" height="100%">
          <Image
            src="/assets/menu/blog_article.png"
            alt=""
            layout="responsive"
            width={56}
            height={71}
          />
          <Image
            src="/assets/menu/blog_phone.png"
            alt=""
            layout="responsive"
            width={27}
            height={50}
          />
        </$.MenuIllustration>
        <$.MenuInfo>
          <h2>Blog</h2>
          <p>Estou escrevendo.</p>
        </$.MenuInfo>
      </$.MenuItem>
      <$.MenuItem
        style={{ translateY }}
        onClick={() => router.push('/contato')}
      >
        <$.MenuIllustration minWidth="50px" height="100%">
          <Image
            src="/assets/menu/contact.png"
            alt="An illustration of a cellphone wearing a headset"
            layout="responsive"
            width={58}
            height={80}
          />
        </$.MenuIllustration>
        <$.MenuInfo>
          <h2>Contato</h2>
          <p>Precisa falar comigo?</p>
        </$.MenuInfo>
      </$.MenuItem>
    </$.Menu>
  )
}

export default Menu
