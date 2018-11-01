import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Slider from 'react-native-slider'
import _ from 'lodash'
import Icons from 'react-native-vector-icons/FontAwesome'
import Spinner from 'react-native-loading-spinner-overlay'

import Maps from '../components/GeoJSONSource'
import SearchBar from '../components/SearchBar'

import config from '../config'

const InfoWrapper = styled.View`
  height: ${config.windowHeight * 0.35};
  width: ${config.windowWidth};
`

const InfoView = styled.ScrollView`
  flex: 1;
  bottom: 0;
  zIndex: 2;
  backgroundColor: white;
  width: ${config.windowWidth};
  paddingTop: 30;
  paddingHorizontal: 20;
  flexDirection: column;
`

const LocationInfo = styled.View`
  flexDirection: row;
  justifyContent: space-between
`

const LocationName = styled.View`
  flexDirection: column;
`

const LocationLabel = styled.Text`
  fontWeight: bold;
  fontSize: 18;
  paddingBottom: 10;
`

const LocationDescription = styled.Text`
  color: #898989;
  paddingBottom: 10;
  fontSize: 12
`

const Divide = styled.View`
  height: 2;
  width: 20;
  backgroundColor: #e1e1e1;
  borderRadius: 20;
  marginBottom: 10;
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
  paddingVertical: 5;
`

const TimeToTrip = styled.Text`
  color: #a1a1a1;
  fontSize: 12
`

const Price = styled.Text`
  fontSize: 12;
  paddingLeft: 10;
  fontWeight: bold;
  color: #363636
`

const LocationFunction = styled.View`
  flexDirection: column;
`

const ExploreButton = styled.TouchableOpacity`
  borderRadius: 5;
  height: 35;
  alignItems: center;
  justifyContent: center;
  width: 80;
  backgroundColor: #04c4d7;
  marginBottom: 10
`

const ExploreButtonLabel = styled.Text`
  fontSize: 12;
  color: white
`

const RemoveButton = styled.TouchableOpacity`
  height: 30;
  width: 80;
  alignItems: center;
  justifyContent: center
`

const RemoveButtonLabel = styled.Text`
  color: #959595;
  fontSize: 12
`

const LongDevice = styled.View`
  marginVertical: 20;
  height: 1;
  backgroundColor: #e1e1e1
`

const GroupButtonSelectionLocation = styled.View`
  justifyContent: space-around;
  flexDirection: row
`

const ButtonSelectLocation = styled.View`
  width: ${config.windowWidth / 6};
  paddingVertical: 10;
  height: 70;
  borderWidth: 1;
  borderColor: ${props => props.selected ? '#04c4d7' : '#ebebeb'};
  borderRadius: 10;
  flexDirection: column;
  justifyContent: space-between;
  alignItems: center;
  backgroundColor: ${props => props.selected ? '#04c4d7' : 'white'}
`

const ButtonSelectLocationLabel = styled.Text`
  color: ${props => props.selected ? 'white' : '#959595'};
  fontSize: 10
`

const SliderLayout = styled.View`
  flexDirection: row;
  alignItems: center;
  paddingBottom: 50
`

const Distance = styled.Text`
  width: ${config.windowWidth * 0.15};
  textAlign: right;
  color: #04c4d7;
  fontSize: 14
`

const GroupSelectionTransport = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
`

const SelectionTransport = styled.View`
  flexDirection: column;
  alignItems: center;
  justifyContent: space-between;
  width: 50;
  height: 50;
  marginRight: 20
`

const TransportLabel = styled.Text`
  color: ${props => props.selected ? '#04c4d7' : '#959595'};
  fontSize: 14
