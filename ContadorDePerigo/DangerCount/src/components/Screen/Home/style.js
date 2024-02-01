import styled from "styled-components";

export const ContainerBtn = styled.View`
    margin: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    /* border: 1px blue; */
    width: 80%;    
`

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

export const TextBtn = styled.Text`
    font-size: 30px;
`