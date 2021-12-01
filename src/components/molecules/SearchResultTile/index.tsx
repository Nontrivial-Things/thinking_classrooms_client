import { FC } from "react";

import Tag from "../../atoms/Tag";
import Button from "../../atoms/Button";
import * as S from "./styles";
import { SearchResultTileProps } from "./interface";

const SearchResultTile: FC<SearchResultTileProps> = ({
  text,
  tags,
  author,
  date,
  educationStage,
}) => {
  return (
    <S.SearchResultTileWrapper>
      <S.DetailsWrapper>
        <S.Title>{text}</S.Title>
        <S.AuthorWrapper>
          <S.Details>{author}</S.Details>
          <S.Details>•</S.Details>
          <S.Details>{date}</S.Details>
        </S.AuthorWrapper>
        <S.TagWrapper>
          <S.Stage>{educationStage}</S.Stage>
          {tags &&
            tags.map((tagText: string) => <Tag text={tagText} key={tagText} />)}
        </S.TagWrapper>
      </S.DetailsWrapper>
      <Button isPrimary={false} isHidden>
        Zobacz treść
      </Button>
    </S.SearchResultTileWrapper>
  );
};

export default SearchResultTile;
