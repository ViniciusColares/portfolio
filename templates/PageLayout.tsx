import React, { useState, ReactNode } from "react";
import { useSpring, animated } from "react-spring";
import { linearGradient } from "polished";
import styled from "styled-components";
import css from "@styled-system/css";
import { compose, layout } from "styled-system";

import Menu from "@components/Menu";
import { Heading } from "@components/Typo";
import { theme, medias } from "@styles/theme";

import MenuIcon from "@public/assets/icons/menu.svg";

export const Template = styled("section")(
  css({
    display: "flex",
    bg: "gray",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    overflow: "hidden",
    ...linearGradient({
      colorStops: [
        `${theme.colors.primary1} 20%`,
        `${theme.colors.primary2} 80%`,
      ],
      toDirection: "to bottom left",
      fallback: theme.colors.primary1,
    }),
  })
);

export const Page = styled(animated.section)(
  css({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
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
      background: "url('/assets/bg.png') center top no-repeat scroll",
      backgroundSize: "contain",
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
      boxShadow: "20px 20px 20px rgba(0,0,0,0.3)",
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

export const MenuTrigger = styled(MenuIcon)(compose(layout));

export const PageTitle = styled(Heading)(
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
      border: "0px solid white",
      borderRadius: "0px",
      transform: "scale(1) translateX(0%)",
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)",
    },
    to: async (next) => {
      if (openMenu === true) {
        await next({
          border: "5px solid white",
          borderRadius: "16px",
          transform: "scale(0.8) translateX(0%)",
          boxShadow: "-20px 20px 20px rgba(0,0,0,0.3)",
        }),
          await next({
            border: "5px solid white",
            borderRadius: "16px",
            transform: "scale(0.8) translateX(55%)",
            boxShadow: "-20px 20px 20px rgba(0,0,0,0.3)",
          });
      } else if (openMenu === false) {
        await next({
          border: "0px solid white",
          borderRadius: "16px",
          transform: "scale(0.8) translateX(0%)",
          boxShadow: "0 0 0 rgba(0,0,0,0.3)",
        }),
          await next({
            border: "0px solid white",
            borderRadius: "0px",
            transform: "scale(1) translateX(0%)",
            boxShadow: "0 0 0 rgba(0,0,0,0.3)",
          });
      }
    },
    config: {
      tension: 512,
      friction: 56,
      velocity: 56,
    },
  });

  return (
    <Template>
      {!noHeader && <Menu handleCloseMenu={() => setOpenMenu(false)} />}
      <Page onClick={() => openMenu && setOpenMenu(false)} style={animation}>
        {!noHeader && (
          <Header>
            <MenuTrigger
              display={["flex", , "none"]}
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
