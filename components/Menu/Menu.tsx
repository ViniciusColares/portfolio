import React from "react";
import styled from "styled-components";
import css from "@styled-system/css";

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
    height: "100%",
    width: "198%",
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

const CloseMenu = styled("div")(
  css({
    position: "absolute",
    right: 6,
    top: 6,
    zIndex: 1,
  })
);

const Nav = styled("nav")(
  css({
    display: "flex",
    flexDirection: "column",
    paddingLeft: 7,
    zIndex: 1,
    path: {
      fill: "primaryDark",
    },
    "svg:first-of-type path:nth-of-type(3)": {
      opacity: 0.75,
    },
  })
);

const NavItem = styled("div")(
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

const Menu = ({ handleCloseMenu }) => {
  const router = useRouter();
  const { route } = router;
  const { home, profile, apps, contact } = {
    home: "/",
    profile: "/perfil",
    apps: "/apps",
    contact: "/contato",
  };

  return (
    <Container>
      <BgEffect />
      <CloseMenu onClick={handleCloseMenu}>
        <CloseIcon height="19px" />
      </CloseMenu>
      <Nav>
        <NavItem active={route === home} onClick={() => router.push(home)}>
          <LogoIcon height="33px" />
          <span>Início</span>
        </NavItem>
        <NavItem
          active={route === profile}
          onClick={() => router.push(profile)}
        >
          <ProfileIcon height="33px" />
          <span>Perfil</span>
        </NavItem>
        <NavItem active={route === apps} onClick={() => router.push(apps)}>
          <CodeIcon height="30px" />
          <span>Apps</span>
        </NavItem>
        <NavItem
          active={route === contact}
          onClick={() => router.push(contact)}
        >
          <ContactIcon height="30px" />
          <span>Contato</span>
        </NavItem>
      </Nav>
    </Container>
  );
};

export default Menu;
