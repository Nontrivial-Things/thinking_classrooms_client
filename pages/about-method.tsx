import { FC } from "react";
import Wrapper from "../components/atoms/Wrapper";
import { GetStaticPropsContext } from "next";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

const AboutMethodPage: FC = () => {
  return (
    <Wrapper margin="3rem" minHeight="90vh">
      <h2>Co to są Myślące Klasy?</h2>
    </Wrapper>
  );
};

export default AboutMethodPage;
