import React, { FC } from "react";
import RightBubbles from "./assets/right-bubbles.png";
import styled from "styled-components";
import { primarySubtitle, darkGradientBackground } from "./styles/colors.js";

const P = styled.p`
  color: ${primarySubtitle};
  font-size: 10em;
`;

const Container = styled.div`
  background: ${darkGradientBackground};
`;

const App: FC = () => {
  return (
    <Container>
      <header>
        <P> Test teeeeeeeeeest</P>
      </header>
      <img src={RightBubbles}></img>
    </Container>
  );
};

export default App;
