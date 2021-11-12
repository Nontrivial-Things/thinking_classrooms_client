import React, { FC, useState } from "react";
import styled from "styled-components";

import { minDevice } from "../../assets/styles/breakpoints";
import Logo from "../Logo";
import P from "../P";
import hamburger from "../../assets/img/icons/menu.svg";
import hamburgerX from "../../assets/img/icons/x.svg";

const NavbarDiv = styled.div`
  height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.16em 0 0.81em;

  &.active {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.08);
  }

  @media ${minDevice.desktopTablet} {
    margin: 0 1.5em 0 1.31em;
    height: 4em;
    box-shadow: none;
  }

  @media ${minDevice.desktopL} {
    margin: 0 6.25em 0 6.06em;
    height: 4.5em;
  }

  @media ${minDevice.desktopXL} {
    margin: 0 12.31em 0 12.5em;
  }
`;
const NavbarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 7em;
  transform: translateY(-150%);
  position: absolute;

  &.active {
    transform: translateY(-0%);
    top: 80px;
  }

  @media ${minDevice.desktopTablet} {
    flex-direction: row;
    transform: translateY(-0%);
    position: relative;
    align-items: center;
  }
`;

const NavbarMenuItem = styled(P)`
  font-size: 0.785em;
  display: flex;

  @media ${minDevice.desktopTablet} {
    display: block;
    &:nth-child(1) {
      margin-right: 1.5em;
    }
  }

  @media ${minDevice.desktopL} {
    font-size: 1em;
    &:nth-child(1) {
      margin-right: 2em;
    }
  }
`;

const HamburgerImg = styled.img`
  width: 0.98em;
  @media ${minDevice.desktopTablet} {
    display: none;
  }
`;

const Navbar: FC = () => {
  const [hamburgerClass, setHamburgerClass] = useState("");
  const [menuClass, setMenuClass] = useState("");
  const [navbarClass, setNavbarClass] = useState("");

  const toggleHamburger = () => {
    if (hamburgerClass === "") {
      setHamburgerClass("active");
      setMenuClass("active");
      setNavbarClass("active");
    } else {
      setHamburgerClass("");
      setMenuClass("");
    }
  };

  return (
    <NavbarDiv className={navbarClass}>
      <Logo isBackgroundDark={false}></Logo>
      <HamburgerImg
        className={hamburgerClass}
        onClick={toggleHamburger}
        src={hamburgerClass === "active" ? hamburgerX : hamburger}
        alt="Hamburger menu icon"
      ></HamburgerImg>
      <NavbarMenu className={menuClass}>
        <NavbarMenuItem>O metodzie</NavbarMenuItem>
        <NavbarMenuItem>Strefa moderatora</NavbarMenuItem>
      </NavbarMenu>
    </NavbarDiv>
  );
};
export default Navbar;
