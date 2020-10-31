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
  compose(flexbox, space, color, typography),
  css({
    fontFamily: "heading",
    fontWeight: "100",
    margin: "0",
    strong: {
      fontFamily: "heading",
      color: "accent",
    },
  })
);
export const Heading = ({ tag, children, ...rest }: IHeading) => {
  return (
    <CustomHeading as={tag} {...rest}>
      {children}
    </CustomHeading>
  );
};

Heading.defaulProps = {
  tag: "h1",
};

interface IText extends FlexboxProps, SpaceProps, ColorProps, TypographyProps {
  tag?: ElementType<any>;
  children: ReactNode | ReactNode[];
}
const CustomText = styled.div(
  compose(flexbox, space, color, typography),
  css({
    fontFamily: "text",
    fontWeight: "700",
    fontSize: 1,
    letterSpacing: "0.5px",
    lineHeight: "1.5",
    margin: "0 0 10px 0",
    strong: {
      fontWeight: "700",
      color: "accent",
    },
  })
);

export const Text = ({ tag, children, ...rest }: IText) => {
  return (
    <CustomText as={tag} {...rest}>
      {children}
    </CustomText>
  );
};
