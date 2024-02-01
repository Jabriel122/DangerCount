
import {ScrollExplain, TextExplain} from './styled'

export const Footer =({explainText}) => {

    //ScrollExplain - ScrollView
    //TextExplain - Text   


    return (

        <ScrollExplain>
            <TextExplain>
                {explainText}
            </TextExplain>
        </ScrollExplain>

    )
}