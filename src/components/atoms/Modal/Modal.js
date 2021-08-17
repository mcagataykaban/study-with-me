import React from "react";
import { StyledModal, StyledBackdrop } from "./styles";
import { FlexBox, LocaleSelector } from '../../'

const Modal = ({children, handleCancel, showModal, title, haveLocaleSelector, ...rest}) => {
  return (
    <FlexBox>
      <StyledBackdrop {...rest} onClick={handleCancel} />
      <StyledModal {...rest}>
        <FlexBox style={{justifyContent: 'space-between'}}>
          <h4>{title}</h4>
          <LocaleSelector />
        </FlexBox>
        {children}</StyledModal>
    </FlexBox>
  );
};

export default Modal;
