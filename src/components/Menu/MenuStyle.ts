import styled from 'styled-components'
import css from '@styled-system/css'
import { compose, layout, LayoutProps } from 'styled-system'

import LogoIcon from '@public/assets/icons/logo.svg'

export const Wrapper = styled('section')(
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bg: 'accent',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    zIndex: 0
  })
)

export const Container = styled('div')(
  css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    bg: 'accent',
    width: '100vw',
    maxWidth: '1280px',
    height: '100vh',
    overflow: 'hidden',
    zIndex: 0
  })
)

export const BgEffect = styled(LogoIcon)(
  css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    minHeight: '100vh',
    minWidth: '100vw',
    zIndex: 0,
    opacity: '0.3',
    path: {
      fill: 'accentDark',
      '&:nth-of-type(3)': {
        opacity: 0.75
      }
    }
  })
)

export const CloseMenu = styled('div')<LayoutProps>(
  css({
    position: 'absolute',
    cursor: 'pointer',
    right: 4,
    top: 4,
    zIndex: 1
  }),
  compose(layout)
)

export const MenuList = styled('section')(
  css({
    display: 'flex',
    zIndex: 1
  })
)

export const Nav = styled('nav')(
  css({
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '3vw',
    zIndex: 1,
    path: {
      fill: 'primaryDark'
    },
    'svg:first-of-type path:nth-of-type(3)': {
      opacity: 0.75
    }
  })
)

export const MenuListItem = styled('a')<{ active: boolean }>(
  css({
    display: 'flex',
    alignItems: 'center',
    height: '52px',
    '> span': {
      color: 'primaryDark',
      fontFamily: 'heading',
      marginLeft: 4,
      fontSize: 2
    },
    '&:hover': {
      cursor: 'pointer'
    },
    ':not(:last-of-type)': {
      marginBottom: 4
    }
  }),
  ({ active }) =>
    active &&
    css({
      '::before': {
        content: "''",
        position: 'absolute',
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderTop: '10px solid #FFB800',
        top: '0px'
      }
    })
)
