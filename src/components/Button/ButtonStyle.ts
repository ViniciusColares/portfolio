import styled from 'styled-components'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import { theme } from '@styles/theme'
import { darken } from 'polished'
import { motion } from 'framer-motion'

export const ButtonStyle = styled(motion.button)(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    fontFamily: 'text',
    bg: 'accent',
    fontSize: 1,
    fontWeight: 600,
    color: 'primaryDark',
    textAlign: 'center',
    borderRadius: '6px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'all .3s ease-out',
    '&:focus': {
      boxShadow: `inset 0 0 0px 4px ${theme.colors.accentDark}`
    },
    '&:hover': {
      bg: darken(0.08, theme.colors.accent),
      boxShadow: '0px 0px 6px rgba(170, 140, 210, 0.9)'
    },
    '&:disabled': {
      bg: 'gray25',
      color: 'gray50',
      cursor: 'not-allowed'
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
        padding: '5px 16px',
        fontSize: 0,
        fontWeight: 600,
        '&:hover': {
          boxShadow: '0px 0px 6px rgba(170, 140, 210, 0.9)'
        },
        '> img': {
          marginRight: 2
        }
      },
      big: {
        minWidth: '180px',
        padding: '20px 40px',
        fontSize: 2,
        fontWeight: 600,
        '&:hover': {
          boxShadow: '0px 0px 6px rgba(170, 140, 210, 0.9)'
        },
        '> img': {
          marginRight: 2
        }
      }
    }
  })
)
