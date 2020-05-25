import styled from "styled-components";
import css from "@styled-system/css";

import { Heading, Text } from "../typo";

export const Profile = styled("div")(
  css({
    display: "flex",
    marginTop: 6,
    marginBottom: 6,
  })
);

export const Avatar = styled("img")(
  css({
    width: "77px",
    borderRadius: "50%",
    padding: "2px",
    bg: "accent",
    marginRight: 2,
  })
);

export const Info = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "> h1": {
      ...Heading,
      margin: 0,
      fontSize: 4,
    },
    "> h2": {
      ...Text,
      margin: "3px 0",
      fontSize: 2,
      color: "accent",
      "> span": {
        fontWeight: "600",
        color: "primaryDark",
      },
    },
    "> h3": {
      ...Text,
      fontSize: 1,
      margin: 0,
    },
  })
);

export const SectionTitle = styled("h1")(
  css({
    ...Text,
    display: "flex",
    fontWeight: "600",
    fontSize: 3,
    color: "accent",
    "> img": {
      marginRight: 1,
    },
  })
);

export const Intro = styled("div")(
  css({
    width: "100%",
    padding: "0 10px",
    "> p": {
      ...Text,
      fontSize: 2,
      lineHeight: "20px",
      paddingLeft: 3,
      paddingRight: 2,
      "> span": {
        color: "accent",
      },
    },
  })
);

export const Knowledge = styled("div")(
  css({
    width: "100%",
    padding: "0 10px",
    marginTop: 5,
    "> ul": {
      listStyle: "none outside none",
      paddingLeft: 3,
      columnCount: "3",
      columnFill: "balance",
      "> li": {
        ...Text,
        display: "flex",
        marginTop: 0,
        marginBottom: 3,
        color: "accent",
        fontSize: 2,
        "> img": {
          marginRight: 1,
        },
      },
    },
  })
);

export const Timeline = styled("div")(
  css({
    width: "100%",
    padding: "0 10px",
    marginTop: 5,
  })
);
