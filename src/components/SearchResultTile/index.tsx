import { FC } from "react";
import Tag from "../Tag";
import {
  SearchResultTileWrapper,
  AuthorWrapper,
  TagWrapper,
  DetailsP,
  TitleP,
  StageP,
} from "./styledComponents";
import { SearchResultTileProps } from "./interface";

const SearchResultTile: FC<SearchResultTileProps> = ({
  text,
  tagText,
  author,
  date,
  educationStage,
}) => {
  return (
    <SearchResultTileWrapper>
      <TitleP>{text}</TitleP>
      <AuthorWrapper>
        <DetailsP>{author}</DetailsP>
        <DetailsP>•</DetailsP>
        <DetailsP>{date}</DetailsP>
      </AuthorWrapper>
      <TagWrapper>
        <StageP>{educationStage}</StageP>
        <Tag text={tagText} />
        <Tag text={tagText} />
      </TagWrapper>
    </SearchResultTileWrapper>
  );
};

export default SearchResultTile;
