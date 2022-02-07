import styled from "styled-components";
import Link from "next/link";

// import { ReactComponent as ArrowLeft } from "../../../../public/assets/img/icons/arrow-left.svg";
import { blue100, grey300 } from "../../styles/colors";
import { minDevice } from "../../styles/breakpoints";
import Wrapper from "../../components/atoms/Wrapper";

const ProblemDetailedWrapper = styled(Wrapper)`
  background: white;
  flex-direction: column;
  margin: 1.6rem 0 8rem 0;
  min-height: 100vh;

  @media ${minDevice.desktopTablet} {
    margin-bottom: 2.1rem;
  }

  @media ${minDevice.desktopL} {
    margin: 3.2rem 0 6.4rem 0;
  }
`;

const GoToProblemsListWrapper = styled.span`
  display: flex;
  align-items: center;
  color: ${blue100};
  margin-bottom: 4.8rem;

  @media ${minDevice.desktopTablet} {
    margin-bottom: 5.6rem;
  }

  @media ${minDevice.desktopL} {
    margin-bottom: 7.2rem;
  }
`;

const Arrow = styled.span`
  width: 1.6rem;
`;

const GoToProblemsListSpan = styled(Link)`
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-left: 1.1rem;

  @media ${minDevice.desktopTablet} {
    margin-left: 0.7rem;
  }

  @media ${minDevice.desktopL} {
    font-size: 1.6rem;
  }
`;

const ProblemDetailedContent = styled.div``;

const EducationLevel = styled.span`
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${grey300};
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

const TitleHeading = styled.h1`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: 700;
  margin-bottom: 2.4rem;

  @media ${minDevice.desktopTablet} {
    font-size: 2.4rem;
    line-height: 4.8rem;
  }
`;

const ProblemCreationDetailsWrapper = styled.div`
  display: flex;

  @media ${minDevice.desktopXL} {
    margin-bottom: 1.6rem;
  }
`;

const ProblemCreationDetails = styled(EducationLevel)`
  text-transform: none;
  display: inline;

  &:first-child {
    margin-right: 1rem;
    position: relative;

    &::after {
      content: "•";
      position: absolute;
      margin-left: 0.8rem;
    }
  }
  &:nth-child(2) {
    padding-left: 1rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 4.8rem;

  @media ${minDevice.desktopTablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 7.2rem;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 4rem;

  @media ${minDevice.desktopTablet} {
    margin-bottom: 0;
  }
`;

const ProblemSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;

  @media ${minDevice.desktopTablet} {
    margin-bottom: 5.6rem;
  }
`;

const ProblemSectionP = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;

  @media ${minDevice.desktopTablet} {
    font-size: 1.6rem;
    line-height: 3.2rem;
  }
  & + p {
    margin-top: 1.6rem;
  }
`;

const ProblemExtensionHeading = styled.h1`
  font-size: 2rem;
  line-height: 3.2rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.6rem;

  @media ${minDevice.desktopTablet} {
    font-size: 2.4rem;
    line-height: 4.8rem;
    margin-bottom: 2.4rem;
  }
`;

export {
  ProblemDetailedWrapper,
  GoToProblemsListWrapper,
  Arrow,
  GoToProblemsListSpan,
  ProblemDetailedContent,
  EducationLevel,
  TitleHeading,
  ProblemCreationDetailsWrapper,
  ProblemCreationDetails,
  Section,
  TagsWrapper,
  ProblemSection,
  ProblemSectionP,
  ProblemExtensionHeading,
};
