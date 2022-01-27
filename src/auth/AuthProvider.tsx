import { useMutation } from "@apollo/client";
import { useState, createContext, useContext, useEffect, FC } from "react";
import { useNavigate } from "react-router-dom";

import { LOGIN, Login, User } from "../components/pages/LoginPage/interface";
import { AuthContextType, AuthProps } from "./interface";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: FC<AuthProps> = ({ children }) => {
  const [user, setUser] = useState<User>();

  const navigate = useNavigate();

  const userData = localStorage.getItem("user");
  const parsedUserData = userData && JSON.parse(userData);

  useEffect(() => {
    if (!!parsedUserData == true) {
      setUser(parsedUserData);
    }
  }, []);

  const [login, { loading, error }] = useMutation<Login>(LOGIN);

  const signin = (email: string, password: string) => {
    login({
      variables: { email: email, password: password },
    })
      .then((data) => {
        const user = data.data?.login;
        setUser(user);
        localStorage.setItem("user", JSON.stringify({ token: user?.token }));
        navigate("/moderator");
      })
      .catch((error) => {
        console.log(error.graphQLErrors);
      });
  };

  const value = { user, signin, error, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth(): AuthContextType {
  return useContext(AuthContext);
}
