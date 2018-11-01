import React, { Component } from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import { Button, Text, Form, Input, Item } from 'native-base'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome'
import colors from '../config/colors'
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
  
`

const Content = styled.View`
  flexDirection: column;
  paddingHorizontal: 20;
  paddingTop: 20;
`

const TopContent = styled.View`
  alignItems: center;
  flexDirection: row;
  justifyContent: space-between
`

const AddTravelBuddy = styled.Text`
  fontWeight: bold;
  fontSize: 16
`

const SyncContact = styled.Text`
  fontSize: 12;
  color: #04c4d7
`

class TravelBuddy extends Component {
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
          <TopContent>
            <AddTravelBuddy>Add Travel buddy</AddTravelBuddy>
            <TouchableOpacity>
              <SyncContact>Sync contact</SyncContact>
            </TouchableOpacity>
          </TopContent>
          <Form style={styles.form}>
            <Item authLabel style={{marginLeft: 0}}>
              <Input placeholder="Full name" placeholderTextColor={colors.gray1}/>
            </Item>
            <Item authLabel style={{marginLeft: 0}}>
              <Input placeholder="Email" placeholderTextColor={colors.gray1}/>
            </Item>
            <Item authLabel style={{marginLeft: 0}}>
              <Input placeholder="Phone number (optional)" placeholderTextColor={colors.gray1}/>
            </Item>
          </Form>
          <Button green style={styles.button}
                  onPress={() => this.props.navigation.navigate({routeName: 'TravellingWith'})}>
            <Text style={{textAlign: 'center'}}>{`Add Guest`}</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TravelBuddy)

const styles = {
  button: {
    backgroundColor: '#04c4d7',
    width: config.windowWidth * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  form: {
    width: '100%',
    paddingLeft: 0,
    marginLeft: 0,
    marginTop: config.largeWhiteSpace,
    marginBottom: config.largeWhiteSpace
  },
  marginTomSmall: {
    marginTop: config.smallWhiteSpace
  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}
