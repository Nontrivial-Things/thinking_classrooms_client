import { FC, useState } from "react";
import { useQuery } from "@apollo/client";

import ResultCountLabel from "../../atoms/ResultCountLabel";
import Wrapper from "../../atoms/Wrapper";
import SearchResultTile from "../../molecules/SearchResultTile";
import ProblemSearchSection from "../../organisms/ProblemSearchSection";
import { GetProblemsQuery, PROBLEMS } from "./interface";
import { ProblemSummaryProps } from "../../molecules/SearchResultTile/interface";

import { primaryBackground } from "../../../assets/styles/colors";
import { queryByTestId } from "@testing-library/dom";

const ProblemIndex: FC = () => {
  // const [problems, setProblems] = useState<ProblemSummaryProps[]>([]);

  const { data } = useQuery<GetProblemsQuery>(PROBLEMS);

  const test = (data?.problems && data?.problems) || [];
  // setProblems(test);

  return (
    <>
      <ProblemSearchSection problems={test} />
      <Wrapper
        background={primaryBackground}
        flexDirection="column"
        margin="0"
        minHeight="100vh"
      >
        <ResultCountLabel count={test?.length || 0}></ResultCountLabel>
        {test?.map(({ title, author, createdAt, level, tags, id }) => (
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
