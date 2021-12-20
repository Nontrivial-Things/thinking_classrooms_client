import { FC } from "react";

import Tag from "../../atoms/Tag";

import * as S from "./styles";
import { InputWithTagsProps } from "./interface";

const InputWithTags: FC<InputWithTagsProps> = (onRemoveTag, text) => {
  return (
    <S.InputWithTags>
      <S.SearchIcon top="1.5rem" />
      <Tag text={text} isDroppable onRemoveTag={() => onRemoveTag} />
    </S.InputWithTags>
  );
};

export default InputWithTags;
