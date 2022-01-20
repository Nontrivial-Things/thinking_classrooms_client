import styled from "styled-components";

import { blue100, grey200 } from "../../../assets/styles/colors";
import Wrapper from "../Wrapper";

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

const LoaderWrapper = styled(Wrapper)`
  min-height: 100vh;
  margin: 0;
`;

export { LoaderSpinner, LoaderWrapper };
