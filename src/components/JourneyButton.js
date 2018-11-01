import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import ShadowView from 'react-native-shadow-view'
import Icons from 'react-native-vector-icons/FontAwesome'

import config from '../config'

const TitleButton = styled.Text`
  font-weight: bold;
  font-size: 10
`

class JourneyButton extends Component {
  render () {
    const {title} = this.props
    return (
      <TouchableOpacity>
        <ShadowView style={{
          width: config.windowWidth * 0.3,
          height: config.windowWidth * 0.25,
          borderRadius: 10,
          backgroundColor: 'white',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          shadowOffset: {
            width: 0, height: 2,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4
        }}>
          <Icons name={'map'} size={40} color={'black'}/>
          <TitleButton>{title}</TitleButton>
        </ShadowView>
      </TouchableOpacity>
    )
  }
}

export default JourneyButton
