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

  function Adicionar () {
    if (count < 25) {
      setCount(count + 1)
      NivelChange()
      ExplainChange()
    }

  }

  function Subtrair() {
    if (count > 0) {
      setCount(count - 1)
      NivelChange()
      ExplainChange()
    }

  }
  function Zerar() {
    if (count > 0) {
    setCount(count * 0)
    NivelChange()
    ExplainChange()
    }
  }

  const NivelChange = () => {
    if (count < 4) {
      setNivelText('TERRIVEL')
    } else if ( count < 10) {
      setNivelText('RUIM')
    } else if ( count < 15) {
      setNivelText('MEDIANO')
    } else if ( count < 20) {
      setNivelText('BOM')
    } else if (count < 25) {
      setNivelText('MUITO BOM')
    } 
  }

  const ExplainChange = () =>{
    if(count < 5){
      setExplainText("A confiaça que antes você tinha com a polica foi pro caralho")
    } else if ( count < 10) {
      setExplainText('A Confiaça está quase indo para o caralho')
    } else if ( count < 15) {
      setExplainText('Tamo okay')
    } else if ( count < 20) {
      setExplainText('Cara você é até que confiavel')
    } else if (count < 25) {
      setExplainText('As conversas que vocês tiveram elevou a confiança ao máximo. Agora poderão explorar a delegacia a vontade, mas cuidado tudo isso pode ser que nem pisar em um vidro quebrado, um passo em falso e tudo que construiu pode ir para vala')
    } 
  }

  return (
    <Container>
      {/* Header?  */}
      
      <Header
        nivelText={nivelText}
        count={count}
      />



    {/* ScreenHome? Botões que adciona ou subtrai  */}
      <Home
        plusOne={() => Adicionar()}
        minusOne={() => Subtrair()}
        zero={() =>Zerar()}
      />

      {/* Footer? Explicando  */}
      <Footer
      explainText={explainText}
      />

      <StatusBar style="auto" />
    </Container>
  );
}


