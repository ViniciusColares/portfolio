import styled from 'styled-components'
import css from '@styled-system/css'
import { variant, compose, space } from 'styled-system'
import { colors } from '@styles/theme'
import { motion, MotionProps } from 'framer-motion'

type ButtonStyleProps = { size?: string }

export const Container = styled.div(
  css({
    position: 'relative'
  })
)

export const ButtonStyle = styled(motion.button)<
  MotionProps & ButtonStyleProps
>(
  css({
    fontSize: 2,
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
    transform: 'translateY(-4px) translateX(-4px)',
    '&:focus': {
      boxShadow: `inset 0px 0px 0px 3px ${colors.accentDark}`,
      '&:hover': {
        transform: 'translateX-(2px) translateY(-2px)'
      }
    },
    '&:hover': {
      transform: 'translateX(-2px) translateY(-2px)',
      '&:active': {
        transform: 'translateX(0px) translateY(0px)'
      }
    },
    '&:active': {
      transform: 'translateX(0px) translateY(0px)'
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
    '> svg': {
      marginRight: 2
    }
  }),
  variant({
    prop: 'size',
    variants: {
      small: {
        minWidth: 'auto',
        padding: '4px 12px',
        fontSize: 1,
        fontWeight: 600,
        transform: 'translateY(-3px) translateX(-3px)',
        '&:focus': {
          boxShadow: `inset 0px 0px 0px 2px ${colors.accentDark}`,
          '&:hover': {
            transform: 'translateX(-2px) translateY(-2px)'
          }
        },
        '&:hover': {
          transform: 'translateX(-2px) translateY(-2px)',
          '&:active': {
            transform: 'translateX(0px) translateY(0px)'
          }
        },
        '&:active': {
          transform: 'translateX(0px) translateY(0px)'
        },
        '> svg': {
          marginRight: 1
        }
      },
      big: {
        minWidth: '150px',
        padding: '12px 32px',
        borderWidth: '2px',
        fontSize: 3,
        fontWeight: 600,
        transform: 'translateY(-5px) translateX(-5px)',
        '&:focus': {
          boxShadow: `inset 0px 0px 0px 4px ${colors.accentDark}`,
          '&:hover': {
            transform: 'translateX(-3px) translateY(-3px)'
          }
        },
        '&:hover': {
          transform: 'translateX(-3px) translateY(-3px)',
          '&:active': {
            transform: 'translateX(0px) translateY(0px)'
          }
        },
        '&:active': {
          transform: 'translateX(0px) translateY(0px)'
        },
        '> svg': {
          marginRight: 3
        }
      }
    }
  }),
  compose(space)
)

export const Shadow = styled.div(
  css({
    position: 'absolute',
    width: '100%',
    height: '100%',
    bg: 'shadow',
    borderRadius: '8px',
    border: `1px solid ${colors.shadow}`,
    top: 0,
    left: 0,
    zIndex: -1
  })
)
