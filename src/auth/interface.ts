import { ApolloError } from "@apollo/client";
import { User } from "../components/pages/LoginPage/interface";

export interface AuthContextType {
  user?: User | UserTokenWithExpiry;
  signin: (email: string, password: string, checked: boolean) => void;
  error?: ApolloError;
  loginError?: ApolloError;
  loading?: boolean;
  setLoginError: (error: any) => void;
}

export interface AuthProps {
  children: JSX.Element;
}

export interface UserTokenWithExpiry {
  token: string;
  expiry: number;
}
