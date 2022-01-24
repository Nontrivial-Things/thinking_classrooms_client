import styled from "styled-components";

import {
  primaryBackground,
  blue100,
  grey200,
} from "../../../assets/styles/colors";
import Wrapper from "../Wrapper";

const LoaderWrapper = styled(Wrapper)`
  min-height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primaryBackground};
`;

const LoaderSpinner = styled.div`
  border: 10px solid ${grey200};
  border-top: 10px solid ${blue100};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { LoaderSpinner, LoaderWrapper };
