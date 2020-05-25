import styled from "styled-components";
import css from "@styled-system/css";
import { flexbox, space, layout, border, color } from "styled-system";

export const Page = styled("section")(
  flexbox,
  css({
    background: "url('/assets/bg.png') 0 0 no-repeat fixed",
    backgroundSize: "contain",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  })
);

export const ContentPage = styled("section")(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1,
  })
);

export const Flex = styled("div")(
  layout,
  flexbox,
  space,
  border,
  color,
  css({
    display: "flex",
    position: "relative",
  }),
  ({ spaceChildren, flexDirection }) => {
    switch (flexDirection) {
      case "column":
        return css({
          "> :nth-child(n):not(:last-child)": {
            marginBottom: spaceChildren,
          },
        });
      case "row-reverse":
        return css({
          "> :nth-child(n):not(:last-child)": {
            marginLeft: spaceChildren,
          },
        });
      case "column-reverse":
        return css({
          "> :nth-child(n):not(:last-child)": {
            marginTop: spaceChildren,
          },
        });
      default:
        return css({
          "> :nth-child(n):not(:last-child)": {
            marginRight: spaceChildren,
          },
        });
    }
  }
);
