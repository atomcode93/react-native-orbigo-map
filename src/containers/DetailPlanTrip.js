import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import Icons from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components'
import config from '../config'

const HeaderBar = styled.View`
  top: 0;
  position: absolute;
  marginTop: 20;
  height: 40;
  flexDirection: row;
  justifyContent: space-between;
  flex: 1;
  paddingHorizontal: 20;
  alignItems: center
`

const HeaderLeft = styled.View`
  
`

const InfoLayout = styled.View`
  marginBottom: 50;
  marginHorizontal: 20;
  flexDirection: column
`

const ExploreLabel = styled.Text`
  fontSize: 10;
  color: white;
  paddingBottom: 10
`

const LocationInfo = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: flex-start;
  paddingBottom: 10;
`

const LocationLabel = styled.Text`
  fontSize: 22;
  fontWeight: bold;
  color: white
`

const PriceLayout = styled.View`
  flexDirection: row
`

const Price = styled.Text`
  color: white;
  fontWeight: bold
`

const PerPerson = styled.Text`
  color: white
`

const LocationAddressLayout = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between
`

const LocationAddress = styled.Text`
  color: white;
  fontSize: 16;
`

const TimeExplore = styled.Text`
  color: white;
  fontSize: 14
`

const Divide = styled.View`
  height: 1;
  backgroundColor: white;
  marginVertical: 10
`

const ContentOfTrip = styled.Text`
  color: white
`

const GoToReserveTrip = styled.View`
  flex: 1;
  width: ${config.windowWidth};
  bottom: 20;
  position: absolute;
  justifyContent: center;
  alignItems: center;
`

export default class DetailPlanTrip extends Component {
  constructor (props) {
    super(props)
  }

  setShowInfo () {
    this.setState({showInfo: !this.state.showInfo})
  }

  render () {
    console.log(this.state)
    return (
      <View style={styles.root}>
        <View style={{flex: 1}}>
          <Swiper
            style={styles.wrapper}
            showsButtons
            nextButton={(
              <View style={{height: config.windowHeight, width: config.windowWidth * 0.15, marginRight: -10}}/>)}
            prevButton={(
              <View style={{height: config.windowHeight, width: config.windowWidth * 0.15, marginLeft: -10}}/>)}
            showsPagination={false}
          >
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
          <LinearGradient
            style={styles.linearGradient}
            colors={['rgba(105,105,105,0)', 'rgba(0,0,0,0.7)']}
            locations={[0, 1]}
          >
            <HeaderBar>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <HeaderLeft>
                  <Icons name={'chevron-left'} size={20} color={'white'}/>
                </HeaderLeft>
              </TouchableOpacity>
            </HeaderBar>
            <InfoLayout>
              <ExploreLabel>{`explore`.toUpperCase()}</ExploreLabel>
              <LocationInfo>
                <LocationLabel>China town</LocationLabel>
                <PriceLayout>
                  <Price>$40 </Price>
                  <PerPerson>per person</PerPerson>
                </PriceLayout>
              </LocationInfo>
              <LocationAddressLayout>
                <LocationAddress><Icons name={'map-marker'} size={20} color={'white'}/> Wollondilly</LocationAddress>
                <TimeExplore><Icons name={'clock-o'} size={20} color={'white'}/> 2 hours total</TimeExplore>
              </LocationAddressLayout>
              <Divide/>
              <ContentOfTrip>Test</ContentOfTrip>
            </InfoLayout>
            <TouchableOpacity onPress={() => this.props.navigation.navigate({routeName: 'Reserve'})}>
              <GoToReserveTrip>
                <Icons name={'chevron-down'} size={20} color={'white'}/>
              </GoToReserveTrip>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    )
  }
}

const styles = {
  root: {
    flex: 1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  touchArea: {
    height: config.windowHeight,
    width: config.windowWidth,
    position: 'absolute'
  },
  linearGradient: {
    flex: 1,
    height: config.windowHeight,
    width: config.windowWidth,
    position: 'absolute',
    justifyContent: 'flex-end'
  }
}
