import { FC } from "react";
import Tag from "../Tag";
import Button from "../Button";
import {
  SearchResultTileWrapper,
  AuthorWrapper,
  TagWrapper,
  DetailsWrapper,
  DetailsP,
  TitleP,
  StageP,
} from "./styledComponents";
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
        <TitleP>{text}</TitleP>
        <AuthorWrapper>
          <DetailsP>{author}</DetailsP>
          <DetailsP>•</DetailsP>
          <DetailsP>{date}</DetailsP>
        </AuthorWrapper>
        <TagWrapper>
          <StageP>{educationStage}</StageP>
          {tags &&
            tags.map((tagText: string, index: number) => {
              return <Tag text={tagText} key={tagText} />;
            })}
        </TagWrapper>
      </DetailsWrapper>
      <Button isPrimary={false} isHidden>
        Zobacz treści
      </Button>
    </SearchResultTileWrapper>
  );
};

export default SearchResultTile;
