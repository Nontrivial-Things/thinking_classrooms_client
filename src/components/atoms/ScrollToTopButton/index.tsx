import { FC, useState } from "react";
import throttle from "lodash.throttle";

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
    });
  };

  window.addEventListener("scroll", throttle(toggleVisible, 100));

  return (
    <S.ScrollButton>
      <S.ArrowUpIcon
        title="Ikona przewijania strony do początku"
        onClick={scrollToTop}
        $visible={visible}
      />
    </S.ScrollButton>
  );
};

export default ScrollToTopButton;
