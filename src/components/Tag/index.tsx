import React, { FC } from "react";

import { TagNameProps } from "./interface";
import SubtractTag from "../../assets/img/icons/Subtract-tag.svg";
import { TagWrapper, Img } from "./styledComponents";

const Tag: FC<TagNameProps> = ({ text, removeTag }) => {
  return (
    <TagWrapper
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {text}
      {removeTag && <Img src={SubtractTag} />}
    </TagWrapper>
  );
};

export default Tag;
