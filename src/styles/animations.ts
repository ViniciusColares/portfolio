import styled from 'styled-components'
import css from '@styled-system/css'
import { motion } from 'framer-motion'

export const Rotate = styled(motion.div)(
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })
)
