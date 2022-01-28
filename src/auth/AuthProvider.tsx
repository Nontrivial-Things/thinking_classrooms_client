import { useMutation } from "@apollo/client";
import { useState, createContext, useContext, useEffect, FC } from "react";
import { useNavigate } from "react-router-dom";

import { LOGIN, Login, User } from "../components/pages/LoginPage/interface";
import {
  AuthContextType,
  AuthProps,
  UserTokenWithOptionalExpiry,
} from "./interface";
import { getUserDataFromStorage, setUserDataInStorage } from "./utils";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
const oneDayInMS = 86400000;
const oneMonthInMS = 2629800000;

export const AuthProvider: FC<AuthProps> = ({ children }) => {
  const [user, setUser] = useState<{ token: string; expiry: number }>();

  const navigate = useNavigate();
  const userData = getUserDataFromStorage("user");

  useEffect(() => {
    if (!!userData) {
      setUser(userData);
    }
  }, []);

  // const userData = localStorage.getItem("user");
  // const parsedUserData = userData && JSON.parse(userData);

  // console.log(parsedUserData, "parsed");

  // useEffect(() => {
  //   if (!!parsedUserData == true) {
  //     setUser(parsedUserData);
  //   }
  // }, []);

  const [login, { loading, error }] = useMutation<Login>(LOGIN);

  const signin = (email: string, password: string, checked: boolean) => {
    login({
      variables: { email: email, password: password },
    })
      .then((data) => {
        const user = data.data?.login;
        user && setUser({ token: user?.token, expiry: 123 });
        // localStorage.setItem("user", JSON.stringify({ token: user?.token }));
        if (user && !checked) {
          setUserDataInStorage("user", user.token, oneDayInMS);
          window.onbeforeunload = function () {
            localStorage.clear();
          };
        }
        if (user && checked) {
          setUserDataInStorage("user", user.token, oneMonthInMS);
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
