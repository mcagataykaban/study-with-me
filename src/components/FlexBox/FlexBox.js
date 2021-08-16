import React from 'react';
import { StyledDiv } from './styles'

const FlexBox = ({children, ...rest}) => {
    return (
        <StyledDiv {...rest}>
            {children}
        </StyledDiv>
    )
}

export default FlexBox

