import { ContainerCount, ContainerNivel, TextCount, TextNivel } from "./styled";


export function Header({ nivelText, count



}) {

    //ContainerNivel - View
        //TextNivel - Text
    //ContainerCount - View
        //TextCount - Text
    return (
        <>
            <ContainerNivel>
                <TextNivel> {nivelText} </TextNivel>
            </ContainerNivel>
            <ContainerCount>
                <TextCount>{count}</TextCount>
            </ContainerCount>

        </>

    )
}