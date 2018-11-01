import React, { Component } from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Icons from 'react-native-vector-icons/FontAwesome'
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

const HeaderLeft = styled.View``

const HeaderRight = styled.View``

const Content = styled.View`
  flexDirection: column;
  paddingHorizontal: 20;
  paddingTop: 20;
`

const TopContent = styled.View`
  flexDirection: row;
`

const WhoTravelling = styled.Text`
  fontWeight: bold;
  fontSize: 16
`

const GuestLayout = styled.View`
  marginTop: ${config.largeWhiteSpace};
  borderTopWidth: 1;
  borderColor: #b7b7b7
`

const GuestItem = styled.TouchableOpacity`
  paddingVertical: 10;
  flexDirection: row;
  borderBottomWidth: 1;
  borderColor: #b7b7b7;
  justifyContent: space-between;
  alignItems: center
`

const UserInfo = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center
`

const Avatar = styled.Image`
  width: 50;
  height: 50;
  marginRight: 10
`

const Name = styled.Text`
  fontWeight: bold;
  fontSize: 14
`

const SelfDetect = styled.View`
  borderRadius: 3;
  paddingVertical: 5;
  paddingHorizontal: 10;
  alignItems: center;
  justifyContent: center;
  borderColor: #04c4d7;
  borderWidth: 1;
`

const You = styled.Text`
  color: #04c4d7;
  fontSize: 10
`

const AddGuest = styled.View`
  height: 50;
  width: 50;
  borderRadius: 25;
  alignItems: center;
  justifyContent: center;
  borderWidth: 1;
  borderColor: #b7b7b7;
  backgroundColor: white;
  marginRight: 10
`

const AddPeople = styled.Text`
  color: #b7b7b7;
  fontSize: 14
`

class TravellingWith extends Component {
  render () {
    return (
      <Container>
        <HeaderBar>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <HeaderLeft>
              <Icons name={'chevron-left'} size={20} color={'black'}/>
            </HeaderLeft>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <HeaderRight>
              <Icons name={'times'} size={20} color={'black'}/>
            </HeaderRight>
          </TouchableOpacity>
        </HeaderBar>
        <Content>
          <TopContent>
            <WhoTravelling>Who's travelling with you?</WhoTravelling>
          </TopContent>
          <GuestLayout>
            <GuestItem  disabled>
              <UserInfo>
                <Avatar source={require('../assets/avatar.jpg')} resizeMode={'contain'} borderRadius={25}/>
                <Name>Dennis rodman</Name>
              </UserInfo>
              <SelfDetect>
                <You>You</You>
              </SelfDetect>
            </GuestItem>

            <GuestItem>
              <UserInfo>
                <AddGuest>
                  <Icons name={'plus'} size={22} color={'#b7b7b7'}/>
                </AddGuest>
                <AddPeople>Add people</AddPeople>
              </UserInfo>
            </GuestItem>
          </GuestLayout>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TravellingWith)
