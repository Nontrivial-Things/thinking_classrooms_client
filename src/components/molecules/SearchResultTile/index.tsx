import { FC } from "react";
import { Link } from "react-router-dom";

import Tag from "../../atoms/Tag";
import Button from "../../atoms/Button";
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
      <Link to={`/problems/${id}`}>
        <Button isPrimary={false} isHidden>
          Zobacz treść
        </Button>
      </Link>
    </S.SearchResultTileWrapper>
  );
};

export default SearchResultTile;
