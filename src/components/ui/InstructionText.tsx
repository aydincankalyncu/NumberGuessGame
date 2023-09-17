import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

type Props = {
  children: React.ReactNode,
  style?: StyleProp<TextStyle> 
}
const InstructionText = (props: Props) => {
  return (
      <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accemt500,
    fontSize: 24
  },
})