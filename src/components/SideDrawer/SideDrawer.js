import React from "react";
import { StyledDiv, StyledBackdrop, MenuItem } from "./styles";
import { FlexBox, Button } from "../";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLang } from "../../helpers/changeLang";
import i18n from '../../i18n';


const SideDrawer = ({ setIsOpenDrawer, ...rest }) => {
  const { t, i18 } = useTranslation();
  console.log(i18n.language)
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
          <Button>{t("login")}</Button>
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

        <FlexBox style={{ marginTop: 20 }}>
          <Button selected={i18n.language === 'tr' ? true : false} onClick={changeLang("tr")}>TR</Button>
          <Button selected={i18n.language === 'en' ? true : false} onClick={changeLang("en")}>EN</Button>
        </FlexBox>
      </StyledDiv>
    </>
  );
};

export default SideDrawer;
