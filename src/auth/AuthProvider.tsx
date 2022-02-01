import { useMutation } from "@apollo/client";
import { useState, createContext, useContext, useEffect, FC } from "react";
import { useNavigate } from "react-router-dom";
import { addDays } from "date-fns/esm";
import addMonths from "date-fns/addMonths";

import { LOGIN, Login, User } from "../components/pages/LoginPage/interface";
import { AuthContextType, AuthProps, UserTokenWithExpiry } from "./interface";
import { getUserDataFromStorage, setUserDataInStorage } from "./utils";
import { addHours, addMinutes } from "date-fns";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: FC<AuthProps> = ({ children }) => {
  const [user, setUser] = useState<User | UserTokenWithExpiry>();

  const navigate = useNavigate();
  const userData = getUserDataFromStorage("user");
  const isUserDataPresent = !!userData;

  useEffect(() => {
    if (isUserDataPresent) {
      setUser(userData);
    }
  }, []);

  const [login, { loading, error }] = useMutation<Login>(LOGIN);

  const signin = (email: string, password: string, checked: boolean) => {
    login({
      variables: { email: email, password: password },
    })
      .then((data) => {
        const user = data.data?.login;
        user && setUser(user);
        if (user && !checked) {
          setUserDataInStorage(
            "user",
            user.token,
            addDays(new Date(), 1).getTime()
          );
          window.onbeforeunload = function () {
            localStorage.clear();
          };
        }
        if (user && checked) {
          setUserDataInStorage(
            "user",
            user.token,
            addMonths(new Date(), 1).getTime()
          );
        }
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
