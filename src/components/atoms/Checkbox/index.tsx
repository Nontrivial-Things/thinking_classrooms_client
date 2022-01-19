import { FC } from "react";

import { CheckBoxProps } from "./interface";
import * as S from "./styles";

const Checkbox: FC<CheckBoxProps> = (checked) => (
  <S.CheckboxContainer>
    <S.HiddenCheckbox checked={checked} />
    <S.StyledCheckbox checked={checked}>
      <S.CheckIcon checked={checked}></S.CheckIcon>
    </S.StyledCheckbox>
  </S.CheckboxContainer>
);

export default Checkbox;
