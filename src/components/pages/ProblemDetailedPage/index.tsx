import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GetProblemsQuery, PROBLEMS } from "../ProblemsPage/interface";
import ProblemSubtitle from "../../atoms/ProblemSubtitle";
import Wrapper from "../../atoms/Wrapper";
import { white, secondarySubtitle } from "../../../assets/styles/colors";

const ProblemDetailedPage: FC = () => {
  const params = useParams();
  const id: string = params.problemId || "";

  const { data, loading } = useQuery<GetProblemsQuery>(PROBLEMS);
  const [problemDetails, setProblemDetails] = useState({
    title: "",
    author: "",
  });

  const problemsLoaded = data?.problems && !loading;

  useEffect(() => {
    if (problemsLoaded) {
      const { problems } = data;

      const currentProblem = problems[parseInt(id) - 1];

      setProblemDetails({
        title: currentProblem.title,
        author: currentProblem.author,
      });
    }
  }, [data?.problems.length, loading]);

  return problemsLoaded ? (
    <Wrapper
      background={white}
      flexDirection="column"
      margin="0"
      minHeight="100vh"
    >
      <p>Tytuł: {problemDetails.title}</p>
      <ul>
        <li>Autor: {problemDetails.author}</li>
      </ul>
      <ProblemSubtitle subtitle={problemDetails.title} />
      <ProblemSubtitle
        color={secondarySubtitle}
        subtitle={problemDetails.title}
      />
    </Wrapper>
  ) : (
    <div>Brak danych</div>
  );
};

export default ProblemDetailedPage;
