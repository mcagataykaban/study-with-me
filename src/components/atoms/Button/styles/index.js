import styled from 'styled-components'
import { colors } from '../../../../styles/theme'

export const StyledButton = styled.button`
    padding: 10px;
    background-color: ${colors.primary};
    color: white;
    border-radius: 5px;
    cursor: pointer;
    border: ${(props) => props.selected ? `3px solid ${colors.success}` : ''};
    
    &:hover {
        background-color: ${colors.secondary};
    }
`