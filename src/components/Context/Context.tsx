import React from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import Link from 'next/link'

import LogoIcon from '@public/assets/icons/logo.svg'
import ProfileIcon from '@public/assets/icons/profile.svg'
import CodeIcon from '@public/assets/icons/code.svg'
import ContactIcon from '@public/assets/icons/contact.svg'

import { toggleMenu } from '@store/context'

import * as SC from './ContextStyle'

const Context = () => {
  const [, setToggleMenu] = useRecoilState(toggleMenu)
  const { asPath } = useRouter()
  const { home, profile, apps, contact } = {
    home: '/',
    profile: '/perfil',
    apps: '/apps',
    contact: '/contato'
  }
  return (
    <SC.Wrapper>
      <SC.BgEffect />
      <SC.Container>
        <SC.MenuList>
          <SC.Nav>
            <Link href={home}>
              <SC.MenuListItem
                onClick={() => setToggleMenu(false)}
                active={asPath === home}
              >
                <LogoIcon height="33px" />
                <span>Início</span>
              </SC.MenuListItem>
            </Link>
            <Link href={profile}>
              <SC.MenuListItem
                onClick={() => setToggleMenu(false)}
                active={asPath === profile}
              >
                <ProfileIcon height="33px" />
                <span>Perfil</span>
              </SC.MenuListItem>
            </Link>
            <Link href={apps}>
              <SC.MenuListItem
                onClick={() => setToggleMenu(false)}
                active={asPath === apps}
              >
                <CodeIcon height="30px" />
                <span>Apps</span>
              </SC.MenuListItem>
            </Link>
            <Link href={contact}>
              <SC.MenuListItem
                onClick={() => setToggleMenu(false)}
                active={asPath === contact}
              >
                <ContactIcon height="30px" />
                <span>Contato</span>
              </SC.MenuListItem>
            </Link>
          </SC.Nav>
        </SC.MenuList>
      </SC.Container>
    </SC.Wrapper>
  )
}

export default Context
