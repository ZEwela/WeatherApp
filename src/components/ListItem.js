import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'

const ListItem = ({ dt_txt, min, max, condition }) => {
  const { item, date, temp, dateTextWrapper } = styles
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).add(10, 'days').calendar()}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
      </View>

      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
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
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
})
