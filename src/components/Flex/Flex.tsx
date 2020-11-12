import { ReactNode } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import {
  compose,
  flexbox,
  space,
  layout,
  border,
  color,
  FlexboxProps,
  SpaceProps,
  LayoutProps,
  BorderProps,
  ColorProps
} from 'styled-system'

interface IGrid
  extends FlexboxProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    ColorProps {
  tag?: 'div' | 'section'
  spaceChildren?: number
  children: ReactNode
}

const Grid = styled('div')<HTMLDivElement>(
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
  compose(layout, flexbox, space, border, color)
)

const Flex = ({ tag = 'div', children, ...rest }: IGrid) => {
  return (
    <Grid as={tag} {...rest}>
      {children}
    </Grid>
  )
}

export default Flex
