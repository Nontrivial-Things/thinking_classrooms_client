import React, { FC } from "react";

import { TagWrapper, SubtractComponent } from "./styledComponents";
import { TagNameProps } from "./interface";

const Tag: FC<TagNameProps> = ({ text, removeTag }) => {
  return (
    <TagWrapper
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {text}
      {removeTag && <SubtractComponent />}
    </TagWrapper>
  );
};

export default Tag;
