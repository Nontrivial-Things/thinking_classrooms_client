import styled from "styled-components";

import { minDevice } from "../../assets/styles/breakpoints";
import { activeLink } from "../../assets/styles/colors";

const NavbarDiv = styled.div`
  height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.active {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.08);
  }

  @media ${minDevice.desktopTablet} {
    height: 4em;
    box-shadow: none;
  }

  @media ${minDevice.desktopL} {
    height: 4.5em;
  }
`;
const NavbarMenu = styled.nav`
  transform: translateY(-150%);
  position: absolute;

  @media ${minDevice.desktopTablet} {
    transform: translateY(-0%);
    position: relative;
  }
`;

const NavbarMenuList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 7em;
  transform: translateY(-150%);
  position: absolute;

  &.active {
    transform: translateY(-30%);
    top: 80px;
  }

  @media ${minDevice.desktopTablet} {
    flex-direction: row;
    transform: translateY(-0%);
    position: relative;
    align-items: center;
  }
`;

const NavbarMenuItem = styled.li`
  font-size: 0.785em;
  display: flex;
  position: relative;
  cursor: pointer;
  padding-left: 0.69em;

  @media ${minDevice.desktopTablet} {
    display: block;
    padding: 0;

    &:nth-child(1) {
      margin-right: 1.5em;
    }
    &:hover {
      font-weight: 700;
    }

    &.active {
      &::after {
        height: 0.25em;
        width: 100%;
        background-color: ${activeLink};
        border-radius: 0.625em 0.625em 0px 0px;
        content: "";
        position: absolute;
        bottom: -1.25em;
        left: 0;
      }
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
`;

const MenuIconButton = styled.button`
  border: none;
  background: none;
  @media ${minDevice.desktopTablet} {
    display: none;
  }
`;

export {
  NavbarDiv,
  NavbarMenu,
  NavbarMenuList,
  NavbarMenuItem,
  HamburgerImg,
  MenuIconButton,
};
