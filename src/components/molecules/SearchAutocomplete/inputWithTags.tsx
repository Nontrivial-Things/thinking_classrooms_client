import { FC } from "react";

import Tag from "../../atoms/Tag";

import * as S from "./styles";
import { InputWithTagsProps } from "./interface";

const InputWithTags: FC<InputWithTagsProps> = ({
  text,
  onRemoveTag,
  setSuggestionType,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Backspace") {
      setSuggestionType("");
    }
    if (e.key === "Enter") {
      e.preventDefault();
      return false;
    }
  };

  return (
    <S.InputWithTags
      aria-label="Input z tagiem"
      contentEditable="true"
      suppressContentEditableWarning={true}
      onKeyDown={(e) => handleKeyDown(e)}
    >
      <S.SearchIcon top="1.5rem" />
      <Tag text={text} isDroppable onRemoveTag={onRemoveTag} />
    </S.InputWithTags>
  );
};

export default InputWithTags;
