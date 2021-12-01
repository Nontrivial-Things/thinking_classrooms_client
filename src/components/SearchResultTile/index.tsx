import { FC } from "react";

import Tag from "../Tag";
import Button from "../Button";
import {
  SearchResultTileWrapper,
  AuthorWrapper,
  TagWrapper,
  DetailsWrapper,
  Details,
  Title,
  Stage,
} from "./styles";
import { SearchResultTileProps } from "./interface";

const SearchResultTile: FC<SearchResultTileProps> = ({
  text,
  tags,
  author,
  date,
  educationStage,
}) => {
  return (
    <SearchResultTileWrapper>
      <DetailsWrapper>
        <Title>{text}</Title>
        <AuthorWrapper>
          <Details>{author}</Details>
          <Details>•</Details>
          <Details>{date}</Details>
        </AuthorWrapper>
        <TagWrapper>
          <Stage>{educationStage}</Stage>
          {tags &&
            tags.map((tagText: string) => <Tag text={tagText} key={tagText} />)}
        </TagWrapper>
      </DetailsWrapper>
      <Button isPrimary={false} isHidden>
        Zobacz treść
      </Button>
    </SearchResultTileWrapper>
  );
};

export default SearchResultTile;
