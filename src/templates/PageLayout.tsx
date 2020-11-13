import React, { ReactNode } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { compose, layout } from 'styled-system'

import { Heading } from 'src/components/Typo'

import MenuIcon from '@public/assets/icons/menu.svg'

export const Page = styled('section')(
  css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
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
  return (
    <Page>
      {!noHeader && (
        <Header>
          <MenuTrigger
            display={['flex', , 'none']}
            onClick={() => alert('dispatch action "open context"')}
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
