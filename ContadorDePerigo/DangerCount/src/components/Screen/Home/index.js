import { ContainerBtn,GenericButton,GenericButtonAdd,GenericButtonLess, TextBtn, TextBtnAdd, TextBtnLess } from "./style";

export const Home = ({plusOne,minusOne, zero}) => {

        //ContainerBtn - View
        //GenericButtonAdd - TouchableOpacity
        //TextBtn - Text

    return (
        <>
            <ContainerBtn>
                <GenericButtonAdd onPressIn={plusOne}>
                    <TextBtnAdd> + </TextBtnAdd>
                </GenericButtonAdd>
                <GenericButtonLess onPressIn={minusOne} >
                    <TextBtnLess> - </TextBtnLess>
                </GenericButtonLess>
            </ContainerBtn>
            <GenericButton onPressIn={zero} >
                <TextBtn> 0 </TextBtn>
            </GenericButton>
        </>
    )
}