import { Suspense } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import useAuth from "./AuthProvider";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
