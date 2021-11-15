import React, { FC, useState } from "react";

import Logo from "../Logo";
import {
  NavbarDiv,
  NavbarMenu,
  NavbarMenuItem,
  HamburgerImg,
} from "./styledComponents";
import hamburger from "../../assets/img/icons/menu.svg";
import hamburgerX from "../../assets/img/icons/x.svg";

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
