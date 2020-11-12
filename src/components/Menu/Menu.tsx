import React from "react";
import { useRouter } from "next/router";

import CloseIcon from "@public/assets/icons/close.svg";
import LogoIcon from "@public/assets/icons/logo.svg";
import ProfileIcon from "@public/assets/icons/profile.svg";
import CodeIcon from "@public/assets/icons/code.svg";
import ContactIcon from "@public/assets/icons/contact.svg";

import {
  Container,
  BgEffect,
  CloseMenu,
  Nav,
  MenuList,
  MenuListItem,
} from "./MenuStyle";

const Menu = () => {
  const router = useRouter();
  const { asPath } = router;
  const { home, profile, apps, contact } = {
    home: "/",
    profile: "/perfil",
    apps: "/apps",
    contact: "/contato",
  };

  const navigateTo = (endRoute) => endRoute !== asPath && router.push(endRoute);
  console.log(asPath);

  return (
    <Container>
      <BgEffect />
      <CloseMenu
        display={["flex", "flex", "none"]}
        onClick={() => alert("dispatch close menu")}
      >
        <CloseIcon height="19px" />
      </CloseMenu>
      <Nav>
        <MenuList>
          <MenuListItem
            active={asPath === home}
            onClick={() => navigateTo(home)}
          >
            <LogoIcon height="33px" />
            <span>Início</span>
          </MenuListItem>
          <MenuListItem
            active={asPath === profile}
            onClick={() => navigateTo(profile)}
          >
            <ProfileIcon height="33px" />
            <span>Perfil</span>
          </MenuListItem>
          <MenuListItem
            active={asPath === apps}
            onClick={() => navigateTo(apps)}
          >
            <CodeIcon height="30px" />
            <span>Apps</span>
          </MenuListItem>
          <MenuListItem
            active={asPath === contact}
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
