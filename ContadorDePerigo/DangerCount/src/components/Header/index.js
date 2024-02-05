import { useState } from "react";
import { ContainerCount, ContainerNivel, TextCount, TextNivel, bomTheme, muitoBomTheme, normalTheme, ruimTheme, terrivelTheme } from "./styled";


export function Header({
     nivelText, 
     count,
    
    }) {

    return (
        <>
            <ContainerNivel theme>
                <TextNivel > {nivelText} </TextNivel>
            </ContainerNivel>
            <ContainerCount>
                <TextCount>{count}</TextCount>
            </ContainerCount>

        </>

    )
}