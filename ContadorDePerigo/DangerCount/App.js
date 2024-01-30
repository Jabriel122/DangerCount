import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, ContainerNivel } from './src/components/Container/Container';
import { useState } from 'react';
import { TextNivel } from './src/components/Text/Text';

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
      <ContainerNivel>
        <TextNivel> {nivelText} </TextNivel>
      </ContainerNivel>
      <Text>{count}</Text>
      <TouchableOpacity onPressIn={Adicionar}>
        <Text> Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPressIn={Subtrair} >
        <Text> Subtrair</Text>
      </TouchableOpacity>
      <TouchableOpacity onPressIn={Zerar} >
        <Text> Zerar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}


