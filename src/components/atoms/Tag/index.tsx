import { FC } from "react";

import * as S from "./styles";
import { TagProps } from "./interface";

const Tag: FC<TagProps> = ({ text, isDroppable = false }) => {
  return (
    <S.TagWrapper>
      {text}
      {isDroppable && (
        <S.RemoveButton aria-label="Usuń tag">
          <S.RemoveTagIcon />
        </S.RemoveButton>
      )}
    </S.TagWrapper>
  );
};

export default Tag;
