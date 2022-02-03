import { FC } from "react";
import { useTranslation } from "react-i18next";

import Tag from "../../atoms/Tag";
import StyledButtonLink from "../../atoms/Button/StyledButtonLink";
import * as S from "./styles";
import { ProblemSummaryProps } from "./interface";

const SearchResultTile: FC<ProblemSummaryProps> = ({
  title,
  tags,
  author,
  createdAt,
  level,
  id,
}) => {
  const { t } = useTranslation("", { keyPrefix: "button" });

  return (
    <S.SearchResultTileWrapper>
      <S.DetailsWrapper>
        <S.Title>
          <S.StyledTitleLink href={`/problems/${id}`}>
            {title}
          </S.StyledTitleLink>
        </S.Title>
        <S.AuthorWrapper>
          <S.Details>{author}</S.Details>
          <S.Details>•</S.Details>
          <S.Details>{createdAt}</S.Details>
        </S.AuthorWrapper>
        <S.TagWrapper>
          <S.Stage>{level}</S.Stage>
          {tags &&
            tags.map((tagText: string) => <Tag text={tagText} key={tagText} />)}
        </S.TagWrapper>
      </S.DetailsWrapper>
      <StyledButtonLink $isPrimary={false} $isHidden to={`/problems/${id}`}>
        {t("showDetails")}
      </StyledButtonLink>
    </S.SearchResultTileWrapper>
  );
};

export default SearchResultTile;
