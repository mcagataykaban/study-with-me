import React from 'react';
import { StyledLine, StyledDiv } from './styles'

const HamburgerButton = ({...rest}) => {
    return (
        <StyledDiv {...rest}>
            <StyledLine />
            <StyledLine />
            <StyledLine />
        </StyledDiv>
    )
}

export default HamburgerButton
