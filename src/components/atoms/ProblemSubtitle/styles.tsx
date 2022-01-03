import styled from "styled-components";

import { SubtitleHeaderStyleProps } from "./interface";
import Wrapper from "../Wrapper";
import { minDevice } from "../../../assets/styles/breakpoints";
import { blue200, grey100 } from "../../../assets/styles/colors";

const SubtitleWrapper = styled(Wrapper)`
  color: ${grey100};
  text-align: left;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
  margin-bottom: 1.6rem;
  padding: 0;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 0.5px solid ${grey100};
    top: 0;
    bottom: 0;
    @media ${minDevice.desktopTablet} {
      padding: 0;
    }

    @media ${minDevice.desktopL} {
      padding: 0;
    }

    @media ${minDevice.desktopXL} {
      padding: 0;
    }
  }
`;

const SubtitleHeader = styled.h4<SubtitleHeaderStyleProps>`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin-bottom: 0.8rem;
  color: ${(props) => props.color || blue200};
`;

export { SubtitleWrapper, SubtitleHeader };
