import {
  ImageBackground,
  StyleSheet,
  Text,
  StatusBar,
  View,
  SafeAreaView
} from 'react-native'
import React from 'react'
import IconText from '../components/IconText'
import moment from 'moment'

const City = ({ weatherData }) => {
  const {
    container,
    image,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles
  const { name, country, population, sunrise, sunset } = weatherData

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/village.jpeg')}
        style={image}
      >
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'black'}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'yellow'}
            bodyText={moment(sunrise).format('h:mm a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'yellow'}
            bodyText={moment(sunset).format('h:mm a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default City

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black'
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 15
  },
  populationText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 40
  },
  riseSetText: {
    fontSize: 25,
    color: 'yellow'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
