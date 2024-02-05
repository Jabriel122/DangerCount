import { StatusBar } from 'expo-status-bar';
import { Container } from './Container';
import { useState } from 'react';
import { Footer } from './src/components/Footer';
import { Header } from './src/components/Header';
import { Home } from './src/components/Screen/Home';

export default function App() {
  const [count, setCount] = useState(0)
  const [nivelText, setNivelText] = useState('')
  const [explainText, setExplainText] = useState('')
  const [theme, setTheme] = useState("")
  const [color, setColor] = useState("")

  // const ThemeChange = () =>{
  //     theme == count < 5 ? setTheme('terrivel') : count < 10 ? setTheme('ruim') : count < 15 ? setTheme('normal') : count < 20 ? setTheme('bom') : setTheme('muito bom')
  // }


  function Adicionar() {
    if (count < 15) {
      setCount(count + 1)
      NivelChange()
     
    }

  }

  function Subtrair() {
    if (count > -15) {
      setCount(count - 1)
      NivelChange() 
    }

  }
  function Zerar() {
    if (count > -15) {
      setCount(count * 0)
      NivelChange()
    }
  }

  const NivelChange = () => {
    if (count < -15) {
      setNivelText('TERRIVEL');
      setTheme("#FF5733"); // Vermelho forte
      setColor("#FFFFFF"); // Letras em branco para contrastar com o vermelho
      setExplainText("A policia não acredita nenhum pouco em vocês. Talvez tenham cometido algum crime ou simplesmente desrespeitaram alguém que não deveria.");
    } else if (count < -10) {
      setNivelText('RUIM');
      setTheme("#F3AFB3"); // Tom suave de rosa
      setColor("#000000"); // Letras em preto para contrastar com o rosa
      setExplainText('Isto é um alerta. Cuidado com o que você fala, se não um quarto com uma grade te espera.');
    } else if (count > -5 || count < 5 ) {
      setNivelText('MEDIANO');
      setTheme("#FFD700"); // Amarelo dourado
      setColor("#000000"); // Letras em preto para contrastar com o amarelo
      setExplainText('Estão indiferentes. Nada a relatar');
    } else if (count > 10) {
      setNivelText('BOM');
      setTheme("#D6F4DB"); // Verde água suave
      setColor("#000000"); // Letras em preto para contrastar com o verde
      setExplainText('Cara, você é até que confiável');
    } else if (count < 15) {
      setNivelText('MUITO BOM');
      setTheme("#2ECC71"); // Verde forte
      setColor("#FFFFFF"); // Letras em branco para contrastar com o verde
      setExplainText('As conversas que vocês tiveram elevaram a confiança ao máximo. Agora poderão explorar a delegacia à vontade, mas cuidado, tudo isso pode ser como pisar em um vidro quebrado. Um passo em falso e tudo que construiu pode ir para a vala');
    }
  };

  return (
    <>
       <Container theme={theme}>
      {/* Header?  */}

      <Header
        nivelText={nivelText}
        count={count}
        theme={theme}
        color={color}
      />



      {/* ScreenHome? Botões que adciona ou subtrai  */}
      <Home
        plusOne={() => Adicionar()}
        minusOne={() => Subtrair()}
        zero={() => Zerar()}
      />

      {/* Footer? Explicando  */}
      <Footer
        explainText={explainText}
        theme ={theme}
        color = {color}
      />

      <StatusBar style="auto" />
    </Container>
    
    </>
   
  );
}


