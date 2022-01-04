import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

import ProblemSubtitle from "../../atoms/ProblemSubtitle";
import Tag from "../../atoms/Tag";
import Wrapper from "../../atoms/Wrapper";
import { white, secondarySubtitle } from "../../../assets/styles/colors";
import * as S from "./styles";
import { GetProblemDetailsQuery, PROBLEM_DETAILS } from "./interface";
import Button from "../../atoms/Button";

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

  const formattedDate =
    problemDetails.createdAt &&
    format(new Date(problemDetails.createdAt), "d MMM y", {
      locale: pl,
    });

  return problemsLoaded ? (
    <S.ProblemDetailedWrapper>
      <S.GoToBackWrapper to="/">
        <S.Arrow />
        <S.GoToBackSpan>Powrót do listy problemów</S.GoToBackSpan>
      </S.GoToBackWrapper>
      <S.EducationLevel>{problemDetails.level}</S.EducationLevel>
      <S.TitleHeading>{problemDetails.title}</S.TitleHeading>
      <S.ProblemCreationDetailsWrapper>
        <S.ProblemCreationDetails>
          {problemDetails.author}
        </S.ProblemCreationDetails>
        <S.ProblemCreationDetails>{formattedDate}</S.ProblemCreationDetails>
      </S.ProblemCreationDetailsWrapper>
      <S.Section>
        <S.TagsWrapper>
          {problemDetails.tags &&
            problemDetails.tags.map((tagText: string) => (
              <Tag text={tagText} key={tagText} />
            ))}
        </S.TagsWrapper>
        <Button
          $isPrimary={false}
          withDownloadIcon={true}
          $alignSelf="center"
          // $margin="0 0 4.8rem 0"
        >
          Pobierz treść
        </Button>
      </S.Section>
      <S.ProblemSection>
        <ProblemSubtitle subtitle="Treść problemu" />
        <S.ProblemSectionP>{problemDetails.description}</S.ProblemSectionP>
        <S.ProblemSectionP>{problemDetails.question}</S.ProblemSectionP>
      </S.ProblemSection>
      <S.ProblemSection>
        <ProblemSubtitle subtitle="Odpowiedź" />
        <S.ProblemSectionP>{problemDetails.answer}</S.ProblemSectionP>
      </S.ProblemSection>
      <S.ProblemSection>
        <ProblemSubtitle subtitle="Pobierz materiały dodatkowe" />
        <S.ProblemSectionP>{problemDetails.resources}</S.ProblemSectionP>
      </S.ProblemSection>
      <S.ProblemSection>
        <ProblemSubtitle subtitle="Propozycja wprowadzenia do zajęć" />
        <S.ProblemSectionP>{problemDetails.openingGuidance}</S.ProblemSectionP>
      </S.ProblemSection>
      <S.ProblemExtensionHeading>
        Rozszerzenie problemu
      </S.ProblemExtensionHeading>
      <S.ProblemSection>
        <ProblemSubtitle
          color={secondarySubtitle}
          subtitle="Treść rozszerzenia"
        ></ProblemSubtitle>
        <S.ProblemSectionP>
          {problemDetails.extension?.description}
        </S.ProblemSectionP>
        <S.ProblemSectionP>
          {problemDetails.extension?.question}
        </S.ProblemSectionP>
      </S.ProblemSection>
      <S.ProblemSection>
        <ProblemSubtitle
          color={secondarySubtitle}
          subtitle="Odpowiedź"
        ></ProblemSubtitle>
        <S.ProblemSectionP>
          {problemDetails.extension?.answer}
        </S.ProblemSectionP>
      </S.ProblemSection>
      <S.ProblemSection>
        <ProblemSubtitle subtitle="Wskazówki"></ProblemSubtitle>
        <S.ProblemSectionP>{problemDetails.guidance}</S.ProblemSectionP>
      </S.ProblemSection>
      <S.ProblemSection>
        <ProblemSubtitle subtitle="Propozycja podsumowania zajęć"></ProblemSubtitle>
        <S.ProblemSectionP>{problemDetails.guidance}</S.ProblemSectionP>
      </S.ProblemSection>
    </S.ProblemDetailedWrapper>
  ) : (
    <div>Brak danych</div>
  );
};

export default ProblemDetailedPage;
