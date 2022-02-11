import { FC, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Form, Field } from "react-final-form";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import Image from "next/image";

import useAuth from "../../auth/AuthProvider";
import Button from "../../components/atoms/Button";
import Checkbox from "../../components/atoms/Checkbox";
import ErrorMessage from "../../components/atoms/ErrorMessage";
import formInputsValidation from "./validations";
import * as S from "./styles";
import AlertIcon from "../../public/assets/img/icons/alert-triangle.svg";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}

const LoginPage: FC = () => {
  const t = useTranslations("loginPage");
  const [passwordShown, setPasswordShown] = useState(false);
  const [checked, setChecked] = useState(false);
  const { signin, user, loginError, setLoginError } = useAuth();

  useEffect(() => {
    setLoginError(undefined);
  }, []);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const onSubmit = (values: { email: string; password: string }) => {
    signin(values.email, values.password, checked);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const navigate = useRouter();

  if (user) {
    navigate.push("/problems-page");
  } else {
    return (
      <S.LoginPageWrapper>
        <S.LeftTopBubblesImg>
          <Image
            src="/assets/img/left-top-bubbles.png"
            width="62"
            height="66"
            layout="responsive"
          />
        </S.LeftTopBubblesImg>
        <S.LeftBottomBubblesImg>
          <Image
            src="/assets/img/left-bottom-bubbles.png"
            width="115"
            height="100"
            layout="responsive"
          />
        </S.LeftBottomBubblesImg>
        <S.RightBubblesImg>
          <Image
            src="/assets/img/right-bubbles.png"
            width="160"
            height="112"
            layout="responsive"
          />
        </S.RightBubblesImg>
        <S.LoginFormWrapper>
          <S.H4>{t("loginHeader")}</S.H4>
          <S.InfoText>{t("loginSubtitle")}</S.InfoText>
          <S.StyledLink href="/">{t("learnMore")}</S.StyledLink>
          {loginError && (
            <S.LoginErrorMessage>{t("loginErrorMessage")}</S.LoginErrorMessage>
          )}
          <Form
            onSubmit={onSubmit}
            validate={(values) =>
              formInputsValidation(
                values,
                t("emailErrorMessage"),
                t("passwordErrorMessage")
              )
            }
            render={({ handleSubmit, submitting, hasValidationErrors }) => (
              <S.LoginForm onSubmit={handleSubmit}>
                <Field name="email">
                  {({ input, meta }) => (
                    <S.InputWrapper>
                      <S.Label>{t("email")}</S.Label>
                      <S.Input
                        type="text"
                        {...input}
                        placeholder={t("inputEmailPlaceholder")}
                        validationFailed={meta.touched && meta.error}
                      />
                      {meta.touched && meta.error && (
                        <ErrorMessage>
                          <S.AlertWrapper>
                            <AlertIcon
                              style={{ width: "100%", height: "100%" }}
                            />
                          </S.AlertWrapper>
                          {meta.error}
                        </ErrorMessage>
                      )}
                    </S.InputWrapper>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <S.InputWrapper>
                      <S.Label>{t("password")}</S.Label>
                      <S.Input
                        type={passwordShown ? "text" : "password"}
                        {...input}
                        placeholder={t("inputPasswordPlaceholder")}
                        validationFailed={meta.touched && meta.error}
                      />
                      <S.ShowPasswordButton
                        onClick={togglePassword}
                        aria-pressed="false"
                        aria-label={t("showPasswordIconAlt")}
                        role="switch"
                        type="button"
                      >
                        {passwordShown ? <S.EyeIcon /> : <S.EyeOffIcon />}
                      </S.ShowPasswordButton>
                      {meta.touched && meta.error && (
                        <ErrorMessage>
                          <S.AlertWrapper>
                            <AlertIcon
                              style={{ width: "100%", height: "100%" }}
                            />
                          </S.AlertWrapper>
                          {meta.error}
                        </ErrorMessage>
                      )}
                    </S.InputWrapper>
                  )}
                </Field>
                <S.LoginOptions>
                  <S.Label>
                    <Checkbox
                      aria-label={t("rememberMeCheckbox")}
                      checked={checked}
                      onChange={handleCheckboxChange}
                    />
                    <S.InfoText>{t("rememberMeCheckbox")}</S.InfoText>
                  </S.Label>
                  <S.StyledLink href="/">{t("forgetPassword")}</S.StyledLink>
                </S.LoginOptions>
                <Button
                  type="submit"
                  disabled={submitting || hasValidationErrors}
                  $alignSelf="center"
                >
                  {t("login")}
                </Button>
              </S.LoginForm>
            )}
          />
        </S.LoginFormWrapper>
      </S.LoginPageWrapper>
    );
  }
};
export default LoginPage;
