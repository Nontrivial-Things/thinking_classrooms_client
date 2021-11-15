import styled from "styled-components";

import P from "../P";
import { minDevice } from "../../assets/styles/breakpoints";
import { darkGradientBackground, white } from "../../assets/styles/colors";

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  background: ${darkGradientBackground};
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
  &:hover {
    text-decoration-line: underline;
  }
  @media ${minDevice.desktopTablet} {
    font-size: 1em;
    line-height: 2em;
  }
`;

export { FooterWrapper, ContactWrapper, FooterP, MailA };
