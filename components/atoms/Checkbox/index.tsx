import { FC } from "react";

import { CheckBoxProps } from "./interface";
import * as S from "./styles";

const Checkbox: FC<CheckBoxProps> = ({ onChange, ...rest }) => {
  return (
    <S.CheckboxContainer>
      <S.HiddenCheckbox onChange={onChange} {...rest} />
      <S.StyledCheckbox {...rest}>
        <S.CheckIcon {...rest} />
      </S.StyledCheckbox>
    </S.CheckboxContainer>
  );
};

export default Checkbox;
