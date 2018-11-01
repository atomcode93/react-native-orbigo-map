import React, { Component } from 'react'
import { TouchableOpacity, Platform, StyleSheet, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Icons from 'react-native-vector-icons/FontAwesome'
import Timeline from 'react-native-timeline-listview'
import config from '../config'

const Container = styled.View`
  flex: 1;
  width: ${config.windowWidth};
  minHeight: ${config.windowHeight};
  justifyContent: flex-start;
  backgroundColor: white;
`

const HeaderBar = styled.View`
  top: 0;
  marginTop: 20;
  height: 40;
  flexDirection: row;
  justifyContent: space-between;
  paddingHorizontal: 20;
  alignItems: center
`

const HeaderLeft = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between
`

const TripName = styled.Text`
  fontSize: 16;
  fontWeight: 600;
  marginLeft: 10
`

const Content = styled.View`
  flexDirection: column;
  paddingHorizontal: 20;
  paddingTop: ${config.largeWhiteSpace};
`

const TopContent = styled.View``

const Start = styled.Text`
  fontSize: 14;
  fontWeight: bold;
  marginBottom: 10;
`

const AddressLayout = styled.View`
  flexDirection: row;
  alignItems: center
`

const Address = styled.Text`
  fontSize: 12
`

const ChangeAddress = styled.Text`
  marginLeft: 10;
  textDecoration: underline #04c4d7;
  color: #04c4d7;
  fontSize: 12;
`

const YourCurrentLocation = styled.Text`
  fontSize: 10;
  color: #b7b7b7
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

class TimeLineTrip extends Component {
  constructor (props) {
    super(props)
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.renderDetail = this.renderDetail.bind(this)
    this.data = [
      {
        time: '8:00 am',
        title: 'Archery Training',
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        location: 'China town',
        address: 'NSW',
        far: 12,
        timeToGo: 2.5,
        timeUnit: 'hours',
        price: '$40',
        class: 'attraction',
        lineColor: '#750ef4',
        // icon: require('../img/archery.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '9:00 am',
        title: 'Lunch'
        // icon: require('../img/lunch.png'),
      },
      {
        time: '11:00 am',
        title: 'Watch Soccer',
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        location: 'China town',
        address: 'NSW',
        far: 12,
        timeToGo: 2.5,
        timeUnit: 'hours',
        price: '$40',
        class: 'attraction',
        // icon: require('../img/soccer.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      }
    ]
  }

  onEventPress (data) {
    this.setState({selected: data})
  }

  renderSelected () {
    if (this.state.selected)
      return <Text>Selected
        event: {this.state.selected.title} at {this.state.selected.time}</Text>
  }

  renderDetail (rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>
    let desc = (
      <View style={styles.descriptionContainer}>
        {
          rowData.imageUrl
            ? <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
            : null
        }

        <View style={{flexDirection: 'column'}}>
          <Text style={[styles.title]}>{rowData.time}</Text>
          {
            rowData.location
              ? <Text style={[styles.title]}>{rowData.location} {rowData.address}</Text>
              : null
          }
          {
            rowData.far
              ? <Text
                style={[styles.textDescription]}
                numberOfLines={3}
              >
                {rowData.far} miles
              </Text>
              : null
          }
          {
            rowData.timeToGo
              ? <Text style={[styles.title]}>{rowData.timeToGo} hours total</Text>
              : null
          }
          {
            rowData.class
              ? <ClassLayout>
                <ClassName>{rowData.class.toUpperCase()}</ClassName>
              </ClassLayout>
              : null
          }
        </View>
      </View>
    )

    return (
      <View style={{flex: 1}}>
        {desc}
      </View>
    )
  }

  render () {
    return (
      <Container>
        <HeaderBar>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <HeaderLeft>
              <Icons name={'chevron-left'} size={20} color={'black'}/>
              <TripName>Summer Trip</TripName>
            </HeaderLeft>
          </TouchableOpacity>
        </HeaderBar>
        <Content>
          <TopContent>
            <Start>Start</Start>
            <AddressLayout>
              <Address>3th Ave Luther king, NSW, Sydney</Address>
              <TouchableOpacity>
                <ChangeAddress>Change</ChangeAddress>
              </TouchableOpacity>
            </AddressLayout>
            <YourCurrentLocation>Your current location</YourCurrentLocation>
          </TopContent>

        </Content>
        <Timeline
          //..other props
          renderFullLine
          lineColor={'#b7b7b7'}
          style={{flex: 1, marginTop: 20, marginRight: 20}}
          data={this.data}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          renderDetail={this.renderDetail}
          iconStyle={{alignItems: 'center'}}
          detailContainerStyle={{paddingLeft: 5, paddingRight: 5, borderRadius: 10}}
          showTime={false}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineTrip)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50
  },
  image: {
    width: config.windowWidth * 0.3,
    height: config.windowWidth * 0.3 - 30,
    borderRadius: 5,
    marginRight: 10
  },
  textDescription: {
    color: 'gray'
  }
})
