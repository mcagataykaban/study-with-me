import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyledInnerDiv, StyledDiv, StyledInput } from "./styles";
import { Button, LocaleSelector } from "../../";
import { useAuth } from "../../../context/authContext";
import { countryList } from "../../../__mockdata__/countryList";

const ContactForm = () => {
    useEffect(() => {
        
    }, [userInfo])
  const { t, i18 } = useTranslation();
  const { login, userInfo, setUserInfo, loggedIn } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: null,
    text: "",
    country: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPhoneValid, setIsPhoneValid] = useState(null);

  const nameHandler = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const emailHandler = (e) => {
    setIsEmailValid(e.target.validity.valid ? 1 : 0);
    setForm({ ...form, email: e.target.value });
  };

  const phoneHandler = (e) => {
    setIsPhoneValid(e.target.validity.valid ? 1 : 0);
    setForm({ ...form, phone: e.target.value });
  };

  const messageHandler = (e) => {
    setForm({ ...form, text: e.target.value });
  };

  const countryHandler = (e) => {
    setForm({ ...form, country: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(form));
    e.target.reset();
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h4>{t("contactForm")}</h4>
        <form onSubmit={submitForm}>
          <StyledInnerDiv>
            <StyledDiv>{t("name")}</StyledDiv>
            <input
              required
              defaultValue={loggedIn ? userInfo?.name : ""}
              onChange={nameHandler}
              type="text"
            />
          </StyledInnerDiv>
          <StyledInnerDiv>
            <StyledDiv>{t("email")}</StyledDiv>
            <StyledInput
              required
              valid={isEmailValid}
              defaultValue={loggedIn ? userInfo?.email : ""}
              onChange={emailHandler}
              type="email"
            />
          </StyledInnerDiv>
          <StyledInnerDiv>
            <StyledDiv>{t("phone")}</StyledDiv>
            <StyledInput
              valid={isPhoneValid}
              onChange={phoneHandler}
              type="number"
            />
          </StyledInnerDiv>
          <StyledInnerDiv>
            <StyledDiv>{t("message")}</StyledDiv>
            <textarea onChange={messageHandler} type="text" />
          </StyledInnerDiv>
          <StyledInnerDiv>
            <StyledDiv>{t("country")}</StyledDiv>
            <input onChange={countryHandler} type="text" list="countrys" />
            <datalist id="countrys">
              {countryList.map((country) => {
                return <option value={country.id}>{t(country.id)}</option>;
              })}
            </datalist>
          </StyledInnerDiv>
          <Button>{t("submit")}</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
