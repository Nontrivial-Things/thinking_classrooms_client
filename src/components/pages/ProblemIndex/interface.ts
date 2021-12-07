import { gql } from "@apollo/client";
import { ProblemSummaryProps } from "../../molecules/SearchResultTile/interface";

export interface GetProblemsQuery {
  problems: Array<ProblemSummaryProps>;
}

export const PROBLEMS = gql`
  query GetProblems {
    problems {
      title
      author
      createdAt
      level
      tags
      id
    }
  }
`;
