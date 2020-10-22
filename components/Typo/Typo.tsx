import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import css from "@styled-system/css";
import { compose, flexbox, space, color, typography } from "styled-system";

interface IHeading {
  tag: string;
  children: object;
}

const CustomHeading = styled.div(
  compose(flexbox, space, color, typography),
  css({
    fontFamily: "heading",
    fontWeight: "100",
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

interface IText {
  tag: string;
  children: object;
}
const CustomText = styled.div(
  compose(flexbox, space, color, typography),
  css({
    fontFamily: "text",
    fontWeight: "700",
    fontSize: "14px",
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
