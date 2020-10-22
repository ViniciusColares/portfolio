import styled from "styled-components";
import css from "@styled-system/css";

import { Flex } from "@styles/core/grid";

export const SectionTitle = styled("h1")(
  css({
    fontFamily: "text",
    display: "flex",
    fontWeight: "600",
    fontSize: 3,
    color: "accent",
    alignItems: "center",
    "> svg": {
      marginRight: 1,
    },
  })
);

export const SectionSubTitle = styled("h2")(
  css({
    fontFamily: "text",
    display: "flex",
    fontWeight: "600",
    fontSize: 2,
    color: "accent",
    alignItems: "center",
    "> svg": {
      marginRight: 1,
    },
  })
);

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
      margin: 0,
      fontSize: 4,
    },
    "> h2": {
      margin: "3px 0",
      fontSize: 2,
      color: "accent",
      "> span": {
        fontWeight: "600",
        color: "primaryDark",
      },
    },
    "> h3": {
      fontSize: 1,
      margin: 0,
    },
  })
);

export const Intro = styled("div")(
  css({
    width: "100%",
    padding: "0 10px",
    "> p": {
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
        fontFamily: "text",
        display: "flex",
        marginTop: 0,
        marginBottom: 3,
        color: "accent",
        fontSize: 2,
        "> svg": {
          width: "18px",
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
    "h3, h4, p": {
      fontFamily: "text",
    },
    ul: {
      paddingLeft: 4,
      listStyle: "none outside none",
      li: {
        position: "relative",
        paddingBottom: 4,
        "&::before": {
          left: "-15px",
          top: "5px",
          width: "8px",
          height: "8px",
          content: "''",
          bg: "contrast",
          borderRadius: "50%",
          position: "absolute",
          zIndex: 1,
        },
        "&::after": {
          left: "-12px",
          top: "5px",
          width: "2px",
          height: "100%",
          content: "''",
          bg: "primaryDark",
          position: "absolute",
        },
        "&:last-of-type::after": {
          left: "3px",
          top: "18px",
          width: "0",
          height: "0",
          fontSize: "3em",
          lineHeight: 0,
          content: "'...'",
          color: "contrast",
          position: "absolute",
          transform: "rotate(90deg)",
        },
        h3: {
          margin: 0,
          fontSize: 3,
          color: "accent",
        },
        h4: {
          my: 1,
          fontSize: 2,
          fontWeight: "bold",
          color: "primaryDark",
        },
        p: {
          margin: 0,
          fontSize: 1,
          lineHeight: 1.5,
        },
      },
    },
  })
);

export const AdditionalInfo = styled(Flex)(
  css({
    flexDirection: "column",
    padding: "0 10px",
    h2: {
      my: 2,
    },
    p: {
      m: 0,
      mb: 3,
      fontSize: 1,
      lineHeight: 1.5,
    },
  })
);
