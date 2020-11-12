import React, { ReactNode } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import {
  compose,
  flexbox,
  space,
  color,
  typography,
  FlexboxProps,
  SpaceProps,
  ColorProps,
  TypographyProps
} from 'styled-system'

interface IHeading
  extends FlexboxProps,
    SpaceProps,
    ColorProps,
    TypographyProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
}

const CustomHeading = styled.h1<HTMLHeadingElement>(
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
  compose(flexbox, space, color, typography)
)

export const Heading = ({ tag = 'h1', children, ...rest }: IHeading) => {
  return (
    <CustomHeading as={tag} {...rest}>
      {children}
    </CustomHeading>
  )
}

interface IText extends FlexboxProps, SpaceProps, ColorProps, TypographyProps {
  tag?: 'p' | 'span'
  children: ReactNode
}
const CustomText = styled.p<HTMLParagraphElement>(
  css({
    fontFamily: 'text',
    fontSize: 1,
    fontWeight: '300',
    lineHeight: '1.5',
    margin: '0 0 10px 0',
    'strong, span': {
      fontWeight: '500',
      color: 'accent'
    }
  }),
  compose(flexbox, space, color, typography)
)

export const Text = ({ tag = 'p', children, ...rest }: IText) => {
  return (
    <CustomText as={tag} {...rest}>
      {children}
    </CustomText>
  )
}
