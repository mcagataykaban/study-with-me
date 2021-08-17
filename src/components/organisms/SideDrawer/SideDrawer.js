import React from "react";
import { StyledDiv, StyledBackdrop, MenuItem } from "./styles";
import { FlexBox, Button, LocaleSelector } from "../..";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLang } from "../../../helpers/changeLang";
import i18n from "../../../i18n";
import { useAuth } from "../../../context/authContext";

const SideDrawer = ({ setIsOpenDrawer, showModal, ...rest }) => {
  const { t, i18 } = useTranslation();
  const { loggedIn, userInfo, logout } = useAuth();
  const loginHandler = () => {
    showModal();
    setIsOpenDrawer(false);
  };

  return (
    <>
      <StyledBackdrop
        onClick={() => {
          setIsOpenDrawer(false);
        }}
        {...rest}
      />
      <StyledDiv {...rest}>
        <FlexBox style={{ marginTop: 20, marginBottom: 20 }}>
          {!loggedIn ? (
            <Button onClick={loginHandler}>{t("login")}</Button>
          ) : (
            <FlexBox style={{flexDirection: 'column'}}>
              <div>{userInfo?.name}</div>
              <div>{userInfo?.email}</div>
              <Button onClick={logout}>{t("logout")}</Button>
            </FlexBox>
          )}
        </FlexBox>
        <Link to="/">
          <MenuItem
            onClick={() => {
              setIsOpenDrawer(false);
            }}
          >
            {t("home")}
          </MenuItem>
        </Link>
        <Link to="/Contact">
          <MenuItem
            onClick={() => {
              setIsOpenDrawer(false);
            }}
          >
            {t("contact")}
          </MenuItem>
        </Link>

        <LocaleSelector />
      </StyledDiv>
    </>
  );
};

export default SideDrawer;
