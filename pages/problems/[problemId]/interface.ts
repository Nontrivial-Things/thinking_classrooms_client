import { gql } from "@apollo/client";
import { ProblemSummaryProps } from "../../../components/molecules/SearchResultTile/interface";
import { PROBLEM_SUMMARY_FRAGMENT } from "../../problems-page/interface";

export interface ProblemDetails {
  description: string;
  question: string;
  answer: string;
  resources?: string;
}
export interface ExtendedProblemDetails
  extends ProblemSummaryProps,
    ProblemDetails {
  extension?: ProblemDetails;
  guidance: string;
  openingGuidance: string;
  closingGuidance: string;
}

export interface GetProblemDetailsQuery {
  problem: { details: ExtendedProblemDetails };
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
    openingGuidance
    closingGuidance
  }
`;

export const PROBLEM_DETAILS = gql`
  ${PROBLEM_SUMMARY_FRAGMENT}
  ${PROBLEM_DETAILS_FRAGMENT}
  ${GUIDANCE_FRAGMENT}
  query GetProblemDetails($id: id) {
    problem(id: $id) {
      details {
        extension
        ...ProblemDetailsFragment
      }
      details
      ...ProblemDetailsFragment
      ...ProblemSummaryFragment
      ...GuidanceFragment
    }
  }
`;
