import { FC } from "react";
import { useTranslation } from "react-i18next";

import Tag from "../../atoms/Tag";

import * as S from "./styles";
import { InputWithTagsProps } from "./interface";

const InputWithTags: FC<InputWithTagsProps> = ({ text, onRemoveTag }) => {
  const { t } = useTranslation("", { keyPrefix: "common" });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Backspace") {
      onRemoveTag();
    } else if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <S.InputWithTags
      aria-label={t("filterByTagInput")}
      contentEditable="true"
      suppressContentEditableWarning={true}
      onKeyDown={handleKeyDown}
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
