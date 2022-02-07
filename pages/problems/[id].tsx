import { FC, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useTranslations } from "next-intl";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import ProblemSubtitle from "../../components/atoms/ProblemSubtitle";
import Tag from "../../components/atoms/Tag";
import ScrollToTopButton from "../../components/atoms/ScrollToTopButton";
import Button from "../../components/atoms/Button";

import {
  ExtendedProblemDetails,
  GetProblemDetailsQuery,
  PROBLEM_DETAILS,
} from "./interface";
import { formatDate } from "./utils";
import { secondarySubtitle } from "../../styles/colors";
import * as S from "./styles";
import StyledButtonLink from "../../components/atoms/Button/StyledButtonLink";
import { DownloadIcon } from "../../components/atoms/Button/styles";

import { GetStaticPropsContext } from "next";
import { PROBLEMS } from "../problems-page/interface";
import { client } from "../../apolloClient";

export async function getStaticPaths() {
  const apolloClient = client(true);
  const { data } = await apolloClient.query({ query: PROBLEMS });

  const problems = data?.problems;
  const paths = problems.map((problem: any) => ({
    params: { id: problem.id.toString() },
  }));
  return {
    paths: paths || [],
    fallback: true,
  };
}

export async function getStaticProps({
  locale,
  params,
}: GetStaticPropsContext) {
  const apolloClient = client(true);

  const { data } = await apolloClient.query({
    query: PROBLEM_DETAILS,
    variables: { id: params.id },
  });
  const problemDetails = data?.problem;

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
      problemDetails,
    },
  };
}

const ProblemDetailedPage: FC = () => {
  const t = useTranslations("problemDetailedPage");

  const router = useRouter();
  const { id } = router.query;

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

  const printRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current as HTMLDivElement;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm");

    let position = 0;

    const imgProperties = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.width - 20;

    const pageHeight = 297;
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    let heightLeft = pdfHeight;

    pdf.addImage(imgData, "PNG", 10, position, pdfWidth, pdfHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 10, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;
    }
    pdf.save(problemDetails.title);
  };

  return (
    <S.ProblemDetailedWrapper>
      <S.GoToProblemsListWrapper>
        <S.Arrow />
        <S.GoToProblemsListSpan href="/">
          {t("goBackToProblemsList")}
        </S.GoToProblemsListSpan>
      </S.GoToProblemsListWrapper>
      <S.ProblemDetailedContent ref={printRef}>
        <S.EducationLevel>{problemDetails.level}</S.EducationLevel>
        <S.TitleHeading>{problemDetails.title}</S.TitleHeading>
        <S.ProblemCreationDetailsWrapper>
          <S.ProblemCreationDetails>
            {problemDetails.author}
          </S.ProblemCreationDetails>
          <S.ProblemCreationDetails>{formattedDate}</S.ProblemCreationDetails>
        </S.ProblemCreationDetailsWrapper>
        <S.Section data-html2canvas-ignore="true">
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
            onClick={handleDownloadPdf}
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
        <S.ProblemSection data-html2canvas-ignore="true">
          <ProblemSubtitle subtitle={t("resources")} />
          <StyledButtonLink
            $isPrimary={false}
            $alignSelf={"flex-start"}
            href={"/problem_detailed_page.pdf"}
          >
            {/* <DownloadIcon aria-hidden title="Ikona Pobierania" /> */}
            <a target="_blank" download="problem_detailed_page">
              {problemDetails.resources?.replace(/\s/g, `\u00A0`)}
            </a>
          </StyledButtonLink>
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
  );
};

export default ProblemDetailedPage;
