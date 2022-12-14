import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
type Props = {
    children:string
}
const Button = ({children}:Props) => {
  return (
    <>
      <TouchableOpacity  style={{backgroundColor:'black'}}>
        <Text>
        {children}
        </Text>
        <Text testID='description'>alo galera</Text>
        </TouchableOpacity>
        </>
   
  )
}

export default Button