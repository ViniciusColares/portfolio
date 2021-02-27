import styled from 'styled-components'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import { motion, MotionProps } from 'framer-motion'
import { medias } from '@styles/theme'

export const Textarea = styled(motion.textarea)<MotionProps>(
  css({
    p: 3,
    bg: 'primaryDark',
    color: 'contrast',
    borderRadius: '6px',
    fontFamily: 'text',
    fontSize: 2,
    border: '2px solid transparent',
    outline: 'none',
    resize: 'none',
    lineHeight: 1.5,
    [medias('sm')]: {
      resize: 'vertical'
    },
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
    prop: 'prop',
    variants: {
      variant1: {},
      variant2: {}
    }
  })
)
