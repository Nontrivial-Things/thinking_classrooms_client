import { FC, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";

import useAuth from "../../src/auth/AuthProvider";
import Button from "../../components/atoms/Button";
import Checkbox from "../../components/atoms/Checkbox";
import ErrorMessage from "../../components/atoms/ErrorMessage";
import formInputsValidation from "./validations";
import * as S from "./styles";
import { useRouter } from "next/router";

const LoginPage: FC = () => {
  const { t } = useTranslation("", { keyPrefix: "loginPage" });
  const [passwordShown, setPasswordShown] = useState(false);
  const [checked, setChecked] = useState(false);
  const { signin, user, loginError, setLoginError } = useAuth();

  useLayoutEffect(() => {
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

  return !user ? (
    <S.LoginPageWrapper>
      <S.LeftTopBubblesImg />
      <S.LeftBottomBubblesImg />
      <S.RightBubblesImg />
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
                        <S.AlertIcon />
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
                        <S.AlertIcon />
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
  ) : (
    <div>{navigate.push("/")}</div>
  );
};

export default LoginPage;
