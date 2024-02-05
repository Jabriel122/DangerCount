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
    border-radius: 10px;
    width: auto;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: #E5E7E3;

    box-shadow: 0px 0px 10px  black;
    shadow-color: black;
    shadow-offser: 0px 4px;
    shadow-opacity: 0.15;
    shadow-radius:15px;
    elevation: 5;
`

export const GenericButtonAdd = styled(GenericButton)`
    background-color: #2ECC71;
`

export const GenericButtonLess = styled(GenericButton)`
    background-color: #FF5733;
`

export const TextBtn = styled.Text`
    font-size: 30px;
`

export const TextBtnAdd = styled(TextBtn)`
    color: green;
`

export const TextBtnLess = styled(TextBtn)`
    color: #F3AFB3;
`