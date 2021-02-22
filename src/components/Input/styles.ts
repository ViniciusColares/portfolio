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
      position: 'absolute',
      right: '8px',
      cursor: 'pointer'
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
      borderColor: 'accent'
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
