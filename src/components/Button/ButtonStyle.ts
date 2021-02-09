import styled from 'styled-components'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import { theme } from '@styles/theme'
import { motion } from 'framer-motion'

const { colors } = theme

export const Container = styled.div(
  css({
    position: 'relative'
  })
)

export const ButtonStyle = styled(motion.button)(
  css({
    fontSize: 1,
    bg: 'accent',
    display: 'flex',
    outline: 'none',
    fontWeight: 600,
    cursor: 'pointer',
    userSelect: 'none',
    fontFamily: 'text',
    borderWidth: '1px',
    padding: '8px 20px',
    textAlign: 'center',
    borderRadius: '8px',
    color: 'primaryDark',
    position: 'relative',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    borderStyle: 'solid',
    justifyContent: 'center',
    transition: 'all .15s ease',
    borderColor: 'accentDark',
    '&:focus': {
      boxShadow: `inset 0px 0px 0px 3px ${colors.accentDark}`,
      '&:hover': {
        transform: 'translateX(2px) translateY(2px)'
      }
    },
    '&:hover': {
      transform: 'translateX(2px) translateY(2px)',
      '&:active': {
        transform: 'translateX(4px) translateY(4px)'
      }
    },
    '&:active': {
      transform: 'translateX(4px) translateY(4px)'
    },
    '&:disabled': {
      borderColor: 'gray50',
      bg: 'gray25',
      color: 'gray50',
      cursor: 'not-allowed',
      '&:hover': {
        transform: 'translateY(0px)'
      },
      '&+div': {
        visibility: 'hidden'
      }
    },
    '> img': {
      marginRight: 2
    }
  }),
  variant({
    prop: 'size',
    variants: {
      small: {
        minWidth: 'auto',
        padding: '4px 12px',
        fontSize: 0,
        fontWeight: 600,
        '&:focus': {
          boxShadow: `inset 0px 0px 0px 2px ${colors.accentDark}`,
          '&:hover': {
            transform: 'translateX(2px) translateY(2px)'
          }
        },
        '&:hover': {
          transform: 'translateX(2px) translateY(2px)',
          '&:active': {
            transform: 'translateX(4px) translateY(4px)'
          }
        },
        '&:active': {
          transform: 'translateX(4px) translateY(4px)'
        },
        '> img': {
          marginRight: 1
        }
      },
      big: {
        minWidth: '150px',
        padding: '12px 32px',
        borderWidth: '2px',
        fontSize: 2,
        fontWeight: 600,
        '&:focus': {
          boxShadow: `inset 0px 0px 0px 4px ${colors.accentDark}`,
          '&:hover': {
            transform: 'translateX(2px) translateY(2px)'
          }
        },
        '&:hover': {
          transform: 'translateX(2px) translateY(2px)',
          '&:active': {
            transform: 'translateX(5px) translateY(5px)'
          }
        },
        '&:active': {
          transform: 'translateX(5px) translateY(5px)'
        },
        '> img': {
          marginRight: 3
        }
      }
    }
  })
)

export const Shadow = styled.div(
  css({
    position: 'absolute',
    width: '100%',
    height: '100%',
    bg: 'shadow',
    borderRadius: '8px',
    border: `1px solid ${colors.shadow}`,
    transform: 'translateY(4px) translateX(4px)',
    top: 0,
    left: 0,
    zIndex: -1
  }),
  variant({
    prop: 'size',
    variants: {
      small: {
        transform: 'translateY(3px) translateX(3px)'
      },
      big: {
        transform: 'translateY(5px) translateX(5px)'
      }
    }
  })
)
