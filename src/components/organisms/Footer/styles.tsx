import styled from "styled-components";

import P from "../../atoms/P";
import { minDevice } from "../../../assets/styles/breakpoints";
import { darkGradientBackground, white } from "../../../assets/styles/colors";

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${darkGradientBackground};
  padding-top: 1em;
  bottom: 0;
`;

const ContactWrapper = styled.div`
  padding-left: 2em;
  margin-top: 1em;
  @media ${minDevice.desktopTablet} {
    margin-top: 0;
    padding-right: calc(83px - 1.5em);
  }
  @media ${minDevice.desktopL} {
    padding-right: calc(246px - 6.25em);
  }
  @media ${minDevice.desktopXL} {
    padding-right: calc(327px - 12.5em);
  }
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
