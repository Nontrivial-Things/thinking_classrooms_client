import { FC } from "react";

import { CheckBoxProps } from "./interface";
import * as S from "./styles";

const Checkbox: FC<CheckBoxProps> = (checked) => {
  return (
    <S.CheckboxContainer>
      <S.HiddenCheckbox />
      <S.StyledCheckbox>
        <S.CheckIcon></S.CheckIcon>
      </S.StyledCheckbox>
    </S.CheckboxContainer>
  );
};

export default Checkbox;
