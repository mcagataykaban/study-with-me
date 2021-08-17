import styled from "styled-components";
import { colors } from "../../../../styles/theme";

export const StyledModal = styled.div`
  width: 365px;
  // height: 100%;
  background-color: white;
  z-index: 199;
  top: 30%;
  margin-left: auto;
  position: fixed;
  color: ${colors.primary};
  display: ${(props) => (props.visible ? `` : "none")};
  border-radius: 14px;
  padding: 15px;
`;

export const StyledBackdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.secondary};
  opacity: 0.2;
  z-index: 100;
  top: 0;
  left: 0;
  position: fixed;
  display: ${(props) => (props.visible ? `` : "none")};
`;
