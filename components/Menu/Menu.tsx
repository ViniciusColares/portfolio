import React from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import { compose, layout, LayoutProps } from "styled-system";
import { useRouter } from "next/router";

import CloseIcon from "@public/assets/icons/close.svg";
import LogoIcon from "@public/assets/icons/logo.svg";
import ProfileIcon from "@public/assets/icons/profile.svg";
import CodeIcon from "@public/assets/icons/code.svg";
import ContactIcon from "@public/assets/icons/contact.svg";

const Container = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    bg: "accent",
    top: "0px",
    left: "0px",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    zIndex: 0,
  })
);

const BgEffect = styled(LogoIcon)(
  css({
    position: "absolute",
    top: "0px",
    left: "0px",
    minHeight: "100vh",
    minWidth: "100vw",
    zIndex: 0,
    opacity: "0.3",
    path: {
      fill: "accentDark",
      "&:nth-of-type(3)": {
        opacity: 0.75,
      },
    },
  })
);

const CloseMenu = styled("div")<LayoutProps>(
  css({
    position: "absolute",
    right: 4,
    top: 4,
    zIndex: 1,
  }),
  compose(layout)
);

const Nav = styled("nav")(
  css({
    display: "flex",
    zIndex: 1,
  })
);

const MenuList = styled("ul")(
  css({
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5vw",
    zIndex: 1,
    path: {
      fill: "primaryDark",
    },
    "svg:first-of-type path:nth-of-type(3)": {
      opacity: 0.75,
    },
  })
);

const MenuListItem = styled("li")<{ active: boolean }>(
  css({
    display: "flex",
    alignItems: "center",
    height: "52px",
    "> span": {
      color: "primaryDark",
      fontFamily: "heading",
      marginLeft: 4,
      fontSize: 2,
    },
    "&:hover": {
      cursor: "pointer",
    },
    ":not(:last-of-type)": {
      marginBottom: 4,
    },
  }),
  ({ active }) =>
    active &&
    css({
      "::before": {
        content: "''",
        position: "absolute",
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: "10px solid #FFB800",
        top: "0px",
      },
    })
);

const Menu = ({ handleCloseMenu }: { handleCloseMenu: any }) => {
  const router = useRouter();
  const { route } = router;
  const { home, profile, apps, contact } = {
    home: "/",
    profile: "/perfil",
    apps: "/apps",
    contact: "/contato",
  };

  const navigateTo = (endRoute) => endRoute !== route && router.push(endRoute);

  return (
    <Container>
      <BgEffect />
      <CloseMenu display={["flex", , "none"]} onClick={handleCloseMenu}>
        <CloseIcon height="19px" />
      </CloseMenu>
      <Nav>
        <MenuList>
          <MenuListItem
            active={route === home}
            onClick={() => navigateTo(home)}
          >
            <LogoIcon height="33px" />
            <span>Início</span>
          </MenuListItem>
          <MenuListItem
            active={route === profile}
            onClick={() => navigateTo(profile)}
          >
            <ProfileIcon height="33px" />
            <span>Perfil</span>
          </MenuListItem>
          <MenuListItem
            active={route === apps}
            onClick={() => navigateTo(apps)}
          >
            <CodeIcon height="30px" />
            <span>Apps</span>
          </MenuListItem>
          <MenuListItem
            active={route === contact}
            onClick={() => navigateTo(contact)}
          >
            <ContactIcon height="30px" />
            <span>Contato</span>
          </MenuListItem>
        </MenuList>
      </Nav>
    </Container>
  );
};

export default Menu;
