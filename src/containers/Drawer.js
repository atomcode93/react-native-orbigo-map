import React, { Component } from 'react'
import { View, TouchableOpacity, Platform, Text } from 'react-native'
import { connect } from 'react-redux'
import { Content, List, ListItem } from 'native-base'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome'
import config from '../config'

const Container = styled.View`
  flex: 1;
  backgroundColor: white;
  paddingHorizontal: 20
`

const CloseButton = styled.View`
  marginTop: 20;
  height: 30;
  alignSelf: flex-end
`

const InfoLayout = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center
`

const UserInfo = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center
`

const Avatar = styled.Image`
  width: 60;
  height: 60;
  marginRight: 10
`

const UserNameLayout = styled.View`
`

const Name = styled.Text`
  fontWeight: bold;
  fontSize: 18
`

const EditProfile = styled.Text`
  paddingTop: 5;
  color: #a1a1a1;
  fontSize: 10
`

const CommentAndNotification = styled.View`
  width: ${config.windowWidth * 0.15};
  flexDirection: row;
  justifyContent: space-between
`

const ItemLabel = styled.Text`
  
`

class Drawer extends Component {
  render () {
    return (
      <Container>
        <CloseButton>
          <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} size={44} onPress={() => this.props.navigation.goBack()}/>
        </CloseButton>
        <InfoLayout>
          <UserInfo>
            <Avatar source={require('../assets/avatar.jpg')} resizeMode={'contain'} borderRadius={30}/>
            <UserNameLayout>
              <Name>Nicole</Name>
              <TouchableOpacity>
                <EditProfile>Edit profile</EditProfile>
              </TouchableOpacity>
            </UserNameLayout>
          </UserInfo>
          <CommentAndNotification>
            <TouchableOpacity>
              <Icons name={'comment'} size={22}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icons name={'bell'} size={22}/>
            </TouchableOpacity>
          </CommentAndNotification>
        </InfoLayout>
        <List style={{marginLeft: -20, marginTop: 10}}>
          <ListItem>
            <Icons name={'user-circle'} size={22} style={{width: 40, paddingRight: 10}}/>
            <ItemLabel>Profile</ItemLabel>
          </ListItem>
          <ListItem>
            <Icons name={'map-marker'} size={22} style={{width: 40, paddingRight: 10}}/>
            <ItemLabel>Trip</ItemLabel>
          </ListItem>
          <ListItem>
            <Icons name={'heart'} size={22} style={{width: 40, paddingRight: 10}}/>
            <ItemLabel>Saved</ItemLabel>
          </ListItem>
          <ListItem>
            <Icons name={'cog'} size={22} style={{width: 40, paddingRight: 10}}/>
            <ItemLabel>Setting</ItemLabel>
          </ListItem>
          <ListItem>
            <Icons name={'home'} size={22} style={{width: 40, paddingRight: 10}}/>
            <ItemLabel>List your business</ItemLabel>
          </ListItem>
          <ListItem>
            <ItemLabel style={{color: 'red'}}>Log out</ItemLabel>
          </ListItem>
        </List>
      </Container>
    )
  }

}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default Drawer
