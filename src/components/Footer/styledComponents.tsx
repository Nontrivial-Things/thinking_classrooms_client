import styled from "styled-components";

import P from "../P";
import { minDevice } from "../../assets/styles/breakpoints";
import { darkGradientBackground, white } from "../../assets/styles/colors";

const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  background: ${darkGradientBackground};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em;
  margin: 1em;
  @media ${minDevice.desktopTablet} {
    flex-direction: row;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2em;
`;

const FooterP = styled(P)`
  font-size: 0.875em;
  font-weight: 700;
  color: ${white};
  @media ${minDevice.desktopTablet} {
    font-size: 1.25em;
  }
  @media ${minDevice.desktopL} {
    font-size: 1.5em;
  }
  @media ${minDevice.desktopXL} {
    font-size: 2em;
  }
`;

const MailA = styled.a`
  font-size: 0.75em;
  font-weight: 400;
  color: ${white};
  @media ${minDevice.desktopTablet} {
    font-size: 1em;
  }
  @media ${minDevice.desktopL} {
    font-size: 1.25em;
  }
  @media ${minDevice.desktopXL} {
    font-size: 2em;
  }
`;

export { FooterWrapper, Wrapper, ContactWrapper, FooterP, MailA };
