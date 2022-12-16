import { View, Text } from 'react-native'
import React from 'react'
type Props = {
    texts:string[]
}
const TextsArray = ({texts}:Props) => {
  return (
    <View>
      {texts.map((text:string)=>{
        return <Text>texto{text}</Text>
      })}
    </View>
  )
}

export default TextsArray