import styled from "styled-components";

export const GenericButton = styled.TouchableOpacity`
    border: 1px black;
    border-radius: 10px;
    width: auto;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: #E5E7E3;
`

export const GenericButtonAdd = styled(GenericButton)`
    background-color: #C1EAC4;
`

export const GenericButtonLess = styled(GenericButton)`
    background-color: #E65459;
`