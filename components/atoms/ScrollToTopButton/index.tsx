import { FC, useState } from "react";
import throttle from "lodash.throttle";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";

import * as S from "./styles";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
}

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
      <S.ArrowUpIcon onClick={scrollToTop} />
    </S.ScrollButton>
  );
};

export default ScrollToTopButton;
