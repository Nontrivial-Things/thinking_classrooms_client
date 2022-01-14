import { graphql } from "msw";
import { Level } from "../components/molecules/SearchResultTile/interface";

import { GetProblemsQuery } from "../components/pages/ProblemsPage/interface";
import {
  GetSuggestionsQuery,
  SuggestionType,
} from "../components/organisms/ProblemSearchSection/interface";
import { GetProblemDetailsQuery } from "../components/pages/ProblemDetailedPage/interface";
import { Login } from "../components/pages/LoginPage/interface";

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
            title: "maczugi",
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
              problem: {
                details: {
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
              problem: {
                details: {
                  title: "Ciągi muzyczne",
                  tags: ["ciągi", "muzyka"],
                  author: "Witold Lutosławski",
                  createdAt: "2021-05-28",
                  level: Level.SECONDARY,
                  id: 2,
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
        case "3":
          return res(
            ctx.data({
              problem: {
                details: {
                  title: "Maczugi keczupowe",
                  tags: ["maczugi", "jedzenie"],
                  author: "Kasia Frania",
                  createdAt: "2021-04-16",
                  level: Level.ANY,
                  id: 3,
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

        case "4":
          return res(
            ctx.data({
              problem: {
                details: {
                  title: "Foki",
                  tags: ["zwierzęta", "ocean"],
                  author: "Jan Kowalski",
                  createdAt: "2021-12-18",
                  level: Level.ANY,
                  id: 4,
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
      }
    }
  ),
  graphql.mutation<Login>("Login", (req, res, ctx) => {
    const { email, password } = req.variables;
    return res(
      ctx.data({
        login: {
          id: 1,
          email: email,
          token: "1234",
        },
      })
    );
  }),
];
