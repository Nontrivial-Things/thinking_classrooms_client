import { graphql } from "msw";

import { GetProblemsQuery } from "../components/pages/ProblemIndex/interface";

export const handlers = [
  graphql.query<GetProblemsQuery>("GetProblems", (req, res, ctx) => {
    return res(
      ctx.data({
        problems: [
          {
            title: "Ciągi matematyczne",
            tag: "Ciągi",
          },
          {
            title: "Ciągi muzyczne",
            tag: "Ciągi",
          },
          {
            title: "Maczugi keczupowe",
            tag: "Maczugi",
          },
        ],
      })
    );
  }),
];
