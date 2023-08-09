import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { Feather } from '@expo/vector-icons'

const ListItem = ({ dt_txt, min, max, condition }) => {
  const { item, date, temp } = styles
  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#e8d9f0',
    backgroundColor: '#cfafdf'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center'
  }
})
