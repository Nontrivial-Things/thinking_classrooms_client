import React, { FC, useEffect } from "react";

import OnKeyPressProps from "./interface";

export const onKeyPress: FC<OnKeyPressProps> = (key, action) => {
  useEffect(() => {
    function onKeyup(e: React.ChangeEvent<HTMLDivElement>) {
      if (e.key === key) action();
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, []);
  return null;
};
