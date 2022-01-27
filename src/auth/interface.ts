import { ApolloError } from "@apollo/client";
import { User } from "../components/pages/LoginPage/interface";

export interface AuthContextType {
  user?: User;
  signin: (email: string, password: string) => void;
  error?: ApolloError;
  loading?: boolean;
}

export interface AuthProps {
  children: JSX.Element;
}
