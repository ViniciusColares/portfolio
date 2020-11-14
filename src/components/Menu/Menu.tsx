import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import CloseIcon from '@public/assets/icons/close.svg'
import LogoIcon from '@public/assets/icons/logo.svg'
import ProfileIcon from '@public/assets/icons/profile.svg'
import CodeIcon from '@public/assets/icons/code.svg'
import ContactIcon from '@public/assets/icons/contact.svg'

import * as SC from './MenuStyle'

const Menu = () => {
  const router = useRouter()
  const { asPath } = router
  const { home, profile, apps, contact } = {
    home: '/',
    profile: '/perfil',
    apps: '/apps',
    contact: '/contato'
  }
  return (
    <SC.Wrapper>
      <SC.BgEffect />
      <SC.CloseMenu
        display={['flex', 'flex', 'none']}
        onClick={() => alert('dispatch close menu')}
      >
        <CloseIcon height="19px" />
      </SC.CloseMenu>
      <SC.Container>
        <SC.MenuList>
          <SC.Nav>
            <Link href={home}>
              <SC.MenuListItem active={asPath === home}>
                <LogoIcon height="33px" />
                <span>Início</span>
              </SC.MenuListItem>
            </Link>
            <Link href={profile}>
              <SC.MenuListItem active={asPath === profile}>
                <ProfileIcon height="33px" />
                <span>Perfil</span>
              </SC.MenuListItem>
            </Link>
            <Link href={apps}>
              <SC.MenuListItem active={asPath === apps}>
                <CodeIcon height="30px" />
                <span>Apps</span>
              </SC.MenuListItem>
            </Link>
            <Link href={contact}>
              <SC.MenuListItem active={asPath === contact}>
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

export default Menu
