import styled from "styled-components";

import Wrapper from "../../atoms/Wrapper";

import { minDevice } from "../../../../public/assets/styles/breakpoints";
import { blue100, white } from "../../../../public/assets/styles/colors";

const HeaderWrapper = styled.header`
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 11;
  display: flex;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.08);
`;

const NavbarWrapper = styled(Wrapper)`
  width: 100%;
  z-index: 12;
  background: ${white};
  padding-top: 3.2rem;
  padding-bottom: 1.6rem;
  box-sizing: border-box;

  &.active {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.08);
  }

  @media ${minDevice.desktopTablet} {
    height: 6.4rem;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
  }

  @media ${minDevice.desktopL} {
    height: 7.2rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }
`;
const NavbarMenu = styled.nav`
  transform: translateY(-150%);
  position: absolute;
  z-index: 2;
  height: 11.2rem;
  transform: translateY(-150%);
  transition: transform 0.5s;
  background-color: ${white};
  display: flex;

  &.active {
    transform: translateY(0%);
    top: 8rem;
    width: 100vw;
    z-index: 3;
  }

  @media ${minDevice.desktopTablet} {
    transform: translateY(0);
    position: relative;
    padding-right: 2.4rem;
    height: auto;
  }

  @media ${minDevice.desktopL} {
    padding-right: 10rem;
  }

  @media ${minDevice.desktopXL} {
    padding-right: 20rem;
  }
`;

const NavbarMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 2rem;

  @media ${minDevice.desktopTablet} {
    flex-direction: row;
    transform: translateY(-0%);
    transition: none;
    align-items: center;
    height: auto;
    white-space: nowrap;
    width: auto;
  }
`;

const NavbarMenuItem = styled.li`
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;

  @media ${minDevice.desktopTablet} {
    display: block;

    &:nth-child(1) {
      margin-right: 2.4rem;
    }
    &:hover {
      font-weight: 700;
    }
  }

  a {
    &.active {
      &::after {
        height: 0.4rem;
        width: 100%;
        background-color: ${blue100};
        border-radius: 1rem 1rem 0 0;
        content: "";
        position: absolute;
        bottom: -2.5rem;
        left: 0;
        display: none;

        @media ${minDevice.desktopTablet} {
          display: block;
        }
        @media ${minDevice.desktopL} {
          bottom: -2.8rem;
        }
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
  HeaderWrapper,
  NavbarWrapper,
  NavbarMenu,
  NavbarMenuList,
  NavbarMenuItem,
  HamburgerImg,
  MenuIconButton,
};
