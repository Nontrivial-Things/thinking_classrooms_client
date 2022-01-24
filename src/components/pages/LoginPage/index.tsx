import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";

import Button from "../../atoms/Button";
import ErrorMessage from "../../atoms/ErrorMessage";
import useAuth from "../../../auth/AuthProvider";
import * as S from "./styles";
import { Navigate, useNavigate } from "react-router-dom";

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
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = " Błędny email";
            }
            if (!values.password) {
              errors.password = " Błędne hasło";
            }
            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
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
                    <S.Label>
                      {t("password")}
                      <S.ShownPasswordButton onClick={togglePassword}>
                        {passwordShown ? <S.EyeIcon /> : <S.EyeOffIcon />}
                      </S.ShownPasswordButton>
                    </S.Label>
                    <S.Input
                      type={passwordShown ? "text" : "password"}
                      {...input}
                      placeholder={t("inputPasswordPlaceholder")}
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
              <Button type="submit" disabled={submitting} $alignSelf="center">
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
