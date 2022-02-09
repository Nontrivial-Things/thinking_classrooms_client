import { FC } from "react";

import * as S from "./styles";
import { TagProps } from "./interface";
import Image from "next/image";
import RemoveIcon from "../../../public/assets/img/icons/remove-icon.svg";

const Tag: FC<TagProps> = ({
  text,
  fontSize,
  onRemoveTag,
  isDroppable = false,
}) => (
  <S.TagWrapper fontSize={fontSize}>
    {text}
    {isDroppable && (
      <S.RemoveButton
        aria-label="Usuń tag"
        onClick={() => !!onRemoveTag && onRemoveTag()}
      >
        <S.RemoveTagIcon style={{ width: "100%" }} />
      </S.RemoveButton>
    )}
  </S.TagWrapper>
);

export default Tag;
