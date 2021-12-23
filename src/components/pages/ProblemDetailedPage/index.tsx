import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GetProblemsQuery, PROBLEMS } from "../ProblemsPage/interface";
import { ProblemSummaryProps } from "../../molecules/SearchResultTile/interface";

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
      const { problems } = data; // any type

      const currentProblem = problems[parseInt(id) - 1];

      setProblemDetails({
        title: currentProblem.title,
        author: currentProblem.author,
      });
    }
  }, [data?.problems.length, loading]);

  return problemsLoaded ? (
    <>
      <p>Tytuł: {problemDetails.title}</p>
      <ul>
        <li>Autor: {problemDetails.author}</li>
      </ul>
    </>
  ) : (
    <div>Brak danych</div>
  );
};

export default ProblemDetailedPage;
