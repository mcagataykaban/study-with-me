import React, { useState } from "react";
import { Nav, MenuItem, Wrapper } from "./styles";
import { FlexBox, Button, HamburgerButton, SideDrawer } from "../";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLang } from '../../helpers/changeLang'
import i18n from '../../i18n'

const Navbar = ({ logo }) => {
  const { t, i18 } = useTranslation();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <>
        <SideDrawer
          isOpenDrawer={isOpenDrawer}
          setIsOpenDrawer={setIsOpenDrawer}
          isOpen={isOpenDrawer}
        ></SideDrawer>
        <Nav>
          <div style={{ marginLeft: 20 }}>{logo}</div>
          <HamburgerButton
            onClick={() => {
              setIsOpenDrawer(!isOpenDrawer);
              console.log(isOpenDrawer);
            }}
          />
          <Wrapper>
            <FlexBox style={{ marginRight: 20 }}>
              <Button selected={i18n.language === 'tr' ? true : false} onClick={changeLang("tr")}>TR</Button>
              <Button selected={i18n.language === 'en' ? true : false} onClick={changeLang("en")}>EN</Button>
            </FlexBox>
            <FlexBox style={{ marginRight: 20 }}>
              <Link to="/">
                <MenuItem>{t("home")}</MenuItem>
              </Link>
              <Link to="/Contact">
                  <MenuItem>{t("contact")}</MenuItem>
              </Link>
              <Button>{t("login")}</Button>
            </FlexBox>
          </Wrapper>
        </Nav>
    </>
  );
};

export default Navbar;
