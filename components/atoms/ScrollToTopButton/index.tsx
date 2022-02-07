import { FC, useState } from "react";
import throttle from "lodash.throttle";
import { useTranslations } from "next-intl";

import * as S from "./styles";

const ScrollToTopButton: FC = () => {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("common");

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
      });
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", throttle(toggleVisible, 100));
  }

  return (
    <S.ScrollButton $visible={visible}>
      <S.ArrowUpIcon title={t("scrollIconTitle")} onClick={scrollToTop} />
    </S.ScrollButton>
  );
};

export default ScrollToTopButton;
