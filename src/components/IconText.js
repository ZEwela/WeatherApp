import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const IconText = ({ iconColor, iconName, bodyText, bodyTextStyles }) => {
  const { container, textTheme } = styles
  return (
    <View style={container}>
      <Feather name={iconName} size={60} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
})
