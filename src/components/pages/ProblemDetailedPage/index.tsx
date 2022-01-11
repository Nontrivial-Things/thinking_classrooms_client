import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("", { keyPrefix: "problemDetailedPage" });

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
          {t("goBackToProblemsList")}
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
            {t("downloadProblem")}
          </Button>
        </S.Section>
        <S.ProblemSection>
          <ProblemSubtitle subtitle={t("problemContent")} />
          <S.ProblemSectionP>{problemDetails.description}</S.ProblemSectionP>
          <S.ProblemSectionP>{problemDetails.question}</S.ProblemSectionP>
        </S.ProblemSection>
        <S.ProblemSection>
          <ProblemSubtitle subtitle={t("answer")} />
          <S.ProblemSectionP>{problemDetails.answer}</S.ProblemSectionP>
        </S.ProblemSection>
        <S.ProblemSection>
          <ProblemSubtitle subtitle={t("resources")} />
          <S.ProblemSectionP>{problemDetails.resources}</S.ProblemSectionP>
        </S.ProblemSection>
        <S.ProblemSection>
          <ProblemSubtitle subtitle={t("openingGuidance")} />
          <S.ProblemSectionP>
            {problemDetails.openingGuidance}
          </S.ProblemSectionP>
        </S.ProblemSection>
        <S.ProblemExtensionHeading>
          {t("problemExtension")}
        </S.ProblemExtensionHeading>
        <S.ProblemSection>
          <ProblemSubtitle
            color={secondarySubtitle}
            subtitle={t("problemExtensionContent")}
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
            subtitle={t("answer")}
          ></ProblemSubtitle>
          <S.ProblemSectionP>
            {problemDetails.extension?.answer}
          </S.ProblemSectionP>
        </S.ProblemSection>
        <S.ProblemSection>
          <ProblemSubtitle subtitle={t("guidance")}></ProblemSubtitle>
          <S.ProblemSectionP>{problemDetails.guidance}</S.ProblemSectionP>
        </S.ProblemSection>
        <S.ProblemSection>
          <ProblemSubtitle subtitle={t("closingGuidance")}></ProblemSubtitle>
          <S.ProblemSectionP>
            {problemDetails.closingGuidance}
          </S.ProblemSectionP>
        </S.ProblemSection>
      </S.ProblemDetailedContent>
      <ScrollToTopButton />
    </S.ProblemDetailedWrapper>
  ) : null;
};

export default ProblemDetailedPage;
