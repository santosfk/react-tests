import { View, Text } from 'react-native'
import React from 'react'
import Button from './components/Button'
import TextsArray from './components/TextsArray'

const Home = () => {
  return (
    <View>
      <Button>Botao</Button>
      <TextsArray texts={['1','2','3']} />
          </View>
  )
}

export default Home