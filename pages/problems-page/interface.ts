import { gql } from "@apollo/client";
import { ProblemSummaryProps } from "../../components/molecules/SearchResultTile/interface";

export interface GetProblemsQuery {
  problems: Array<ProblemSummaryProps>;
}

export const PROBLEM_SUMMARY_FRAGMENT = gql`
  fragment ProblemSummaryFragment on GetProblemsQuery {
    title
    author
    createdAt
    level
    tags
    id
  }
`;

export const PROBLEMS = gql`
  ${PROBLEM_SUMMARY_FRAGMENT}
  query GetProblems {
    problems
    ...ProblemSummaryFragment
  }
`;
