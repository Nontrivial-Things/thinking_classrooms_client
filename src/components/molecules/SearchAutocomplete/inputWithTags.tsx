import { FC } from "react";

import Tag from "../../atoms/Tag";

import * as S from "./styles";
import { InputWithTagsProps } from "./interface";

const InputWithTags: FC<InputWithTagsProps> = ({
  text,
  onRemoveTag,
  setTag,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    switch (e.key) {
      case "Backspace":
        break;
      case "Enter":
        e.preventDefault();
        break;
      default:
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
      <Tag
        text={text}
        fontSize="1.4rem"
        isDroppable
        onRemoveTag={onRemoveTag}
      />
    </S.InputWithTags>
  );
};

export default InputWithTags;
