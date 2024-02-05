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
// export const terrivelTheme = {
//     backgroundColor:'#F5A19E',
// }
// export const ruimTheme = {
//     backgroundColor:'#F5BCC7',
// }
// export const normalTheme = {
//     backgroundColor:'#F5EFA9',
// }
// export const bomTheme = {
//     backgroundColor:'#D6F4DB',
// }
// export const muitoBomTheme = {
//     backgroundColor:'#69F58D',
// }

export const TextNivel = styled.Text`
    font-size: 36px;
    color: red;
`


export const ContainerCount = styled.View`
    
    margin: 40px;
`

export const TextCount = styled.Text`
    color: white;
    font-size: 40px;
`