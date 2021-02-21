import styled from 'styled-components'
import css from '@styled-system/css'
import { motion, MotionProps } from 'framer-motion'

export const Input = styled(motion.input)<MotionProps>(
  css({
    p: 3,
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
  })
)
