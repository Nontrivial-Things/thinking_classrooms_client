import { gql } from "@apollo/client";
import { ProblemSummaryProps } from "../../molecules/SearchResultTile/interface";
import { PROBLEM_SUMMARY_FRAGMENT } from "../ProblemsPage/interface";

export interface ProblemDetails {
  description: string;
  question: string;
  answer: string;
  resources?: string;
}
export interface Test extends ProblemSummaryProps, ProblemDetails {
  extension?: ProblemDetails;
  guidance: string;
  closingGuidance: string;
}

export interface GetProblemDetailsQuery {
  test: { problem: Test };
}

export const PROBLEM_DETAILS_FRAGMENT = gql`
  fragment ProblemDetailsFragment on GetProblemDetailsQuery {
    description
    question
    answer
    resources
  }
`;

export const GUIDANCE_FRAGMENT = gql`
  fragment GuidanceFragment on GetProblemDetailsQuery {
    guidance
    closingGuidance
  }
`;

export const PROBLEM_DETAILS = gql`
  ${PROBLEM_SUMMARY_FRAGMENT}
  ${PROBLEM_DETAILS_FRAGMENT}
  ${GUIDANCE_FRAGMENT}
  query GetProblemDetails($id: id) {
    test(id: $id) {
      problem {
        extension
        ...ProblemDetailsFragment
      }
      problem
      ...ProblemDetailsFragment
      ...ProblemSummaryFragment
      ...GuidanceFragment
    }
  }
`;
