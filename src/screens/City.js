import {
  ImageBackground,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconText from '../components/IconText'

const City = () => {
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
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/sunset-569093_1920.jpg')}
        style={image}
      >
        <Text style={[cityText, cityName]}>London</Text>
        <Text style={[cityText, countryName]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'#f96b0a'}
            bodyText={'8000'}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'#fa751c'}
            bodyText={'10:46:58 am'}
            bodyTextStyles={riseSetText}
          />

          <IconText
            iconName={'sunset'}
            iconColor={'#fa751c'}
            bodyText={'17:26:15 pm'}
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
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    flex: 1
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f96b0a'
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    color: 'black'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 25,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
