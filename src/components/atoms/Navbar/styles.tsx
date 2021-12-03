import styled from "styled-components";

import { minDevice } from "../../../assets/styles/breakpoints";
import { activeLink } from "../../../assets/styles/colors";
import Wrapper from "../Wrapper";

const NavbarDiv = styled(Wrapper)`
  height: 8rem;
  justify-content: space-between;
  align-items: center;

  &.active {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.08);
  }

  @media ${minDevice.desktopTablet} {
    height: 6.4rem;
    box-shadow: none;
  }

  @media ${minDevice.desktopL} {
    height: 7.2rem;
  }
`;
const NavbarMenu = styled.nav`
  transform: translateY(-150%);
  position: absolute;
  z-index: 2;

  @media ${minDevice.desktopTablet} {
    transform: translateY(-0%);
    position: relative;
  }
`;

const NavbarMenuList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 11.2rem;
  transform: translateY(-150%);
  transition: transform 0.5s;
  background-color: white;
  position: absolute;

  &.active {
    transform: translateY(-30%);
    top: 8rem;
    width: 100vw;
    position: absolute;
    z-index: 3;
  }

  @media ${minDevice.desktopTablet} {
    flex-direction: row;
    transform: translateY(-0%);
    transition: none;
    position: relative;
    align-items: center;
    height: auto;
  }
`;

const NavbarMenuItem = styled.li`
  font-size: 1.4rem;
  display: flex;
  position: relative;
  cursor: pointer;
  padding-left: 1.1rem;

  @media ${minDevice.desktopTablet} {
    display: block;
    padding: 0;

    &:nth-child(1) {
      margin-right: 2.4rem;
    }
    &:hover {
      font-weight: 700;
    }

    &.active {
      &::after {
        height: 0.4rem;
        width: 100%;
        background-color: ${activeLink};
        border-radius: 1rem 1rem 0 0;
        content: "";
        position: absolute;
        bottom: -2rem;
        left: 0;
      }
    }
  }

  @media ${minDevice.desktopL} {
    font-size: 1.6rem;
    &:nth-child(1) {
      margin-right: 3.2rem;
    }
  }
`;

const HamburgerImg = styled.img`
  width: 100%;
`;

const MenuIconButton = styled.button`
  border: none;
  background: none;
  padding: 0;
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
