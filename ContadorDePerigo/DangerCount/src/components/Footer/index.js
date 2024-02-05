
import {ScrollExplain, TextExplain} from './styled'

export const Footer =({explainText, theme, color}) => {

    //ScrollExplain - ScrollView
    //TextExplain - Text   


    return (

        <ScrollExplain theme={theme}>
            <TextExplain color={color}>
                {explainText}
            </TextExplain>
        </ScrollExplain>

    )
}