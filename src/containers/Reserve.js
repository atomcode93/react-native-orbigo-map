import React, { Component } from 'react'
import { View, TouchableOpacity, Platform, Text } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome'
import config from '../config'

const Container = styled.ScrollView`
  flex: 1;
  backgroundColor: white;
`

const HeaderBar = styled.View`
  top: 0;
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

const Content = styled.View`
  minHeight: ${config.windowHeight - 60};
  flex: 1;
  paddingHorizontal: 20
`

const NameLayout = styled.View`
  alignItems: center;
  flexDirection: row
`

const NameOfTrip = styled.Text`
  fontSize: 28
`

const NameOfClass = styled.Text`
  fontSize: 12;
  color: #a1a1a1
`

const Divide = styled.View`
  height: 1;
  marginVertical: 10;
  backgroundColor: #a1a1a1
`

const Note = styled.Text`
  fontSize: 18;
  paddingBottom: 10
`

const ContentOfNote = styled.Text`
  color: #a1a1a1;
  paddingBottom: 10
`

const ReadMore = styled.Text`
  color: green;
  fontSize: 12
`

const PriceAndReserve = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between
`

const PriceLayout = styled.View`
  flexDirection: column;
`

const Price = styled.Text`
  fontSize: 22
`

const PerPerson = styled.Text`
  color: #a1a1a1;
  fontSize: 12
`

const ReserveButton = styled.TouchableOpacity`
  borderWidth: 1;
  borderColor: #04c4d7;
  borderRadius: 5;
  height: 35;
  alignItems: center;
  justifyContent: center;
  width: 80;
  backgroundColor: white;
`

const ReserveButtonLabel = styled.Text`
  fontSize: 12;
  color: #04c4d7
`

const DateTimeLayout = styled.View`
  marginTop: 30;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center
`

const SelectDateLabel = styled.Text`
  color: #a1a1a1
`

const DateTime = styled.View`
  width: ${config.windowWidth * 0.3};
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center
`

const Date = styled.Text`
  color: #a1a1a1
`

const Month = styled.Text`
  color: #a1a1a1
`

const Year = styled.Text`
  
`

const ConfirmReserve = styled.View`
  width: ${config.windowWidth};
  position: absolute;
  paddingHorizontal: 20;
  bottom: 10;
  height: 60;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center
`

const ConfirmDateTimeLayout = styled.View`
  width: ${config.windowWidth * 0.2};
  flexDirection: column;
`

const ConfirmDateLayout = styled.View`
  flexDirection: row;
  justifyContent: space-between;
`

const ConfirmDate = styled.Text`
`

const ConfirmMonth = styled.Text`
`

const ConfirmYear = styled.Text`
`

const ConfirmTime = styled.Text`
  color: #a1a1a1
`

const ConfirmButton = styled.TouchableOpacity`
  borderRadius: 5;
  height: 35;
  alignItems: center;
  justifyContent: center;
  width: 80;
  backgroundColor: #04c4d7;
  marginBottom: 10
`

const ConfirmButtonLabel = styled.Text`
  fontSize: 12;
  color: white
`

class Reserve extends Component {
  render () {
    return (
      <Container>
        <HeaderBar>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <HeaderLeft>
              <Icons name={'chevron-left'} size={20} color={'black'}/>
            </HeaderLeft>
          </TouchableOpacity>
        </HeaderBar>
        <Content>
          <NameLayout>
            <NameOfTrip>Mr Wong</NameOfTrip>
            <NameOfClass> / Restaurant</NameOfClass>
          </NameLayout>
          <Divide/>
          <Note>Note</Note>
          <ContentOfNote
            numberOfLines={3}
          >
            {`Test\ntest`}
          </ContentOfNote>
          <ReadMore>Read More <Icons name={'chevron-right'} size={12}/></ReadMore>
          <Divide/>
          <PriceAndReserve>
            <PriceLayout>
              <Price>$25</Price>
              <PerPerson>Per person</PerPerson>
            </PriceLayout>
            <ReserveButton onPress={() => this.props.navigation.navigate({routeName: 'TimeLineTrip'})}>
              <ReserveButtonLabel>Reserve</ReserveButtonLabel>
            </ReserveButton>
          </PriceAndReserve>
          <DateTimeLayout>
            <SelectDateLabel>Select date</SelectDateLabel>
            <DateTime>
              <Date>17</Date>
              <Month>Jan</Month>
              <Year>2018</Year>
              <Icons name={'calendar'} size={12}/>
            </DateTime>
          </DateTimeLayout>
          <ConfirmReserve>
            <ConfirmDateTimeLayout>
              <ConfirmDateLayout>
                <ConfirmDate>17</ConfirmDate>
                <ConfirmMonth>Jan</ConfirmMonth>
                <ConfirmYear>2018</ConfirmYear>
              </ConfirmDateLayout>
              <ConfirmTime>10:00 AM</ConfirmTime>
            </ConfirmDateTimeLayout>
            <ConfirmButton onPress={() => this.props.navigation.navigate({routeName: 'TravelBuddy'})}>
              <ConfirmButtonLabel>Continue</ConfirmButtonLabel>
            </ConfirmButton>
          </ConfirmReserve>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Reserve)
