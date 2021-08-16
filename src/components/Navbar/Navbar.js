import React, { useState } from "react";
import { Nav, MenuItem, Wrapper } from "./styles";
import { FlexBox, Button, HamburgerButton, SideDrawer } from "../";
import { Link } from "react-router-dom";

const Navbar = ({ logo }) => {
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
              <Button>TR</Button>
              <Button selected>EN</Button>
            </FlexBox>
            <FlexBox style={{ marginRight: 20 }}>
              <Link to="/">
                <MenuItem>Home</MenuItem>
              </Link>
              <Link to="/Contact">
                  <MenuItem>Contact Us</MenuItem>
              </Link>
              <Button>Login</Button>
            </FlexBox>
          </Wrapper>
        </Nav>
    </>
  );
};

export default Navbar;
