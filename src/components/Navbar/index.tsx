import React, { FC, useState } from 'react';

import Logo from '../Logo';
import { NavbarDiv, NavbarMenu, NavbarMenuItem, HamburgerImg } from './styledComponents';
import hamburger from '../../assets/img/icons/menu.svg';
import hamburgerX from '../../assets/img/icons/x.svg';

enum NavbarMenuState {
  ACTIVE = 'active',
  CLOSED = 'closed',
}

type NavbarClassType = {
  [key: string]: NavbarMenuState.ACTIVE | '';
};

const NavbarClass: NavbarClassType = {
  active: NavbarMenuState.ACTIVE,
  closed: '',
};

const Navbar: FC = () => {
  const [navbarMenuState, setNavbarMenuState] = useState<NavbarMenuState>(NavbarMenuState.CLOSED);

  const isNavbarMenuActive = navbarMenuState === NavbarMenuState.ACTIVE;

  const toggleHamburger = () => {
    isNavbarMenuActive ? setNavbarMenuState(NavbarMenuState.CLOSED) : setNavbarMenuState(NavbarMenuState.ACTIVE);
  };

  const navbarMenuStyle = isNavbarMenuActive ? NavbarClass.active : NavbarClass.closed;

  return (
    <NavbarDiv className={navbarMenuStyle}>
      <Logo isBackgroundDark={false}></Logo>
      <HamburgerImg
        className={navbarMenuStyle}
        onClick={toggleHamburger}
        src={isNavbarMenuActive ? hamburgerX : hamburger}
        alt="Hamburger menu icon"
      ></HamburgerImg>
      <NavbarMenu className={navbarMenuStyle}>
        <NavbarMenuItem>O metodzie</NavbarMenuItem>
        <NavbarMenuItem>Strefa moderatora</NavbarMenuItem>
      </NavbarMenu>
    </NavbarDiv>
  );
};
export default Navbar;
