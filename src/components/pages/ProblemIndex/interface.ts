import { gql } from "@apollo/client";

export interface GetProblemsQuery {
  problems: { title: string; tag: string }[];
}

export const PROBLEMS = gql`
  query GetProblems {
    problems {
      title
      tag
    }
  }
`;
