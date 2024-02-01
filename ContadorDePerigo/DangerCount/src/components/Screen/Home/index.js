import { ContainerBtn,GenericButton,GenericButtonAdd,GenericButtonLess, TextBtn } from "./style";

export const Home = ({plusOne,minusOne, zero}) => {

        //ContainerBtn - View
        //GenericButtonAdd - TouchableOpacity
        //TextBtn - Text

    return (
        <>
            <ContainerBtn>
                <GenericButtonAdd onPressIn={plusOne}>
                    <TextBtn> + </TextBtn>
                </GenericButtonAdd>
                <GenericButtonLess onPressIn={minusOne} >
                    <TextBtn> - </TextBtn>
                </GenericButtonLess>
            </ContainerBtn>
            <GenericButton onPressIn={zero} >
                <TextBtn> 0 </TextBtn>
            </GenericButton>
        </>
    )
}