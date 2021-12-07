import { FC } from "react";
import { useQuery } from "@apollo/client";

import ResultCountLabel from "../../atoms/ResultCountLabel";
import Wrapper from "../../atoms/Wrapper";
import SearchResultTile from "../../molecules/SearchResultTile";
import { GetProblemsQuery, PROBLEMS } from "./interface";

import { primaryBackground } from "../../../assets/styles/colors";

const ProblemIndex: FC = () => {
  const { data } = useQuery<GetProblemsQuery>(PROBLEMS);
  const problems = data?.problems;

  return (
    <Wrapper
      background={primaryBackground}
      flexDirection="column"
      margin="0"
      minHeight="100vh"
    >
      <ResultCountLabel count={problems?.length || 0}></ResultCountLabel>
      {problems?.map(({ title, author, createdAt, level, tags }, id) => (
        <SearchResultTile
          key={id}
          title={title}
          tags={tags}
          createdAt={createdAt}
          author={author}
          level={level}
        />
      ))}
    </Wrapper>
  );
};

export default ProblemIndex;
