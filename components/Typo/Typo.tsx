import React, { ElementType, ReactNode } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import {
  compose,
  flexbox,
  space,
  color,
  typography,
  FlexboxProps,
  SpaceProps,
  ColorProps,
  TypographyProps,
} from "styled-system";

interface IHeading
  extends FlexboxProps,
    SpaceProps,
    ColorProps,
    TypographyProps {
  tag?: ElementType<any>;
  children: ReactNode | ReactNode[];
}
const CustomHeading = styled.div(
  css({
    letterSpacing: "0.7px",
    fontFamily: "heading",
    fontWeight: "100",
    lineHeight: 1.4,
    margin: "0",
    strong: {
      fontFamily: "heading",
      color: "accent",
    },
  }),
  compose(flexbox, space, color, typography)
);
export const Heading = ({ tag, children, ...rest }: IHeading) => {
  return (
    <CustomHeading as={tag} {...rest}>
      {children}
    </CustomHeading>
  );
};

Heading.defaultProps = {
  tag: "h1",
};

interface IText extends FlexboxProps, SpaceProps, ColorProps, TypographyProps {
  tag?: ElementType<any>;
  children: ReactNode | ReactNode[];
}
const CustomText = styled.div(
  css({
    fontFamily: "text",
    fontSize: 1,
    fontWeight: "300",
    lineHeight: "1.5",
    margin: "0 0 10px 0",
    "strong, span": {
      fontWeight: "700",
      color: "accent",
    },
  }),
  compose(flexbox, space, color, typography)
);

export const Text = ({ tag, children, ...rest }: IText) => {
  return (
    <CustomText as={tag} {...rest}>
      {children}
    </CustomText>
  );
};

Text.defaultProps = {
  tag: "p",
};
