import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useModal from "../../../hooks/useModal";
import { Nav, MenuItem, Wrapper, NameArea } from "./styles";
import {
  Modal,
  FlexBox,
  Button,
  HamburgerButton,
  SideDrawer,
  Breadcrumb,
  LoginForm,
  LocaleSelector,
} from "../..";
import { useAuth } from "../../../context/authContext";
import { Popover } from "react-tiny-popover";

const Navbar = ({ logo, breadCrumbText }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { t, i18 } = useTranslation();
  const { loggedIn, userInfo, logout } = useAuth();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { isModalVisible, showModal, handleOk, handleCancel } = useModal();
  return (
    <>
      <Modal
        haveLocaleSelector
        title={t("login")}
        handleCancel={handleCancel}
        visible={isModalVisible}
      >
        <LoginForm handleCancel={handleCancel} />
      </Modal>
      <SideDrawer
        showModal={showModal}
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
          <LocaleSelector />
          <FlexBox style={{ marginRight: 20 }}>
            <Link to="/">
              <MenuItem>{t("home")}</MenuItem>
            </Link>
            <Link to="/Contact">
              <MenuItem>{t("contact")}</MenuItem>
            </Link>
            {!loggedIn ? (
              <Button onClick={showModal}>{t("login")}</Button>
            ) : (
              <Popover
                onClickOutside={() => setIsPopoverOpen(false)}
                isOpen={isPopoverOpen}
                positions={["bottom", "left", "right"]}
                content={
                  <div>
                    <NameArea>{userInfo?.email}</NameArea>
                    <Button onClick={logout}>{t("logout")}</Button>
                  </div>
                }
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                >
                  <NameArea>{userInfo?.name}</NameArea>
                </div>
              </Popover>
            )}
          </FlexBox>
        </Wrapper>
      </Nav>
    </>
  );
};

export default Navbar;
