import { FC } from "react";

import { CheckBoxProps } from "./interface";
import * as S from "./styles";

const Checkbox: FC<CheckBoxProps> = ({ checked, onChange }) => {
  return (
    <S.CheckboxContainer>
      <S.HiddenCheckbox checked={checked} onChange={onChange} />
      <S.StyledCheckbox checked={checked}>
        <S.CheckIcon checked={checked} />
      </S.StyledCheckbox>
    </S.CheckboxContainer>
  );
};

export default Checkbox;
