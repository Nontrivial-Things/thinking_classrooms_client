import { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import ResultCountLabel from "../../atoms/ResultCountLabel";
import Wrapper from "../../atoms/Wrapper";
import ScrollToTopButton from "../../atoms/ScrollToTopButton";
import SearchResultTile from "../../molecules/SearchResultTile";
import ZeroResults from "../../molecules/ZeroResults";
import ProblemSearchSection from "../../organisms/ProblemSearchSection";
import { GetProblemsQuery, PROBLEMS } from "./interface";

import { white, primaryBackground } from "../../../assets/styles/colors";
import { ProblemSummaryProps } from "../../molecules/SearchResultTile/interface";

const ProblemsPage: FC = () => {
  const { data, loading } = useQuery<GetProblemsQuery>(PROBLEMS);
  const [tag, setTag] = useState<string>("");
  const [problems, setProblems] = useState<ProblemSummaryProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (data?.problems && !loading) {
      const { problems } = data;
      const filteredProblems =
        tag === ""
          ? problems
          : problems.filter((problem) => {
              return problem.tags && problem.tags.includes(tag);
            });
      setProblems(filteredProblems);
    }
  }, [data?.problems.length, tag, loading]);

  return (
    <>
      <ProblemSearchSection
        tag={tag}
        setTag={setTag}
        setProblems={setProblems}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <Wrapper
        background={problems.length === 0 ? white : primaryBackground}
        backgroundDT={primaryBackground}
        flexDirection="column"
        margin="0"
        minHeight="100vh"
      >
        <ResultCountLabel count={problems.length}></ResultCountLabel>
        {problems.length === 0 && !loading ? (
          <ZeroResults setTag={setTag} setSearchTerm={setSearchTerm} />
        ) : (
          problems.map(({ title, author, createdAt, level, tags, id }) => (
            <SearchResultTile
              key={id}
              title={title}
              tags={tags}
              createdAt={createdAt}
              author={author}
              level={level}
              id={id}
            />
          ))
        )}
      </Wrapper>
      {problems.length != 0 && <ScrollToTopButton />}
    </>
  );
};

export default ProblemsPage;
