import styled from 'styled-components'
import css from '@styled-system/css'
import { motion, MotionProps } from 'framer-motion'
import { variant } from 'styled-system'
import { colors } from '@styles/theme'

type InputStyleProps = { state?: string }

export const Container = styled.div(
  css({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    svg: {
      right: '8px',
      position: 'absolute',
      cursor: 'pointer',
      zIndex: 2
    }
  })
)

export const Input = styled(motion.input)<MotionProps & InputStyleProps>(
  css({
    p: 3,
    width: '100%',
    bg: 'primaryDark',
    color: 'contrast',
    borderRadius: '6px',
    fontFamily: 'text',
    fontSize: 2,
    border: '2px solid transparent',
    outline: 'none',
    '&:focus': {
      borderColor: 'accent',
      '& ~ div': {
        opacity: 0,
        visibility: 'hidden',
        right: '10px'
      }
    },
    '&:hover': {},
    '&:active': {},
    '&:disabled': {},
    '::placeholder': {
      color: 'primaryLight'
    }
  }),
  variant({
    prop: 'state',
    variants: {
      error: {
        borderColor: colors.error
      }
    }
  })
)

export const Tooltip = styled(motion.div)<MotionProps>(
  css({
    p: 2,
    right: '10px',
    fontSize: 1,
    color: 'white',
    visibility: 'hidden',
    opacity: 0,
    position: 'absolute',
    bg: 'rgb(0 0 0 / 70%)',
    borderRadius: '4px',
    fontFamily: 'text',
    pointerEvents: 'none',
    transition: 'all 0.25s ease-out',
    zIndex: 1,
    '::before': {
      content: '""',
      right: '-7px',
      position: 'absolute',
      width: '0',
      height: '0',
      borderTop: '7px solid transparent',
      borderBottom: '7px solid transparent',
      borderLeft: '7px solid rgb(0 0 0 / 70%)',
      borderRadius: '2px'
    },
    '&.visible': {
      opacity: 1,
      right: '42px',
      pointerEvents: 'initial',
      visibility: 'visible'
    }
  })
)
