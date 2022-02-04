import { ApolloError, useMutation } from "@apollo/client";
import { useState, createContext, useContext, useEffect, FC } from "react";
import addMonths from "date-fns/addMonths";
import addDays from "date-fns/addDays";

import { LOGIN, Login, User } from "../pages/login/interface";
import { AuthContextType, AuthProps, UserTokenWithExpiry } from "./interface";
import { getUserDataFromStorage, setUserDataInStorage } from "./utils";
import { useRouter } from "next/router";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: FC<AuthProps> = ({ children }) => {
  const [user, setUser] = useState<User | UserTokenWithExpiry>();
  const [loginError, setLoginError] = useState<undefined | ApolloError>(
    undefined
  );

  const navigate = useRouter();

  useEffect(() => {
    const userData = getUserDataFromStorage("user");
    const isUserDataPresent = !!userData;
    if (isUserDataPresent) {
      setUser(userData);
    }
  }, []);

  const [login, { loading, error }] = useMutation<Login>(LOGIN);

  useEffect(() => {
    const isError = !!error;
    isError ? setLoginError(error) : setLoginError(undefined);
  }, [error]);

  const signin = (email: string, password: string, checked: boolean) => {
    login({
      variables: { email: email, password: password },
    })
      .then((data) => {
        const user = data.data?.login;
        console.log(user);

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
        navigate.push("/moderator");
      })
      .catch((error) => {
        console.log(error.graphQLErrors);
      });
  };

  const value = { user, signin, loginError, loading, setLoginError };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth(): AuthContextType {
  return useContext(AuthContext);
}
