import { FC, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";

import { Login, LOGIN } from "./interface";
import Button from "../../atoms/Button";
import ErrorMessage from "../../atoms/ErrorMessage";
import { ReactComponent as AlertIcon } from "../../../assets/img/icons/alert-triangle.svg";
import * as S from "./styles";

const LoginPage: FC = () => {
  const { t } = useTranslation("", { keyPrefix: "loginPage" });
  const [login, { data, loading, error }] = useMutation<Login>(LOGIN);

  const onSubmit = (values: { email: string; password: string }) => {
    login({ variables: { email: values.email, password: values.password } });
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
                    <label>{t("email")}</label>
                    <S.Input
                      type="text"
                      {...input}
                      placeholder={t("inputEmailPlaceholder")}
                    />
                    {meta.touched && meta.error && (
                      <ErrorMessage>
                        <AlertIcon />
                        {meta.error}
                      </ErrorMessage>
                    )}
                  </S.InputWrapper>
                )}
              </Field>

              <Field name="password">
                {({ input, meta }) => (
                  <S.InputWrapper>
                    <label>{t("password")}</label>
                    <S.Input
                      type="password"
                      {...input}
                      placeholder={t("inputPasswordPlaceholder")}
                    />
                    {meta.touched && meta.error && (
                      <ErrorMessage>{meta.error}</ErrorMessage>
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
