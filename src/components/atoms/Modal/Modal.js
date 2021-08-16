import React from "react";
import { StyledModal, StyledBackdrop } from "./styles";
import { FlexBox } from '../../'

const Modal = ({children, handleCancel, showModal, ...rest}) => {
  return (
    <FlexBox>
      <StyledBackdrop {...rest} onClick={handleCancel} />
      <StyledModal {...rest}>{children}</StyledModal>
    </FlexBox>
  );
};

export default Modal;
