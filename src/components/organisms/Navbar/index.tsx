import { FC, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../atoms/Logo";
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
    <S.HeaderWrapper>
      <S.NavbarWrapper className={navbarMenuStyle}>
        <Link to="/">
          <Logo isBackgroundDark={false}></Logo>
        </Link>
        <S.MenuIconButton aria-label="Otwórz menu">
          <S.HamburgerImg
            className={navbarMenuStyle}
            onClick={toggleHamburger}
            src={isNavbarMenuActive ? hamburgerX : hamburger}
            aria-hidden
            alt="Ikona menu"
          ></S.HamburgerImg>
        </S.MenuIconButton>
      </S.NavbarWrapper>
      <S.NavbarMenu className={navbarMenuStyle}>
        <S.NavbarMenuList>
          <Link to="/about">
            <S.NavbarMenuItem>O metodzie</S.NavbarMenuItem>
          </Link>
          <Link to="/moderator">
            <S.NavbarMenuItem>Strefa moderatora</S.NavbarMenuItem>
          </Link>
        </S.NavbarMenuList>
      </S.NavbarMenu>
    </S.HeaderWrapper>
  );
};
export default Navbar;
