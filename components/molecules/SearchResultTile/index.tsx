import { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
  const t = useTranslations("button");

  return (
    <S.SearchResultTileWrapper>
      <S.DetailsWrapper>
        <S.Title>
          <Link href={`/problems/${id}`} passHref>
            <S.StyledTitleLink href={`problems/${id}`}>
              {title}
            </S.StyledTitleLink>
          </Link>
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
      <Link href={`/problems/${id}`} passHref>
        <StyledButtonLink $isPrimary={false} $isHidden>
          {t("showDetails")}
        </StyledButtonLink>
      </Link>
    </S.SearchResultTileWrapper>
  );
};

export default SearchResultTile;
