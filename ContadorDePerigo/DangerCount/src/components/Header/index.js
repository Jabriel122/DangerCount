import { useState } from "react";
import { ContainerCount, ContainerNivel, TextCount, TextNivel } from "./styled";


export function Header({
     nivelText, 
     count,
     theme,
     color
    }) {
        
    return (
        <>
            <ContainerNivel theme = {theme} >
                <TextNivel color={color} > {nivelText} </TextNivel>
            </ContainerNivel>
            <ContainerCount>
                <TextCount>{count}</TextCount>
            </ContainerCount>

        </>

    )
}