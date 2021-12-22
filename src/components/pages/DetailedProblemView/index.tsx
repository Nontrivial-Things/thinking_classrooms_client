import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GetProblemsQuery, PROBLEMS } from "../ProblemIndex/interface";
import { ProblemSummaryProps } from "../../molecules/SearchResultTile/interface";

const DetailedProblemView: FC = () => {
  const params = useParams();
  const id: any = params.problemId;

  const { data, loading } = useQuery<GetProblemsQuery>(PROBLEMS);
  const [problems, setProblems] = useState<ProblemSummaryProps[]>([]);
  const [problemDetails, setProblemDetails] = useState({
    title: "",
    author: "",
  });

  useEffect(() => {
    if (data?.problems && !loading) {
      const { problems } = data;
      const filteredProblems = problems;
      const currentProblem = problems[id - 1];
      setProblems(filteredProblems);
      setProblemDetails({
        title: currentProblem.title,
        author: currentProblem.author,
      });
    }
  }, [data?.problems.length, loading]);

  return data?.problems && !loading ? (
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

export default DetailedProblemView;
