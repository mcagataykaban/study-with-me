import styled from 'styled-components';
import { colors } from '../../../../styles/theme';

export const StyledInnerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const StyledDiv = styled.div`
    margin-right: 7px;
`
export const StyledInput = styled.input`
    border-color:${(props) => props.valid === 1 ? colors.success : props.valid === 0 ? colors.error : ''};
`
