import LoginPage from "../components/pages/LoginPage";
import useAuth from "./AuthProvider";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  if (!user) {
    return <LoginPage />;
  }
  return children;
};

export default RequireAuth;
