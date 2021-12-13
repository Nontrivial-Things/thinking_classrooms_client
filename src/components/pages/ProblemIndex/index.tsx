import { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import ResultCountLabel from "../../atoms/ResultCountLabel";
import Wrapper from "../../atoms/Wrapper";
import SearchResultTile from "../../molecules/SearchResultTile";
import ProblemSearchSection from "../../organisms/ProblemSearchSection";
import { GetProblemsQuery, PROBLEMS } from "./interface";

import { primaryBackground } from "../../../assets/styles/colors";
import { ProblemSummaryProps } from "../../molecules/SearchResultTile/interface";

const ProblemIndex: FC = () => {
  const { data } = useQuery<GetProblemsQuery>(PROBLEMS);
  const [tag, setTag] = useState<string>("");
  const [problems, setProblems] = useState<ProblemSummaryProps[]>([]);

  useEffect(() => {
    if (data?.problems) {
      const { problems } = data;
      const filteredProblems = () => {
        if (tag === "") return problems;
        else {
          return problems.filter((problem) => {
            return problem.tags && problem.tags.includes(tag);
          });
        }
      };

      setProblems(filteredProblems);
    }
  }, [data?.problems.length, tag]);

  return (
    <>
      <ProblemSearchSection setTag={setTag} problems={problems} />
      <Wrapper
        background={primaryBackground}
        flexDirection="column"
        margin="0"
        minHeight="100vh"
      >
        <ResultCountLabel count={problems.length}></ResultCountLabel>
        {problems.map(({ title, author, createdAt, level, tags, id }) => (
          <SearchResultTile
            key={id}
            title={title}
            tags={tags}
            createdAt={createdAt}
            author={author}
            level={level}
            id={id}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default ProblemIndex;
