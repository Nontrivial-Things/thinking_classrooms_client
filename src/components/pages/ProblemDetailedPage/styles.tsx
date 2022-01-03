import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../../../assets/img/icons/arrow-left.svg";
import { blue100, grey300 } from "../../../assets/styles/colors";

const GoToBackWrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: ${blue100};
  margin-bottom: 4.8rem;
`;

const Arrow = styled(ArrowLeft)`
  width: 1.6rem;
`;

const GoToBackSpan = styled.span`
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-left: 1.1rem;
`;

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
`;

const ProblemCreationDetailsWrapper = styled.div`
  display: flex;
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

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 4rem;
`;

const ProblemSection = styled.section`
  font-size: 1.4rem;
  line-height: 2.4rem;
  /* margin-top: 1rem; */
`;

const ProblemSectionP = styled.p`
  margin-bottom: 2rem;
`;

const ProblemExtensionHeading = styled.h1`
  font-size: 2rem;
  line-height: 3.2rem;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 1.6rem;
`;

export {
  GoToBackWrapper,
  Arrow,
  GoToBackSpan,
  EducationLevel,
  TitleHeading,
  ProblemCreationDetailsWrapper,
  ProblemCreationDetails,
  TagsWrapper,
  ProblemSection,
  ProblemSectionP,
  ProblemExtensionHeading,
};
