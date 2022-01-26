import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";
import { Navigate } from "react-router-dom";

import Button from "../../atoms/Button";
import ErrorMessage from "../../atoms/ErrorMessage";
import useAuth from "../../../auth/AuthProvider";
import * as S from "./styles";
import formInputsValidation from "./validations";

const LoginPage: FC = () => {
  const { t } = useTranslation("", { keyPrefix: "loginPage" });
  const [passwordShown, setPasswordShown] = useState(false);
  const [checked, setChecked] = useState(false);
  const { signin, user, error } = useAuth();

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const onSubmit = (values: { email: string; password: string }) => {
    signin(values.email, values.password);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return !user ? (
    <S.LoginPageWrapper>
      <S.LeftTopBubblesImg />
      <S.LeftBottomBubblesImg />
      <S.RightBubblesImg />
      <S.LoginFormWrapper>
        <S.H4>{t("loginHeader")}</S.H4>
        <S.InfoText>{t("loginSubtitle")}</S.InfoText>
        <S.StyledLink to="/">{t("learnMore")}</S.StyledLink>
        {error && (
          <S.LoginErrorMessage>{t("loginErrorMessage")}</S.LoginErrorMessage>
        )}
        <Form
          onSubmit={onSubmit}
          validate={formInputsValidation}
          render={({
            handleSubmit,
            submitting,
            pristine,
            hasValidationErrors,
          }) => (
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
                  <S.Checkbox
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                  <S.InfoText>{t("rememberMeCheckbox")}</S.InfoText>
                </S.Label>
                <S.StyledLink to="/">{t("forgetPassword")}</S.StyledLink>
              </S.LoginOptions>
              <Button
                type="submit"
                disabled={submitting || pristine || hasValidationErrors}
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
    <Navigate to="/" />
  );
};

export default LoginPage;
