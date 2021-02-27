import styled from 'styled-components'
import css from '@styled-system/css'
import { motion } from 'framer-motion'
import { rgba } from 'polished'
import { colors } from '@styles/theme'

export const Range = styled.div(
  css({
    width: '100%',
    px: 3,
    'input[type=range]': {
      WebkitAppearance: 'none',
      margin: '18px 0',
      width: '100%'
    },
    'input[type=range]:focus': {
      outline: 'none'
    },
    'input[type=range]::-webkit-slider-runnable-track': {
      width: '100%',
      height: '8.4px',
      cursor: 'pointer',
      boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d',
      bg: 'accent',
      borderRadius: '1.3px',
      border: '0.2px solid #010101'
    },
    'input[type=range]::-webkit-slider-thumb': {
      boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d',
      border: '1px solid #000000',
      height: '36px',
      width: '16px',
      borderRadius: '3px',
      bg: '#ffffff',
      cursor: 'pointer',
      WebkitAppearance: 'none',
      marginTop: '-14px'
    },
    'input[type=range]:focus::-webkit-slider-runnable-track': {
      bg: 'accent'
    },
    'input[type=range]::-moz-range-track': {
      width: '100%',
      height: '8.4px',
      cursor: 'pointer',
      boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d',
      bg: 'accent',
      borderRadius: '1.3px',
      border: '0.2px solid #010101'
    },
    'input[type=range]::-moz-range-thumb': {
      boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d',
      border: '1px solid #000000',
      height: '36px',
      width: '16px',
      borderRadius: '3px',
      bg: '#ffffff',
      cursor: 'pointer'
    },
    'input[type=range]::-ms-track': {
      width: '100%',
      height: '8.4px',
      cursor: 'pointer',
      bg: 'transparent',
      borderColor: 'transparent',
      borderWidth: '16px 0',
      color: 'transparent'
    },
    'input[type=range]::-ms-fill-lower': {
      bg: rgba(colors.accent, 0.2),
      border: '0.2px solid #010101',
      borderRadius: '2.6px',
      boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d'
    },
    'input[type=range]::-ms-fill-upper': {
      bg: 'accent',
      border: '0.2px solid #010101',
      borderRadius: '2.6px',
      boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d'
    },
    'input[type=range]::-ms-thumb': {
      boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d',
      border: '1px solid #000000',
      height: '36px',
      width: '16px',
      borderRadius: '3px',
      bg: '#ffffff',
      cursor: 'pointer'
    },
    'input[type=range]:focus::-ms-fill-lower': {
      bg: 'accent'
    },
    'input[type=range]:focus::-ms-fill-upper': {
      bg: '#367ebd'
    }
  })
)

export const RangeInput = styled(motion.input)(
  css({
    width: '100%',
    cursor: 'grab',
    '&:active': {
      cursor: 'grabbing'
    }
  })
)

export const Step = styled.div(
  css({
    width: '1px',
    height: '7px',
    bg: 'white'
  })
)
