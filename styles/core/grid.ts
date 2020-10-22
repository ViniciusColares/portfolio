import styled from "styled-components";
import css from "@styled-system/css";
import { compose, flexbox, space, layout, border, color } from "styled-system";

export const Flex = styled("div")(
  compose(layout, flexbox, space, border, color),
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
