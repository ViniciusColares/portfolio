import styled from "styled-components";
import css from "@styled-system/css";
import { Flex } from "@styles/core/grid";
import { Heading } from "@components/Typo";
import { theme } from "@styles/theme";

export const SectionTitle = styled(Heading)(
  css({
    position: "relative",
    display: "flex",
    fontWeight: 400,
    fontSize: 2,
    color: "accent",
    alignItems: "center",
    width: "fit-content",
    marginBottom: 2,
    "> svg": {
      marginRight: 1,
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "calc(100% + 40px)",
      height: "30px",
      borderRadius: "10px",
      bg: "primaryDark",
      left: "-30px",
      bottom: "-3px",
      zIndex: "-1",
    },
  })
);

export const Profile = styled(Flex)(
  css({
    ".avatar": {
      borderRadius: "50%",
      border: `3px solid ${theme.colors.accent} !important`,
    },
  })
);

export const SectionSubTitle = styled(Heading)(
  css({
    display: "flex",
    fontSize: 2,
    color: "accent",
    alignItems: "center",
    "> svg": {
      marginRight: 2,
    },
  })
);

export const Info = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 2,
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
    padding: "0 15px",
    "> p": {
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
    padding: "0 15px",
    marginTop: 5,
    "> ul": {
      listStyle: "none outside none",
      paddingLeft: 0,
      columnCount: "3",
      columnFill: "balance",
      mb: 0,
      "> li": {
        fontFamily: "text",
        display: "flex",
        alignItems: "center",
        marginTop: 0,
        marginBottom: 3,
        color: "accent",
        fontWeight: 500,
        fontSize: 0,
        "> svg": {
          width: "20px",
          height: "20px",
          marginRight: 2,
        },
      },
    },
  })
);

export const Timeline = styled("div")(
  css({
    width: "100%",
    padding: "0 15px",
    marginTop: 5,
    ul: {
      paddingLeft: 3,
      marginTop: 2,
      listStyle: "none outside none",
      li: {
        position: "relative",
        pb: 5,
        "&::before": {
          left: "-15px",
          top: "10px",
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
          top: "10px",
          width: "2px",
          height: "100%",
          content: "''",
          bg: "primaryDark",
          position: "absolute",
        },
        "&:last-of-type::after": {
          left: "3px",
          top: "22px",
          width: "0",
          height: "0",
          fontSize: "3.2em",
          lineHeight: 0,
          content: "'...'",
          color: "contrast",
          position: "absolute",
          transform: "rotate(90deg)",
        },
        "h3, h4": {
          display: "inline-flex",
          fontSize: 1,
        },
        h3: {
          color: "accent",
          mr: 2,
          pt: 1,
        },
        h4: {
          color: "primaryDark",
        },
        h5: {
          mb: 2,
          fontSize: 1,
          fontWeight: "bold",
          fontFamily: "text",
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
    padding: "0 15px",
    p: {
      m: 0,
      mb: 3,
      fontSize: 1,
      lineHeight: 1.5,
    },
  })
);

export const DuolingoSection = styled("section")(
  css({
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 30px)",
    background: "#F1F1F1",
    boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.35)",
    borderRadius: "6px",
    p: 3,
    my: 6,
    header: {
      display: "flex",
      width: "fit-content",
      alignSelf: "center",
      alignItems: "flex-end",
      marginTop: "-55px",
      cursor: "pointer",
      "> div:first-of-type": {
        zIndex: 1,
      },
      "> div:last-of-type": {
        backgroundColor: "white",
        padding: "10px 25px",
        borderRadius: "50px",
        marginLeft: "-20px",
        boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.15)",
      },
    },
    ".duolingo-avatar": {
      borderRadius: "50%",
      border: "4px solid #78C800 !important",
    },
    span: {
      color: "black",
    },
  })
);

export const TotalExp = styled(Flex)(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    span: {
      mb: 0,
    },
  })
);

export const LangInfo = styled(Flex)(
  css({
    mt: 3,
  })
);

export const LangCol = styled(Flex)(
  css({
    alignItems: "center",
    "> span:first-of-type": {
      fontSize: 2,
      fontWeight: 500,
    },
  })
);

export const ExpCol = styled(Flex)(
  css({
    alignItems: "center",
    span: {
      fontWeight: 500,
      "&:first-of-type": {
        fontSize: 2,
      },
      "&:not(:first-of-type)": {
        lineHeight: "40px",
      },
    },
  })
);

export const CrownsCol = styled(Flex)(
  css({
    alignItems: "center",
    "> span": {
      lineHeight: "40px",
      fontWeight: 500,
    },
  })
);
