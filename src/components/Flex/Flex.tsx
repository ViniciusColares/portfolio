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

type GridProps = { spaceChildren?: number; flexDirection?: string }

type GridFC = React.FC<HTMLDivElement> & GridProps
const CustomGrid = styled('div')<GridFC>(
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
interface Grid extends GridProps {
  tag?: 'div' | 'section' | 'form'
  children?: ReactNode
}
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

export default Flex
