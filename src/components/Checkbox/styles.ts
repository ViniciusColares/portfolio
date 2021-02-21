import styled from 'styled-components'
import css from '@styled-system/css'
import { motion, MotionProps } from 'framer-motion'

import { colors } from '@styles/theme'

export const CheckboxContainer = styled('label')(
  css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    fontFamily: 'text',
    marginBottom: 0,
    cursor: 'pointer',
    span: {
      color: 'white',
      fontSize: 1,
      display: 'block',
      lineHeight: 1.3,
      ':first-letter': {
        textTransform: 'capitalize'
      }
    }
  })
)

export const CheckboxStyle = styled(motion.input)<MotionProps>(
  css({
    all: 'unset',
    position: 'relative',
    bg: 'primaryDark',
    minWidth: '18px',
    height: '18px',
    border: 'none',
    borderRadius: '4px',
    borderColor: 'primaryDark',
    display: 'inline-block',
    marginRight: '10px',
    transition: 'all 150ms',
    '&:focus, &:hover': {
      boxShadow: `inset 0px 0px 0px 2px ${colors.primaryLight}`
    },
    '&:checked': {
      boxShadow: `inset 0px 0px 0px 2px ${colors.aux.success}`,
      '::before': {
        content: '""',
        position: 'absolute',
        left: '6px',
        top: '6px',
        width: '6px',
        height: '6px',
        backgroundColor: 'aux.success',
        borderRadius: '1px'
      }
    },
    '&:disabled': {
      boxShadow: `inset 0px 0px 0px 2px ${colors.gray50}`,
      bg: 'gray25',
      cursor: 'not-allowed',
      '&:focus, &:hover': {
        boxShadow: `inset 0px 0px 0px 2px ${colors.primaryLight}`
      }
    }
  })
)
