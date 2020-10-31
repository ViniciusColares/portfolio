import styled from "styled-components";
import css from "@styled-system/css";

export const CallToAction = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "> p": {
      marginBottom: 2,
      fontSize: 2,
    },
  })
);
