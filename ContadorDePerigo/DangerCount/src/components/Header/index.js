import { useState } from "react";
import { ContainerCount, ContainerNivel, TextCount, TextNivel, bomTheme, muitoBomTheme, normalTheme, ruimTheme, terrivelTheme } from "./styled";


export function Header({ nivelText, count,theme}) {
    // const [theme,setTheme] = useState("")
    //ContainerNivel - View
        //TextNivel - Text
    //ContainerCount - View
        //TextCount - Text


    //********** Função que provavelmente deu errado, mas estou salvando ela aqui *********************/
    // const ThemeChange = () =>{
    //     theme == count < 5 ? setTheme('terrivel') : count < 10 ? setTheme('ruim') : count < 15 ? setTheme('normal') : count < 20 ? setTheme('bom') : setTheme('muito bom')
    // }
    return (
        <>
            <ContainerNivel theme={theme == 'terrivel' ? terrivelTheme : theme == 'ruim' ? ruimTheme : theme == 'normal' ? normalTheme : theme == 'bom' ? bomTheme : muitoBomTheme}>
                <TextNivel > {nivelText} </TextNivel>
            </ContainerNivel>
            <ContainerCount>
                <TextCount>{count}</TextCount>
            </ContainerCount>

        </>

    )
}