import { gql } from "@apollo/client";

export interface Login {
  login: {
    id: number;
    email: string;
    token: string;
  };
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

export interface UserProps {
  id: number;
  email: string;
  password: string;
}
export interface GetUsersQuery {
  users: Array<UserProps>;
}

export const USERS = gql`
  query GetUsers {
    users {
      id
      email
      password
    }
  }
`;

export interface InputStyleProps {
  validationFailed?: boolean;
  border?: string;
}
