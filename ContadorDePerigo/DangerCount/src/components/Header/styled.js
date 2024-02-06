import styled from "styled-components";


//ContaineNivel -- Mudança para background color
export const ContainerNivel = styled.View`

    width: 80%;
    background-color: ${props => `${props.theme}` };
    align-items: center;
    border-radius: 12px 12px 0px 0px ;

    box-shadow: 0px 0px 10px  black;
    shadow-color: black;
    shadow-offser: 0px 4px;
    shadow-opacity: 0.15;
    shadow-radius:15px;
    elevation: 5;
`


export const TextNivel = styled.Text`
    font-size: 36px;
    color: ${props => `${props.color}` } ;
`


export const ContainerCount = styled.View`
    
    margin: 40px;
`

export const TextCount = styled.Text`
    color:${props => `${props.color}` };
    font-size: 40px;
`