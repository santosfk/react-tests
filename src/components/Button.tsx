import { View, Text,TouchableOpacity } from 'react-native'

import React from 'react'
type Props = {
    children:string
}
const Button = ({children}:Props) => {
  return (
    
      <TouchableOpacity style={{backgroundColor:'black'}}>{children}</TouchableOpacity>
   
  )
}

export default Button