`

class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showInfo: false,
      slideValue: 10,
      locationSelected: 0,
      transportSelected: 0
    }
    this.toggleInfo = this.toggleInfo.bind(this)
  }

  toggleInfo () {
    this.setState({showInfo: !this.state.showInfo})
  }

  render () {
    const locationFunction = [
      {
        name: 'move',
        icon: 'car'
      },
      {
        name: 'eat',
        icon: 'star'
      },
      {
        name: 'do',
        icon: 'universal-access'
      },
      {
        name: 'see',
        icon: 'eye'
      },
      {
        name: 'sleep',
        icon: 'star'
      }
    ]
    const transport = [
      {
        name: 'Car',
        icon: 'car'
      },
      {
        name: 'Plane',
        icon: 'plane'
      },
      {
        name: 'Train',
        icon: 'train'
      }
    ]
    return (
      <View style={{flex: 1}}>
        <SearchBar navigation={this.props.navigation}/>
        <Spinner visible={this.props.isSearching} color='#20d471' overlayColor='rgba(255, 255, 255, 0.8)' textContent={"Loading..."} textStyle={{color: '#20d471'}} />
        <Maps toggleInfo={() => this.toggleInfo()}/>
        }
        {
          this.state.showInfo
            ? <InfoWrapper>
              <InfoView>
                <LocationInfo>
                  <LocationName>
                    <LocationLabel>Sydney</LocationLabel>
                    <LocationDescription>Sydney's Backyard</LocationDescription>
                    <Divide/>
                    <EstimateDistance>
                      <Text style={{fontWeight: 'bold', color: '#363636'}}>80 miles </Text>
                      from your location
                    </EstimateDistance>
                    <TimeAndPrice>
                      <TotalTime>
                        <TimeToTrip>
                          <Text style={{fontWeight: 'bold', color: '#363636'}}>2.5 </Text>
                          hours total
                        </TimeToTrip>
                      </TotalTime>
                      <Price>$90</Price>
                    </TimeAndPrice>
                  </LocationName>
                  <LocationFunction>
                    <ExploreButton>
                      <ExploreButtonLabel>Explore</ExploreButtonLabel>
                    </ExploreButton>
                    <RemoveButton>
                      <RemoveButtonLabel>Remove</RemoveButtonLabel>
                    </RemoveButton>
                  </LocationFunction>
                </LocationInfo>
                <LongDevice/>
                <GroupButtonSelectionLocation>
                  {
                    _.map(locationFunction, (button, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => this.setState({locationSelected: index})}
                        >
                          <ButtonSelectLocation selected={index === this.state.locationSelected}>
                            <Icons name={button.icon} size={22}
                                   color={index === this.state.locationSelected ? 'white' : '#959595'}/>
                            <ButtonSelectLocationLabel selected={index === this.state.locationSelected}>
                              {button.name.toUpperCase()}
                            </ButtonSelectLocationLabel>
                          </ButtonSelectLocation>
                        </TouchableOpacity>
                      )
                    })
                  }
                </GroupButtonSelectionLocation>
                <LongDevice/>
                <GroupSelectionTransport>
                  {
                    _.map(transport, (button, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => this.setState({transportSelected: index})}
                        >
                          <SelectionTransport style={index === transport.length - 1 ? {marginRight: 0} : {}}>
                            <Icons
                              name={button.icon}
                              size={20}
                              color={index === this.state.transportSelected ? '#04c4d7' : '#959595'}
                            />
                            <TransportLabel
                              selected={index === this.state.transportSelected}>{button.name}</TransportLabel>
                          </SelectionTransport>
                        </TouchableOpacity>
                      )
                    })
                  }
                </GroupSelectionTransport>
                <SliderLayout>
                  <Slider
                    value={this.state.slideValue}
                    minimumValue={0}
                    maximumValue={30}
                    step={1}
                    style={{flex: 1}}
                    minimumTrackTintColor={'#04c4d7'}
                    thumbTintColor={'#eee'}
                    trackStyle={{height: 2}}
                    onSlidingComplete={value => this.setState({slideValue: value})}
                  />
                  <Distance>{this.state.slideValue} km</Distance>
                </SliderLayout>
              </InfoView>
            </InfoWrapper>
            : null
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isSearching: state.search.isSearching,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Map)
