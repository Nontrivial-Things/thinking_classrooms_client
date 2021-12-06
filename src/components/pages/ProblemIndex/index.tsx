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
      {problems?.map(({ title, tag }, id) => (
        <SearchResultTile
          key={id}
          text={title}
          tags={tag}
          date={new Intl.DateTimeFormat("pl-PL", {
            dateStyle: "medium",
          }).format(new Date())}
          author="Maria Salomea Skłodowska-Curie"
          educationStage="Dowolony etap edukacji"
        />
      ))}
    </Wrapper>
  );
};

export default ProblemIndex;
