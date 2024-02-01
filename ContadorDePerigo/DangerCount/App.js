import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, ContainerNivel,ContainerBtn } from './src/components/Container/Container';
import { useState } from 'react';
import { TextNivel } from './src/components/Text/Text';
import { GenericButton, GenericButtonAdd, GenericButtonLess } from './src/components/Button/styleBtn';

export default function App() {
  const [count, setCount] = useState(0)
  const [nivelText, setNivelText] = useState('')

  const Adicionar = () => {
    if (count < 25) {
      setCount(count + 1)
      NivelChange()
    }

  }


  const Subtrair = () => {
    if (count > 0) {
      setCount(count - 1)
      NivelChange()
    }

  }
  const Zerar = () => {
    setCount(count * 0)
  }

  const NivelChange = () => {
    if (count < 5) {
      setNivelText('TERRIVEL')
    } else if (count > 5 && count < 10) {
      setNivelText('RUIM')
    } else if (count > 10 && count < 15) {
      setNivelText('MEDIANO')
    } else if (count > 15 && count < 20) {
      setNivelText('BOM')
    } else if (count > 20) {
      setNivelText('MUITO BOM')
    }
  }

  return (
    <Container>
      {/* Header?  */}
      <ContainerNivel>
        <TextNivel> {nivelText} </TextNivel>
      </ContainerNivel>
      <Text>{count}</Text>

    {/* ScreenHome? Botões que adciona ou subtrai  */}
      <ContainerBtn>
        <GenericButtonAdd onPressIn={Adicionar}>
          <Text> Adicionar</Text>
        </GenericButtonAdd>
        <GenericButtonLess onPressIn={Subtrair} >
          <Text> Subtrair</Text>
        </GenericButtonLess>
      </ContainerBtn>
      <GenericButton onPressIn={Zerar} >
        <Text> Zerar</Text>
      </GenericButton>

      {/* Footer? Explicando  */}
      

      <StatusBar style="auto" />
    </Container>
  );
}


