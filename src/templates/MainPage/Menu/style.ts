import styled from 'styled-components'
import css from '@styled-system/css'
import { motion } from 'framer-motion'

import Flex from '@components/Flex'

import { medias } from '@styles/theme'

export const Menu = styled(motion.nav)(
  css({
    display: 'grid',
    position: 'absolute',
    width: '100%',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, auto)',
    gridGap: '8px',
    padding: '8px',
    zIndex: 99,
    cursor: 'pointer',
    transition: 'bottom 0.2 ease-out',
    bg: 'rgba(255, 255, 255, 0.30)',
    borderRadius: '16px 16px 0 0',
    boxShadow: '0 -3px 20px 0px rgba(0 0 0 / 30%)',
    backdropFilter: 'blur(5px)',
    userSelect: 'none',
    [medias('sm')]: {
      gridGap: '16px',
      padding: '16px'
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
    boxShadow: '0px 0px 2px 1px rgb(0 0 0 / 30%)',
    zIndex: 1,
    svg: {
      boxShadow: '0px 0px 2px 1px rgb(255 255 255 / 30%)',
      backdropFilter: 'blur(3px)',
      borderRadius: '50%',
      bg: 'rgb(255 255 255 / 20%)',
      p: 1
    }
  })
)

export const MenuItem = styled(motion.div)<{ inactive?: boolean }>(
  css({
    p: 2,
    bg: 'primary1',
    display: 'flex',
    position: 'relative',
    borderRadius: '8px',
    border: '2px solid rgb(255 255 255 / 20%)',
    height: '85px',
    zIndex: 0,
    ':hover': {
      borderColor: 'accent',
      boxShadow: '2px 2px 4px 0px rgb(0 0 0 / 25%)'
    },
    ':nth-of-type(2)': {
      gridColumn: '1/3',
      bg: 'primaryDark'
    }
  }),
  ({ inactive }) =>
    inactive &&
    css({
      filter: 'grayscale(100%)',
      cursor: 'not-allowed',
      ':hover': {
        borderColor: 'rgb(255 255 255 / 20%)',
        boxShadow: 'none'
      }
    })
)

export const MenuIllustration = styled(Flex)(
  css({
    boxShadow: '0px 0px 0px 0px rgba(0 0 0 / 20%)'
  })
)

export const MenuInfo = styled(motion.div)(
  css({
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    alignSelf: 'flex-start',
    h2: {
      fontFamily: 'heading',
      fontWeight: 100,
      fontSize: 2,
      mb: 1
    },
    p: {
      fontFamily: 'text',
      fontWeight: 400,
      fontSize: 2,
      color: 'rgb(255 255 255 / 50%)'
    }
  })
)
