import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import { theme, medias } from "@styles/theme";
import { linearGradient } from "polished";
import { useSpring, animated } from "react-spring";

import Menu from "@components/Menu";
import MenuIcon from "@public/assets/icons/menu.svg";

export const Template = styled("section")(
  css({
    display: "flex",
    bg: "gray",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    ...linearGradient({
      colorStops: [
        `${theme.colors.primary1} 20%`,
        `${theme.colors.primary2} 80%`,
      ],
      toDirection: "to bottom left",
      fallback: theme.colors.primary1,
    }),
    [medias("sm")]: {
      "&::before, &::after": {
        content: "''",
        position: "absolute",
        display: "block",
      },
      "&::before": {
        top: 0,
        left: 0,
        width: "600px",
        height: "455px",
        background:
          "url('/assets/bg-top-left-bandage.png') left top no-repeat fixed",
      },
      "&::after": {
        right: 0,
        bottom: 0,
        width: "563px",
        height: "458px",
        background:
          "url('/assets/bg-bottom-right-bandage.png') right bottom no-repeat fixed",
      },
    },
  })
);

export const Page = styled(animated.section)(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    overflow: "auto",
    zIndex: 1,
    ...linearGradient({
      colorStops: [
        `${theme.colors.primary1} 20%`,
        `${theme.colors.primary2} 90%`,
      ],
      toDirection: "to bottom",
      fallback: theme.colors.primary1,
    }),
    "&::before": {
      content: "''",
      background: "url('/assets/bg.png') 0 0 no-repeat fixed",
      backgroundSize: "contain",
      backgroundAttachment: "fixed",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: -1,
    },
    [medias("sm")]: {
      width: "470px",
      height: "80vh",
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "white",
      borderRadius: "16px !important",
      boxShadow: "20px 20px 0 rgba(0,0,0,0.4)",
    },
  })
);

export const Header = styled("header")(
  css({
    position: "relative",
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    ".menu-trigger": {
      content: "''",
      position: "absolute",
      left: 4,
    },
  })
);

export const PageTitle = styled("h1")(
  css({
    fontFamily: "heading",
    justifySelf: "center",
    margin: 0,
    fontSize: 1,
    lineHeight: "18px",
    fontWeight: 100,
  })
);

const PageLayout = ({
  noHeader,
  pageTitle,
  children,
}: {
  noHeader?: boolean;
  pageTitle?: string;
  children: ReactNode[];
}) => {
  const [openMenu, setOpenMenu] = useState(null);
  const animation = useSpring<{
    from: {
      borderRadius: string;
      transform: string;
    };
    to: unknown;
    config: any;
  }>({
    from: {
      borderRadius: "0px",
      transform: "scale(1) translateX(0%)",
    },
    to: async (next) => {
      if (openMenu === true) {
        await next({
          borderRadius: "16px",
          transform: "scale(0.8) translateX(0%)",
        }),
          await next({
            borderRadius: "16px",
            transform: "scale(0.8) translateX(55%)",
          });
      } else if (openMenu === false) {
        await next({
          borderRadius: "16px",
          transform: "scale(0.8) translateX(0%)",
        }),
          await next({
            borderRadius: "0px",
            transform: "scale(1) translateX(0%)",
          });
      }
    },
    config: {
      tension: 512,
      friction: 32,
      velocity: 8,
      easing: "ease-out",
    },
  });

  return (
    <Template>
      {!noHeader && <Menu handleCloseMenu={() => setOpenMenu(false)} />}
      <Page style={animation}>
        {!noHeader && (
          <Header>
            <MenuIcon
              onClick={() => setOpenMenu(true)}
              className="menu-trigger"
            />
            <PageTitle>{pageTitle}</PageTitle>
          </Header>
        )}
        {children}
      </Page>
    </Template>
  );
};

export default PageLayout;
