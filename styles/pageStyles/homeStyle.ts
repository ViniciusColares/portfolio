import styled from "styled-components";
import css from "@styled-system/css";

import { Heading } from "@components/Typo";

export const Title = styled(Heading)(
  css({
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
