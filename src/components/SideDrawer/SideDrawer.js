import React from "react";
import { StyledDiv, StyledBackdrop, MenuItem } from "./styles";
import { FlexBox, Button } from "../";
import { Link } from "react-router-dom";

const SideDrawer = ({ setIsOpenDrawer, ...rest }) => {
  return (
    <>
      <StyledBackdrop
        onClick={() => {
          setIsOpenDrawer(false);
        }}
        {...rest}
      />
      <StyledDiv {...rest}>
        <FlexBox style={{marginTop: 20, marginBottom: 20}}>
        <Button>Login</Button>
        </FlexBox>
        <Link to="/">
          <MenuItem onClick={() => {setIsOpenDrawer(false)}}>Home</MenuItem>
        </Link>
        <Link to="/Contact">
          <MenuItem onClick={() => {setIsOpenDrawer(false)}}>Contact Us</MenuItem>
        </Link>

        <FlexBox style={{ marginTop: 20 }}>
          <Button>TR</Button>
          <Button selected>EN</Button>
        </FlexBox>
      </StyledDiv>
    </>
  );
};

export default SideDrawer;
