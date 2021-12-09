import { FC, useState } from "react";
import { useQuery } from "@apollo/client";

import ResultCountLabel from "../../atoms/ResultCountLabel";
import Wrapper from "../../atoms/Wrapper";
import SearchResultTile from "../../molecules/SearchResultTile";
import ProblemSearchSection from "../../organisms/ProblemSearchSection";
import { GetProblemsQuery, PROBLEMS } from "./interface";

import { primaryBackground } from "../../../assets/styles/colors";

const ProblemIndex: FC = () => {
  const { data } = useQuery<GetProblemsQuery>(PROBLEMS);

  const allProblems = (data?.problems && data?.problems) || [];

  const [tag, setTag] = useState<string>("");

  const filteredProblems = () => {
    if (tag === "") return allProblems;
    else {
      return allProblems.filter((problem) => {
        return problem.tags && problem.tags.includes(tag);
      });
    }
  };

  return (
    <>
      <ProblemSearchSection setTag={setTag} problems={allProblems} />
      <Wrapper
        background={primaryBackground}
        flexDirection="column"
        margin="0"
        minHeight="100vh"
      >
        <ResultCountLabel
          count={filteredProblems()?.length || 0}
        ></ResultCountLabel>
        {filteredProblems()?.map(
          ({ title, author, createdAt, level, tags, id }) => (
            <SearchResultTile
              key={id}
              title={title}
              tags={tags}
              createdAt={createdAt}
              author={author}
              level={level}
              id={id}
            />
          )
        )}
      </Wrapper>
    </>
  );
};

export default ProblemIndex;
