import { FC } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../atoms/Wrapper";

const LoginPage: FC = () => {
  return (
    <Wrapper flexDirection="column" margin="0" minHeight="100vh">
      <h2>loginPage</h2>
      <form>
        <label>
          E-mail
          <input type="text" name="email" />
        </label>
        <label>
          Hasło
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Zaloguj się" />
      </form>
    </Wrapper>
  );
};

export default LoginPage;
