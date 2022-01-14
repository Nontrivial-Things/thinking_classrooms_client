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

export interface GetUserInfo {
  user: {
    id: string;
    email: string;
    token: string;
  };
}

export const USER = gql`
  query GetUserInfo {
    user {
      id
      email
      token
    }
  }
`;
