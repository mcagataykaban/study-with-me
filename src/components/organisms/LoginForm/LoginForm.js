import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { matchPath } from "react-router";
import { StyledInnerDiv } from "./styles";
import { Button, LocaleSelector } from "../../";
import { useAuth } from "../../../context/authContext";

const LoginForm = ({handleCancel}) => {
  const { t, i18 } = useTranslation();
  const [formInputs, setFormInputs] = useState({name: '', email: '', password: '' })
  const { login, userInfo, setUserInfo } = useAuth();

  const nameHandler = (e) => {
    setFormInputs({ ...formInputs, name: e.target.value });
  };

  const emailHandler = (e) => {
    setFormInputs({ ...formInputs, email: e.target.value });
  };

  const passwordHandler = (e) => {
    setFormInputs({ ...formInputs, password: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setUserInfo(formInputs)
    login();
    e.target.reset();
    handleCancel();
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <form onSubmit={submitForm}>
          <StyledInnerDiv>
            {t("name")}
            <input onChange={nameHandler} type="text" />
          </StyledInnerDiv>
          <StyledInnerDiv>
            {t("email")}
            <input onChange={emailHandler} type="email" />
          </StyledInnerDiv>
          <StyledInnerDiv>
            {t("password")}
            <input onChange={passwordHandler} type="password" />
          </StyledInnerDiv>
          <Button>{t("login")}</Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
