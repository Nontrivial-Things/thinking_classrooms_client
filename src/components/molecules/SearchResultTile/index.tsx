import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Tag from "../../atoms/Tag";
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
        <Link to={`/problems/${id}`}>
          <S.Title>{title}</S.Title>
        </Link>
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
      <S.StyledButtonLink $isPrimary={false} $isHidden to={`/problems/${id}`}>
        {t("showDetails")}
      </S.StyledButtonLink>
    </S.SearchResultTileWrapper>
  );
};

export default SearchResultTile;
