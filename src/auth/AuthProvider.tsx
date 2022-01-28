import { useMutation } from "@apollo/client";
import { useState, createContext, useContext, useEffect, FC } from "react";
import { useNavigate } from "react-router-dom";

import { LOGIN, Login, User } from "../components/pages/LoginPage/interface";
import { AuthContextType, AuthProps } from "./interface";
import { setUserWithExpiry, getUserWithExpiry } from "./utils";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
const oneDayInMS = 86400000;
const oneMonthInMS = 2629800000;

export const AuthProvider: FC<AuthProps> = ({ children }) => {
  const [user, setUser] = useState<User>();

  const navigate = useNavigate();
  const userDataN = getUserWithExpiry("user");

  console.log(userDataN, "userDataN");

  useEffect(() => {
    if (!!userData == true) {
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
        setUser(user);
        // localStorage.setItem("user", JSON.stringify({ token: user?.token }));
        if (user && !checked) {
          setUserWithExpiry("user", user.token, oneDayInMS);
          window.onbeforeunload = function () {
            localStorage.clear();
          };
        }
        if (user && checked) {
          setUserWithExpiry("user", user.token, oneMonthInMS);
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
