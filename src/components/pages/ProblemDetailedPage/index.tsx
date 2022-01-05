import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ProblemSubtitle from "../../atoms/ProblemSubtitle";
import Tag from "../../atoms/Tag";
import ScrollToTopButton from "../../atoms/ScrollToTopButton";
import Button from "../../atoms/Button";

import {
  ExtendedProblemDetails,
  GetProblemDetailsQuery,
  PROBLEM_DETAILS,
} from "./interface";
import { formatDate } from "./utils";
import { secondarySubtitle } from "../../../assets/styles/colors";
import * as S from "./styles";

const ProblemDetailedPage: FC = () => {
  const params = useParams();
  const id: string = params.problemId || "";

  const { data, loading } = useQuery<GetProblemDetailsQuery>(PROBLEM_DETAILS, {
    variables: { id },
  });

  const [problemDetails, setProblemDetails] = useState<ExtendedProblemDetails>(
    {} as ExtendedProblemDetails
  );

  const problemsLoaded =
    !!data?.problem?.details &&
    Object.keys(data?.problem?.details).length > 0 &&
    !loading;

  useEffect(() => {
    if (problemsLoaded) {
      const { details } = data.problem;
      setProblemDetails({
        ...details,
      });
    }
  }, [data, loading]);

  const formattedDate =
    problemDetails.createdAt && formatDate(problemDetails.createdAt);

  return problemsLoaded ? (
    <S.ProblemDetailedWrapper>
      <S.GoToProblemsListWrapper to="/">
        <S.Arrow />
        <S.GoToProblemsListSpan>
          Powrót do listy problemów
        </S.GoToProblemsListSpan>
      </S.GoToProblemsListWrapper>
      <S.ProblemDetailedContent>
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
          <S.ProblemSectionP>
            {problemDetails.openingGuidance}
          </S.ProblemSectionP>
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
      </S.ProblemDetailedContent>
      <ScrollToTopButton />
    </S.ProblemDetailedWrapper>
  ) : (
    <div>Brak danych</div>
  );
};

export default ProblemDetailedPage;
