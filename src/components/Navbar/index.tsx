import { FC, useState } from "react";

import Logo from "../Logo";
import {
  NavbarDiv,
  NavbarMenu,
  NavbarMenuList,
  NavbarMenuItem,
  HamburgerImg,
  MenuIconButton,
} from "./styledComponents";
import hamburger from "../../assets/img/icons/menu.svg";
import hamburgerX from "../../assets/img/icons/x.svg";

enum NavbarMenuState {
  ACTIVE = "active",
  CLOSED = "closed",
}

const NavbarClass = {
  active: NavbarMenuState.ACTIVE,
  closed: "",
};

const Navbar: FC = () => {
  const [navbarMenuState, setNavbarMenuState] = useState<NavbarMenuState>(
    NavbarMenuState.CLOSED
  );

  const isNavbarMenuActive = navbarMenuState === NavbarMenuState.ACTIVE;

  const toggleHamburger = () => {
    isNavbarMenuActive
      ? setNavbarMenuState(NavbarMenuState.CLOSED)
      : setNavbarMenuState(NavbarMenuState.ACTIVE);
  };

  const navbarMenuStyle = isNavbarMenuActive
    ? NavbarClass.active
    : NavbarClass.closed;

  return (
    <NavbarDiv className={navbarMenuStyle}>
      <Logo isBackgroundDark={false}></Logo>
      <MenuIconButton aria-label="Otwórz menu">
        <HamburgerImg
          className={navbarMenuStyle}
          onClick={toggleHamburger}
          src={isNavbarMenuActive ? hamburgerX : hamburger}
          aria-hidden
          alt="Ikona menu"
        ></HamburgerImg>
      </MenuIconButton>
      <NavbarMenu>
        <NavbarMenuList className={navbarMenuStyle}>
          <NavbarMenuItem>O metodzie</NavbarMenuItem>
          <NavbarMenuItem>Strefa moderatora</NavbarMenuItem>
        </NavbarMenuList>
      </NavbarMenu>
    </NavbarDiv>
  );
};
export default Navbar;
