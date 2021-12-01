import { FC, useState } from "react";

import Logo from "../Logo";
import * as S from "./styles";
import hamburger from "../../../assets/img/icons/menu.svg";
import hamburgerX from "../../../assets/img/icons/x.svg";

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
    <S.NavbarDiv className={navbarMenuStyle}>
      <Logo isBackgroundDark={false}></Logo>
      <S.MenuIconButton aria-label="Otwórz menu">
        <S.HamburgerImg
          className={navbarMenuStyle}
          onClick={toggleHamburger}
          src={isNavbarMenuActive ? hamburgerX : hamburger}
          aria-hidden
          alt="Ikona menu"
        ></S.HamburgerImg>
      </S.MenuIconButton>
      <S.NavbarMenu>
        <S.NavbarMenuList className={navbarMenuStyle}>
          <S.NavbarMenuItem>O metodzie</S.NavbarMenuItem>
          <S.NavbarMenuItem>Strefa moderatora</S.NavbarMenuItem>
        </S.NavbarMenuList>
      </S.NavbarMenu>
    </S.NavbarDiv>
  );
};
export default Navbar;
