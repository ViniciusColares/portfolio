import styled from "styled-components";
import css from "@styled-system/css";
import { compose, variant, space, VariantArgs } from "styled-system";

export const ButtonStyle = styled.button<VariantArgs>(
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
    fontWeight: 500,
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
  variant({
    prop: "size",
    variants: {
      small: {
        minWidth: "auto",
        padding: "5px 16px",
        fontSize: 0,
      },
      big: {
        minWidth: "180px",
        padding: "20px 40px",
        fontSize: 2,
      },
    },
  }),
  variant({
    prop: "state",
    variants: {
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
    },
  }),
  variant({
    prop: "fill",
    variants: {
      border: {
        background: "none",
        backgroundColor: "transparent",
        color: "defaultColor",
        "&:hover": {
          backgroundColor: "focusInput",
        },
      },
    },
  }),
  compose(space)
);
