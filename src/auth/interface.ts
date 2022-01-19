import { ApolloError } from "@apollo/client";
import { User } from "../components/pages/LoginPage/interface";

export default interface AuthContextType {
  user?: User;
  signin: (email: string, password: string) => void;
  error?: ApolloError;
}
