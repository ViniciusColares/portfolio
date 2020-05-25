import React from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import PropTypes from "prop-types";
import { variant, space } from "styled-system";

const Button = ({ name, variant, action, type, icon, ...restProps }) => {
  return (
    <ButtonStyle variant={variant} onClick={action} type={type} {...restProps}>
      {icon && <img alt={name} src={icon} />}
      {name}
    </ButtonStyle>
  );
};

const ButtonStyle = styled("button")(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "135px",
    whiteSpace: "nowrap",
    fontFamily: "text",
    bg: "accent",
    padding: "8px 25px",
    fontSize: 1,
    fontWeight: 600,
    color: "primaryDark",
    textAlign: "center",
    borderRadius: "40px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
    "&: hover": {
      bg: "accentDark",
    },
    "> img": {
      marginRight: 2,
    },
  }),
  space,
  variant({
    variants: {
      small: {
        minWidth: "auto",
        padding: "5px 16px",
        fontSize: 0,
      },
      big: {
        minWidth: "180px",
        padding: "20px 40px",
        fontSize: 3,
      },
      disabled: {
        border: "none",
        background: "none",
        backgroundColor: "grayDefaultColor",
        color: "blackLight",
        cursor: "not-allowed",
        "&:hover": {
          border: "none",
          color: "inherit",
          background: "none",
          bg: "grayDefaultColor",
        },
      },
      transparent: {
        background: "none",
        backgroundColor: "transparent",
        color: "defaultColor",
        "&:hover": {
          backgroundColor: "focusInput",
        },
      },
    },
  })
);

Button.defaultProps = {
  type: "button",
  name: "Custom Button",
  variant: [],
  isLoading: false,
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.arrayOf(PropTypes.string),
  action: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Button;
