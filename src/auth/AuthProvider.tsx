import { useMutation } from "@apollo/client";
import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LOGIN, Login, User } from "../components/pages/LoginPage/interface";
import AuthContextType from "./interface";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>();

  const navigate = useNavigate();

  const [login, { data, loading, error }] = useMutation<Login>(LOGIN);

  const signin = (email: string, password: string) => {
    login({
      variables: { email: email, password: password },
    })
      .then((data) => {
        setUser(data.data?.login);
        navigate("/moderator");
      })
      .catch((error) => {
        console.log(error.graphQLErrors);
      });
  };

  const value = { user, signin, error, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  return useContext(AuthContext);
}
