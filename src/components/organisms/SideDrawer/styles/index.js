import styled from 'styled-components';
import { colors } from '../../../../styles/theme'

export const StyledDiv = styled.div`
    width: 60%;
    height: 100vh;
    background-color: ${colors.secondary};
    z-index: 199;
    top:0;
    right:0;
    position: fixed;
    color: white;
    display: ${(props) => props.isOpen ? `` : 'none'};
`

export const StyledBackdrop = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${colors.secondary};
    opacity: 0.2;
    z-index: 100;
    top:0;
    left:0;
    position: fixed;
    display: ${(props) => props.isOpen ? `` : 'none'};
`

export const MenuItem = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    cursor: pointer;
    color: white;
    &:hover {
        background-color: ${colors.primary};
    }
`

