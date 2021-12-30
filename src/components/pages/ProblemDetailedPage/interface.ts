import { gql } from "@apollo/client";
import { ProblemSummaryProps } from "../../molecules/SearchResultTile/interface";

interface ProblemDetails {
  description: string;
  question: string;
  answer: string;
  resources?: string;
}

export interface GetProblemDetailsQuery {
  // extension?: ProblemDetails;
  guidance: string;
  closingGuidance: string;
}

const PROBLEM_DETAILS = gql`
  fragment ProblemDetailsFragment on GetProblemDetailsQuery {
    description
    question
    answer
    resources
  }
`;

// export const GET_PROBLEM_DETAILS = gql`
//   ${PROBLEM_DETAILS}
//   query ProblemDetails($id: ID!) {
//     problem(id: $id) {
//       ...ProblemDetails
//       extension {
//         ...ProblemDetails
//       }
//       guidance
//       closingGuidance
//     }
//   }
// `;

export const GET_PROBLEM_DETAILS = gql`
  query ProblemDetails {
    guidance
    closingGuidance
  }
`;

// {
//   leftComparison: hero(episode: EMPIRE) {
//     ...comparisonFields
//   }
//   rightComparison: hero(episode: JEDI) {
//     ...comparisonFields
//   }
// }

// fragment problemDetails on GetProblemDetailsQuery {
//   name
//   appearsIn
//   friends {
//     name
//   }
// }
