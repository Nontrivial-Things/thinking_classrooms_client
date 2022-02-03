import { FC, useState } from "react";
import Link from "next/link";

import { useTranslation } from "react-i18next";

import Logo from "../../atoms/Logo";
import * as S from "./styles";
// import hamburger from "../../../../public/assets/img/icons/menu.svg";
// import hamburgerX from "../../../../public/assets/img/icons/x.svg";

enum NavbarMenuState {
  ACTIVE = "active",
  CLOSED = "closed",
}

const NavbarClass = {
  active: NavbarMenuState.ACTIVE,
  closed: "",
};

const Header: FC = () => {
  const { t } = useTranslation("", { keyPrefix: "header" });

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

  const handleMenuItemClick = () => {
    isNavbarMenuActive && toggleHamburger();
  };

  return (
    <S.HeaderWrapper>
      <S.NavbarWrapper className={navbarMenuStyle}>
        <Link href="/">
          <Logo isBackgroundDark={false}></Logo>
        </Link>
        <S.MenuIconButton aria-label={t("hamburgerAlt")}>
          <S.HamburgerImg
            className={navbarMenuStyle}
            onClick={toggleHamburger}
            // src={isNavbarMenuActive ? hamburgerX : hamburger}
            aria-hidden
            alt={t("menuIconAlt")}
          ></S.HamburgerImg>
        </S.MenuIconButton>
      </S.NavbarWrapper>
      <S.NavbarMenu className={navbarMenuStyle}>
        <S.NavbarMenuList>
          <S.NavbarMenuItem onClick={handleMenuItemClick}>
            <Link
              href="/about"
              // className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("aboutMethodPageLink")}
            </Link>
          </S.NavbarMenuItem>
          <S.NavbarMenuItem onClick={handleMenuItemClick}>
            <Link
              href="/moderator"
              // className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("moderatorPageLink")}
            </Link>
          </S.NavbarMenuItem>
        </S.NavbarMenuList>
      </S.NavbarMenu>
    </S.HeaderWrapper>
  );
};
export default Header;
