import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Platform, Image, TouchableOpacity } from 'react-native'
import { Content, Button, Text } from 'native-base'

import ShadowView from 'react-native-shadow-view'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'

import SearchBar from '../components/SearchBar'
import config from '../config'

const ScrollLayout = styled.ScrollView`
  paddingTop: 80;
  flex: 1;
  marginHorizontal: 10;
`

const ScrollContent = styled.View`
  paddingBottom: 80
`

const LocationTripFunction = styled.View`
  flex: 1;
  flexDirection: row;
  height: ${config.windowHeight * 0.1};
  justifyContent: space-between;
  alignItems: center
`

const LocationName = styled.Text`
  fontWeight: bold;
  fontSize: 18
`

const ButtonShowInfo = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
  height: 40;
  width: 40;
  borderRadius: 50;
  backgroundColor: #04c4d7
`

const ThumbnailImage = styled.Image`
  height: 120;
  flex: 1;
`

const HeartButton = styled.TouchableOpacity`
  position: absolute;
`

const InfoTrip = styled.View`
  paddingVertical: 10;
  paddingHorizontal: 20;
  flexDirection: column
`

const NameOfTrip = styled.Text`
  paddingBottom: 10;
  fontWeight: bold;
  fontSize: 14
`

const EstimateDistance = styled.Text`
  color: #a1a1a1;
  paddingBottom: 10;
  fontSize: 12
`

const TimeAndPrice = styled.View`
  flexDirection: row;
  alignItems: center;
`

const TotalTime = styled.View`
  paddingRight: 10;
  borderRightWidth: 1;
  borderColor: #a1a1a1;
`

const TimeToTrip = styled.Text`
  color: #a1a1a1;
  fontSize: 12
`

const Price = styled.Text`
  fontSize: 12;
  paddingLeft: 10;
  color: #a1a1a1
`

const ClassLayout = styled.View`
  marginTop: 10;
  alignSelf: flex-start;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  borderColor: #04c4d7;
  borderRadius: 3;
  backgroundColor: transparent;
  borderWidth: 1
`

const ClassName = styled.Text`
  paddingVertical: 5;
  paddingHorizontal: 5; 
  color: #04c4d7;
  fontSize: 10;
  fontWeight: bold
`

const BoldText = styled.Text`
  fontWeight: bold;
  color: #363636
`

class ListTrip extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const data = [
      {
        id: 0,
        location: 'China town',
        address: 'NSW',
        far: 12,
        time: 2.5,
        timeUnit: 'hours',
        price: '$40',
        class: 'attraction'
      },
      {
        id: 1,
        location: 'Train station',
        address: 'NSW',
        far: 14,
        time: 0.5,
        timeUnit: 'hours',
        price: '$40',
        class: 'attraction'
      },
      {
        id: 2,
        location: 'The cave',
        address: 'NSW',
        far: 32,
        time: 1.5,
        timeUnit: 'hours',
        price: '$40',
        class: 'attraction'
      },
      {
        id: 3,
        location: '8 nine',
        address: 'NSW',
        far: 33,
        time: 60,
        timeUnit: 'min',
        price: '$40',
        class: 'food'
      },
      {
        id: 4,
        location: '8 nine',
        address: 'NSW',
        far: 33,
        time: 60,
        timeUnit: 'min',
        price: '$40',
        class: 'attraction'
      }
    ]
    return (
      <View style={styles.wrapper}>
        <SearchBar navigation={this.props.navigation}/>
        <ScrollLayout showsVerticalScrollIndicator={false}>
          <ScrollContent>
            <LocationTripFunction>
              <LocationName>Sydney</LocationName>
              <ButtonShowInfo onPress={() => this.props.toggleInfo()}>
                <Icon name={Platform.OS === 'ios' ? 'ios-apps' : 'md-apps'} size={20} color={'white'}/>
              </ButtonShowInfo>
            </LocationTripFunction>
            <View style={{flex: 1}}>
              {
                _.map(data, (trip, index) => {
                  return (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate({routeName: 'DetailPlanTrip'})}>
                    <ShadowView
                      style={{
                        flex: 3,
                        marginHorizontal: 5,
                        // width: config.windowWidth * 0.5,
                        height: 120,
                        backgroundColor: 'white',
                        borderRadius: 2,
                        // alignItems: 'center',
                        flexDirection: 'row',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 0
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: 4,
                        marginBottom: 10
                      }}
                    >
                      <ThumbnailImage source={require('../assets/trip.jpg')} resizeMethod={'contain'}/>
                      <InfoTrip>
                        <NameOfTrip>{trip.location} <Text style={{color: '#a1a1a1', fontSize: 12}}>{trip.address}</Text></NameOfTrip>
                        <EstimateDistance>
                          <BoldText>80 miles </BoldText>
                          from your location
                        </EstimateDistance>
                        <TimeAndPrice>
                          <TotalTime>
                            <TimeToTrip>
                              <BoldText>2.5 </BoldText>
                              hours total
                            </TimeToTrip>
                          </TotalTime>
                          <Price><BoldText>$90</BoldText> per person</Price>
                        </TimeAndPrice>
                        <ClassLayout>
                          <ClassName>{trip.class.toUpperCase()}</ClassName>
                        </ClassLayout>
                        {/*<ClassName>{trip.class.toUpperCase()}</ClassName>*/}
                      </InfoTrip>
                    </ShadowView>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </ScrollContent>
        </ScrollLayout>
      </View>
    )
  }
}

export default ListTrip

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollview: {
    paddingTop: 100,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  categories: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    // color: colors.gray04,
  }
})
