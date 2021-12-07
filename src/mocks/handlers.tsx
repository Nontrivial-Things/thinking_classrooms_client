import { graphql } from "msw";
import { Level } from "../components/molecules/SearchResultTile/interface";

import { GetProblemsQuery } from "../components/pages/ProblemIndex/interface";

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
          },
          {
            title: "Ciągi muzyczne",
            tags: ["Ciągi", "Muzyka"],
            author: "Witold Lutosławski",
            createdAt: "01.06.2021",
            level: Level.SECONDARY,
          },
          {
            title: "Maczugi keczupowe",
            tags: ["Maczugi", "Jedzenie"],
            author: "Kasia Frania",
            createdAt: "01.09.2021",
            level: Level.ANY,
          },
          {
            title: "Foki",
            tags: ["Zwierzęta", "Ocean"],
            author: "Jan Kowalski",
            createdAt: "01.03.2021",
            level: Level.ANY,
          },
        ],
      })
    );
  }),
];
