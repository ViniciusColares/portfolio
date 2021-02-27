import React, { ReactNode } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import {
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'

type H = React.FC<HTMLHeadingElement>
const CustomHeading = styled.h1<H>(
  css({
    letterSpacing: '0.7px',
    fontFamily: 'heading',
    fontWeight: '100',
    lineHeight: 1.4,
    margin: '0',
    strong: {
      fontFamily: 'heading',
      color: 'accent'
    }
  }),
  compose(space, color, typography)
)
interface Heading extends SpaceProps, TypographyProps, ColorProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: string
  children: ReactNode
}
const Heading = ({ tag = 'h1', children, ...rest }: Heading) => {
  return (
    <CustomHeading as={tag} {...rest}>
      {children}
    </CustomHeading>
  )
}

type T = React.FC<HTMLParagraphElement>
const CustomText = styled.p<T>(
  css({
    fontFamily: 'text',
    fontSize: 2,
    fontWeight: '400',
    lineHeight: '1.5',
    margin: '0 0 12px 0',
    'strong, span': {
      fontWeight: '500',
      color: 'accent'
    }
  }),
  ({ color }) => color && css({ color }),
  compose(space, color, typography)
)
interface Text extends SpaceProps, TypographyProps, ColorProps {
  tag?: 'p' | 'span' | 'a'
  color?: string
  children: ReactNode
}
const Text = ({ tag = 'p', children, ...rest }: Text) => {
  return (
    <CustomText as={tag} {...rest}>
      {children}
    </CustomText>
  )
}

export { Heading, Text }
