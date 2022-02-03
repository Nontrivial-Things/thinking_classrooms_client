import { FC } from "react";

import LoginPage from "../../pages/LoginPage";
import useAuth from "./AuthProvider";
import { AuthProps } from "./interface";

const RequireAuth: FC<AuthProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    window.history.replaceState(null, "", "/login");

    return <LoginPage />;
  }
  return children;
};

export default RequireAuth;
