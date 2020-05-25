import styled from "styled-components";
import css from "@styled-system/css";

import { Heading, Text } from "../typo";

export const Title = styled("h1")(
  css({
    ...Heading,
    marginTop: "3vh",
    fontSize: 4,
    textAlign: "center",
    marginBottom: 1,
    "> span": {
      fontSize: 6,
      textAlign: "center",
      color: "accent",
      margin: 0,
    },
  })
);

export const CallToAction = styled("hgroup")(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "> p": {
      ...Text,
      marginBottom: 2,
      fontSize: 2,
    },
  })
);
