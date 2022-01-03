import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ProblemSubtitle from "../../atoms/ProblemSubtitle";
import Wrapper from "../../atoms/Wrapper";
import { white, secondarySubtitle } from "../../../assets/styles/colors";
import * as S from "./styles";
import { GetProblemDetailsQuery, PROBLEM_DETAILS } from "./interface";

const ProblemDetailedPage: FC = () => {
  const params = useParams();
  const id: string = params.problemId || "";

  const { data, loading } = useQuery<GetProblemDetailsQuery>(PROBLEM_DETAILS, {
    variables: { id },
  });
  const [problemDetails, setProblemDetails] = useState<any>({});

  const problemsLoaded = data && !loading;

  useEffect(() => {
    if (problemsLoaded) {
      const { problem } = data.test;
      setProblemDetails({
        ...problem,
      });
    }
  }, [data, loading]);

  return problemsLoaded ? (
    <Wrapper
      background={white}
      flexDirection="column"
      margin="0"
      minHeight="100vh"
    >
      <S.GoToBackWrapper to="/">
        <S.Arrow />
        <S.GoToBackSpan>Powrót do listy problemów</S.GoToBackSpan>
      </S.GoToBackWrapper>
      <p>Tytuł: {problemDetails.title}</p>
      <ul>
        <li>Autor: {problemDetails.author}</li>
      </ul>
      <ProblemSubtitle subtitle="Treść problemu" />
      <ProblemSubtitle subtitle="Odpowiedź" />
    </Wrapper>
  ) : (
    <div>Brak danych</div>
  );
};

export default ProblemDetailedPage;
