import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 72px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(145, 158, 171, 0.24);
`;

export const MenuItem = styled.div`
  padding: 15px;
  cursor: pointer;
  color: black;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
      display: none;
    }

`


