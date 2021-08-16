import React from 'react';
import { StyledDiv } from './styles'

const ContentArea = ({children, ...rest}) => {
    return (
        <StyledDiv {...rest}>
            {children}
        </StyledDiv>
    )
}

export default ContentArea
