import { graphql } from "msw";
import { Level } from "../components/molecules/SearchResultTile/interface";

import { GetProblemsQuery } from "../components/pages/ProblemIndex/interface";
import {
  GetSuggestionsQuery,
  SuggestionType,
} from "../components/organisms/ProblemSearchSection/interface";

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
            title: "Ciągi",
            id: 15,
          },
          {
            type: SuggestionType.PROBLEM,
            title: "Maczugi",
            id: 3,
          },
          {
            type: SuggestionType.TAG,
            title: "Jedzenie",
            id: 16,
          },
        ],
      })
    );
  }),
];
