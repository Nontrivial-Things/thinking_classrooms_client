import { FC, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";

import { Login, LOGIN } from "./interface";
import Button from "../../atoms/Button";
import ErrorMessage from "../../atoms/ErrorMessage";
import * as S from "./styles";

const LoginPage: FC = () => {
  const { t } = useTranslation("", { keyPrefix: "loginPage" });
  const [login, { data, loading, error }] = useMutation<Login>(LOGIN);
  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit = (values: { email: string; password: string }) => {
    login({ variables: { email: values.email, password: values.password } });
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <S.LoginPageWrapper>
      <S.RightBubblesImg />
      <S.LoginFormWrapper>
        <S.H4>{t("loginHeader")}</S.H4>
        <S.LoginSubtitle>{t("loginSubtitle")}</S.LoginSubtitle>
        <S.LearnMoreLink to="/">{t("learnMore")}</S.LearnMoreLink>
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

              <Button type="submit" disabled={submitting}>
                {t("login")}
              </Button>
            </S.LoginForm>
          )}
        />
      </S.LoginFormWrapper>
    </S.LoginPageWrapper>
  );
};

export default LoginPage;
