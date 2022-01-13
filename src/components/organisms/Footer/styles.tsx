import styled from "styled-components";

import P from "../../atoms/P";
import { minDevice } from "../../../assets/styles/breakpoints";
import { darkGradientBackground, white } from "../../../assets/styles/colors";

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${darkGradientBackground};
  padding-top: 1.6rem;
  min-height: 15.2rem;
  margin-top: auto;
  @media ${minDevice.desktopTablet} {
    min-height: 12.8rem;
  }
  @media ${minDevice.desktopL} {
    min-height: 16rem;
  }
`;

const ContactWrapper = styled.div`
  padding-left: 3.2rem;
  margin-top: 1.6rem;
  @media ${minDevice.desktopTablet} {
    margin-top: 0;
    padding-right: 5.9rem;
  }
  @media ${minDevice.desktopL} {
    padding-right: 14.6rem;
  }
  @media ${minDevice.desktopXL} {
    padding-right: 12.7rem;
  }
`;

const FooterP = styled(P)`
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 700;
  color: ${white};
  @media ${minDevice.desktopTablet} {
    font-size: 2rem;
    line-height: 3.2rem;
  }
  @media ${minDevice.desktopL} {
    font-size: 2.4rem;
    line-height: 4.8rem;
  }
`;

const MailIcon = styled.img`
  width: 1.2rem;

  @media ${minDevice.desktopTablet} {
    width: 1.6rem;
  }
`;

const MailA = styled.a`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${white};
  &:hover {
    text-decoration-line: underline;
  }
  @media ${minDevice.desktopTablet} {
    font-size: 1.6rem;
    line-height: 3.2rem;
  }
`;

export { FooterWrapper, ContactWrapper, FooterP, MailIcon, MailA };
