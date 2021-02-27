import { ReactNode } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import {
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from 'styled-system'
import { motion, MotionProps } from 'framer-motion'

type GridProps = { spaceChildren?: number; flexDirection?: string }

const CustomGrid = styled(motion.div)<MotionProps & GridProps>(
  css({
    display: 'flex',
    position: 'relative'
  }),
  ({ spaceChildren, flexDirection }) => {
    switch (flexDirection) {
      case 'column':
        return css({
          '> :nth-child(n):not(:last-child)': {
            marginBottom: spaceChildren
          }
        })
      case 'row-reverse':
        return css({
          '> :nth-child(n):not(:last-child)': {
            marginLeft: spaceChildren
          }
        })
      case 'column-reverse':
        return css({
          '> :nth-child(n):not(:last-child)': {
            marginTop: spaceChildren
          }
        })
      default:
        return css({
          '> :nth-child(n):not(:last-child)': {
            marginRight: spaceChildren
          }
        })
    }
  },
  compose(space, layout, flexbox)
)

const Flex = ({
  tag = 'div',
  children,
  ...rest
}: Grid & FlexboxProps & SpaceProps & LayoutProps) => {
  return (
    <CustomGrid as={tag} {...rest}>
      {children}
    </CustomGrid>
  )
}

interface Grid extends GridProps {
  tag?: 'div' | 'section' | 'form' | 'aside' | 'header' | 'footer'
  children?: ReactNode
}

export default Flex
