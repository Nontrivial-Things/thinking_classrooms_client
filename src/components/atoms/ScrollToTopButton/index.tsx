import { FC, useState } from "react";

import * as S from "./styles";

const ScrollToTopButton: FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <S.ScrollButton>
      <S.ArrowUpIcon
        title="Ikona przewijania strony do początku"
        onClick={scrollToTop}
        display={visible ? "inline" : "none"}
      />
    </S.ScrollButton>
  );
};

export default ScrollToTopButton;
