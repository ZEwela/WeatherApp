import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import React from 'react'

const ErrorItem = () => {
  const { container, errorMessage } = styles
  return (
    <View style={container}>
      <Text style={errorMessage}>Sorry, something went wrong</Text>
      <Feather name={'frown'} size={100} color={'white'} />
    </View>
  )
}

export default ErrorItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessage: {
    color: 'white',
    fontSize: 30,
    marginHorizontal: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold'
  }
})
