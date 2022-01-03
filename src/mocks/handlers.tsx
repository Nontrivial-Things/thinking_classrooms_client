import { graphql } from "msw";
import { Level } from "../components/molecules/SearchResultTile/interface";

import { GetProblemsQuery } from "../components/pages/ProblemsPage/interface";
import {
  GetSuggestionsQuery,
  SuggestionType,
} from "../components/organisms/ProblemSearchSection/interface";
import { GetProblemDetailsQuery } from "../components/pages/ProblemDetailedPage/interface";

export const handlers = [
  graphql.query<GetProblemsQuery>("GetProblems", (req, res, ctx) => {
    return res(
      ctx.data({
        problems: [
          {
            title: "Ciągi matematyczne",
            tags: ["Ciągi"],
            author: "Maria Konopnicka",
            createdAt: "01.01.2021",
            level: Level.PRIMARY,
            id: 1,
          },
          {
            title: "Ciągi muzyczne",
            tags: ["Ciągi", "Muzyka"],
            author: "Witold Lutosławski",
            createdAt: "01.06.2021",
            level: Level.SECONDARY,
            id: 2,
          },
          {
            title: "Maczugi keczupowe",
            tags: ["Maczugi", "Jedzenie"],
            author: "Kasia Frania",
            createdAt: "01.09.2021",
            level: Level.ANY,
            id: 3,
          },
          {
            title: "Foki",
            tags: ["Zwierzęta", "Ocean"],
            author: "Jan Kowalski",
            createdAt: "01.03.2021",
            level: Level.ANY,
            id: 4,
          },
        ],
      })
    );
  }),
  graphql.query<GetSuggestionsQuery>("GetSuggestions", (req, res, ctx) => {
    return res(
      ctx.data({
        suggestions: [
          {
            type: SuggestionType.PROBLEM,
            title: "Ciągi matematyczne",
            id: 1,
          },
          {
            type: SuggestionType.TAG,
            title: "Maczugi",
            id: 14,
          },
          {
            type: SuggestionType.PROBLEM,
            title: "Ciągi muzyczne",
            id: 2,
          },
          {
            type: SuggestionType.PROBLEM,
            title: "Maczugi keczupowe",
            id: 3,
          },
          {
            type: SuggestionType.PROBLEM,
            title: "Foki",
            id: 4,
          },

          {
            type: SuggestionType.TAG,
            title: "Ciągi",
            id: 15,
          },

          {
            type: SuggestionType.TAG,
            title: "Jedzenie",
            id: 16,
          },
          {
            type: SuggestionType.TAG,
            title: "Muzyka",
            id: 17,
          },
          {
            type: SuggestionType.TAG,
            title: "Ocean",
            id: 18,
          },
          {
            type: SuggestionType.TAG,
            title: "Zwierzęta",
            id: 19,
          },
        ],
      })
    );
  }),
  graphql.query<GetProblemDetailsQuery>(
    "GetProblemDetails",
    (req, res, ctx) => {
      const { id } = req.variables;

      switch (id) {
        case "1":
          return res(
            ctx.data({
              test: {
                problem: {
                  title: "Ciągi matematyczne",
                  tags: ["Ciągi"],
                  author: "Maria Konopnicka",
                  createdAt: "01.01.2021",
                  level: Level.PRIMARY,
                  id: 1,
                  description: "description",
                  question: "question?",
                  answer: "answer",
                  resources: "additional resources",
                  guidance: "guidance",
                  closingGuidance: "closing guidance 123",
                  extension: {
                    description: "extension description",
                    question: "extension question?",
                    answer: "extension answer",
                  },
                },
              },
            })
          );
        case "2":
          return res(
            ctx.data({
              test: {
                problem: {
                  title: "Ciągi muzyczne",
                  tags: ["Ciągi", "Muzyka"],
                  author: "Witold Lutosławski",
                  createdAt: "01.06.2021",
                  level: Level.SECONDARY,
                  id: 2,
                  description: "description",
                  question: "question?",
                  answer: "answer",
                  resources: "additional resources",
                  guidance: "guidance",
                  closingGuidance: "closing guidance 123",
                  extension: {
                    description: "extension description",
                    question: "extension question?",
                    answer: "extension answer",
                  },
                },
              },
            })
          );
        case "3":
          return res(
            ctx.data({
              test: {
                problem: {
                  title: "Maczugi keczupowe",
                  tags: ["Maczugi", "Jedzenie"],
                  author: "Kasia Frania",
                  createdAt: "01.09.2021",
                  level: Level.ANY,
                  id: 3,
                  description: "description",
                  question: "question?",
                  answer: "answer",
                  resources: "additional resources",
                  guidance: "guidance",
                  closingGuidance: "closing guidance 123",
                  extension: {
                    description: "extension description",
                    question: "extension question?",
                    answer: "extension answer",
                  },
                },
              },
            })
          );

        case "4":
          return res(
            ctx.data({
              test: {
                problem: {
                  title: "Foki",
                  tags: ["Zwierzęta", "Ocean"],
                  author: "Jan Kowalski",
                  createdAt: "01.03.2021",
                  level: Level.ANY,
                  id: 4,
                  description: "description",
                  question: "question?",
                  answer: "answer",
                  resources: "additional resources",
                  guidance: "guidance",
                  closingGuidance: "closing guidance 123",
                  extension: {
                    description: "extension description",
                    question: "extension question?",
                    answer: "extension answer",
                  },
                },
              },
            })
          );
      }
    }
  ),
];
