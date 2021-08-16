import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useModal from "../../../hooks/useModal";
import i18n from "../../../i18n";
import { changeLang } from "../../../helpers/changeLang";
import { Nav, MenuItem, Wrapper } from "./styles";
import {
  Modal,
  FlexBox,
  Button,
  HamburgerButton,
  SideDrawer,
  Breadcrumb,
} from "../..";

const Navbar = ({ logo, breadCrumbText }) => {
  const { t, i18 } = useTranslation();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { isModalVisible, showModal, handleOk, handleCancel } = useModal();
  return (
    <>
      <Modal handleCancel={handleCancel} visible={isModalVisible}>
        sad
      </Modal>
      <SideDrawer
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
        isOpen={isOpenDrawer}
      ></SideDrawer>
      <Nav>
        <FlexBox>
          <div style={{ marginLeft: 20 }}>{logo}</div>
          <Breadcrumb text={breadCrumbText} />
        </FlexBox>
        <HamburgerButton
          onClick={() => {
            setIsOpenDrawer(!isOpenDrawer);
          }}
        />
        <Wrapper>
          <FlexBox style={{ marginRight: 20 }}>
            <Button
              selected={i18n.language === "tr" ? true : false}
              onClick={changeLang("tr")}
            >
              TR
            </Button>
            <Button
              selected={i18n.language === "en" ? true : false}
              onClick={changeLang("en")}
            >
              EN
            </Button>
          </FlexBox>
          <FlexBox style={{ marginRight: 20 }}>
            <Link to="/">
              <MenuItem>{t("home")}</MenuItem>
            </Link>
            <Link to="/Contact">
              <MenuItem>{t("contact")}</MenuItem>
            </Link>
            <Button onClick={showModal}>{t("login")}</Button>
          </FlexBox>
        </Wrapper>
      </Nav>
    </>
  );
};

export default Navbar;
