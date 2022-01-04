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
            tags: ["ciągi"],
            author: "Maria Konopnicka",
            createdAt: "2022-01-09",
            level: Level.PRIMARY,
            id: 1,
          },
          {
            title: "Ciągi muzyczne",
            tags: ["ciągi", "muzyka"],
            author: "Witold Lutosławski",
            createdAt: "2021-05-28",
            level: Level.SECONDARY,
            id: 2,
          },
          {
            title: "Maczugi keczupowe",
            tags: ["maczugi", "jedzenie"],
            author: "Kasia Frania",
            createdAt: "2021-04-16",
            level: Level.ANY,
            id: 3,
          },
          {
            title: "Foki",
            tags: ["zwierzęta", "ocean"],
            author: "Jan Kowalski",
            createdAt: "2021-12-18",
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
            title: "ciągi",
            id: 15,
          },

          {
            type: SuggestionType.TAG,
            title: "jedzenie",
            id: 16,
          },
          {
            type: SuggestionType.TAG,
            title: "muzyka",
            id: 17,
          },
          {
            type: SuggestionType.TAG,
            title: "ocean",
            id: 18,
          },
          {
            type: SuggestionType.TAG,
            title: "zwierzęta",
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
                  tags: ["ciągi"],
                  author: "Maria Konopnicka",
                  createdAt: "2022-01-09",
                  level: Level.PRIMARY,
                  id: 1,
                  description:
                    "Dzielimy klasę na trzyosobowe grupy (i ewentualne pary) przy pomocy kart. Wyświetlamy na rzutniku (warto zaznaczyć, że do podanych przykładów będziemy się wielokrotnie odnosić podczas tej lekcji):",
                  question:
                    "PYTANIE: Jaka liczba będzie stała w każdym z nawiasów na 23 miejscu? Rozpoczęcie pracy w grupach nad danym problemem.",
                  answer: "a) 24  b) 46  c) 57  d) 98",
                  resources: "additional resources",
                  guidance:
                    "Dzielimy klasę na trzyosobowe grupy (i ewentualne pary) przy pomocy kart. Wyświetlamy na rzutniku (warto zaznaczyć, że do podanych przykładów będziemy się wielokrotnie odnosić podczas tej lekcji):",
                  openingGuidance:
                    "Dzielimy klasę na trzyosobowe grupy (i ewentualne pary) przy pomocy kart. Wyświetlamy na rzutniku (warto zaznaczyć, że do podanych przykładów będziemy się wielokrotnie odnosić podczas tej lekcji):",
                  closingGuidance:
                    "Dzielimy klasę na trzyosobowe grupy (i ewentualne pary) przy pomocy kart. Wyświetlamy na rzutniku (warto zaznaczyć, że do podanych przykładów będziemy się wielokrotnie odnosić podczas tej lekcji):",
                  extension: {
                    description:
                      "Dzielimy klasę na trzyosobowe grupy (i ewentualne pary) przy pomocy kart. Wyświetlamy na rzutniku (warto zaznaczyć, że do podanych przykładów będziemy się wielokrotnie odnosić podczas tej lekcji):",
                    question:
                      "PYTANIE: Jaka liczba będzie stała w każdym z nawiasów na 23 miejscu? Rozpoczęcie pracy w grupach nad danym problemem.",
                    answer: "a) 24  b) 46  c) 57  d) 98",
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
                  tags: ["ciągi", "muzyka"],
                  author: "Witold Lutosławski",
                  createdAt: "2021-05-28",
                  level: Level.SECONDARY,
                  id: 2,
                  description: "description",
                  question: "question?",
                  answer: "answer",
                  resources: "additional resources",
                  guidance: "guidance",
                  openingGuidance: "opening guidance",
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
                  tags: ["maczugi", "jedzenie"],
                  author: "Kasia Frania",
                  createdAt: "2021-04-16",
                  level: Level.ANY,
                  id: 3,
                  description: "description",
                  question: "question?",
                  answer: "answer",
                  resources: "additional resources",
                  guidance: "guidance",
                  openingGuidance: "opening guidance",
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
                  tags: ["zwierzęta", "ocean"],
                  author: "Jan Kowalski",
                  createdAt: "2021-12-18",
                  level: Level.ANY,
                  id: 4,
                  description: "description",
                  question: "question?",
                  answer: "answer",
                  resources: "additional resources",
                  guidance: "guidance",
                  openingGuidance: "opening guidance",
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
