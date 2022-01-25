import { gql } from "@apollo/client";

export interface InputStyleProps {
  validationFailed?: boolean;
  border?: string;
}
export interface Login {
  login: {
    id: number;
    email: string;
    token: string;
  };
}

export interface User {
  id: number;
  email: string;
  token: string;
}

export const LOGIN = gql`
  mutation Login($email: email, $password: password) {
    login(email: $email, password: $password) {
      id
      email
      token
    }
  }
`;

export interface FormInputsValidationProps {
  values: React.ReactNode;
}

export interface ErrorsProps {
  email?: string;
  password?: string;
}
