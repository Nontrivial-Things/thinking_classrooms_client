import { FC, useState } from "react";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import Logo from "../../atoms/Logo";
import * as S from "./styles";
import Hamburger from "../../../public/assets/img/icons/menu.svg";
import HamburgerX from "../../../public/assets/img/icons/x.svg";

enum NavbarMenuState {
  ACTIVE = "active",
  CLOSED = "closed",
}

const NavbarClass = {
  active: NavbarMenuState.ACTIVE,
  closed: "",
};

const Header: FC = () => {
  const t = useTranslations("Header");

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

  const navigate = useRouter();

  return (
    <S.HeaderWrapper>
      <S.NavbarWrapper className={navbarMenuStyle}>
        <Logo isBackgroundDark={false} />
        <S.MenuIconButton aria-label={t("hamburgerAlt")}>
          {isNavbarMenuActive ? (
            <HamburgerX
              className={navbarMenuStyle}
              onClick={toggleHamburger}
              aria-hidden
              alt={t("menuIconAlt")}
            ></HamburgerX>
          ) : (
            <Hamburger
              className={navbarMenuStyle}
              onClick={toggleHamburger}
              aria-hidden
              alt={t("menuIconAlt")}
            ></Hamburger>
          )}
        </S.MenuIconButton>
      </S.NavbarWrapper>
      <S.NavbarMenu className={navbarMenuStyle}>
        <S.NavbarMenuList>
          <S.NavbarMenuItem
            onClick={handleMenuItemClick}
            className={navigate.pathname === "/about-method" ? "active" : ""}
          >
            <Link href="/about-method">{t("aboutMethodPageLink")}</Link>
          </S.NavbarMenuItem>
          <S.NavbarMenuItem
            onClick={handleMenuItemClick}
            className={
              navigate.pathname === "/moderator" ||
              navigate.pathname === "/login"
                ? "active"
                : ""
            }
          >
            <Link href="/moderator">{t("moderatorPageLink")}</Link>
          </S.NavbarMenuItem>
        </S.NavbarMenuList>
      </S.NavbarMenu>
    </S.HeaderWrapper>
  );
};
export default Header;
