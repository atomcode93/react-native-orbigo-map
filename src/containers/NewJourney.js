import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Button, Container, Icon, Input, StyleProvider, Text, View } from 'native-base'
import ShadowView from 'react-native-shadow-view'

import config from '../config'
import colors from '../config/colors'
import images from '../config/images'

import getTheme from '../../native-base-theme/components'
import orbigo from '../../native-base-theme/variables/orbigo'

class NewJourney extends Component {

  render () {
    return (
      <StyleProvider style={getTheme(orbigo)}>
        <Container>
          <View style={styles.container}>
            <Text style={styles.title}>Start New Journey</Text>
            <Text style={styles.subTitle}>Where will your next adventure be?</Text>
            <View style={{marginTop: 30}}>
              <ShadowView style={styles.shadow}>
                <Icon ios={`ios-search`} android={`ios-search`} style={styles.iconSearch}/>
                <Input style={{fontSize: 10}} placeholder={`Looking for a destination or attraction`}
                       placeholderTextColor={colors.gray1}/>
                <Button transparent noPadding
                        onPress={() => this.props.navigation.navigate({routeName: 'Map'})}>
                  <Icon ios={`md-arrow-round-forward`} android={`md-arrow-round-forward`} style={styles.iconArrow}/>
                </Button>
              </ShadowView>
            </View>
            <View style={styles.selectRegion}>
              <ShadowView style={styles.shadowButton}>
                <TouchableOpacity style={styles.selectRegionButton}>
                  <Image source={images.btnLocal} style={styles.selectRegionButtonImage}/>
                </TouchableOpacity>
              </ShadowView>
              <TouchableOpacity style={styles.selectRegionButtonActive}>
                <Image source={images.btnNational} style={styles.selectRegionButtonImage}/>
              </TouchableOpacity>
              <ShadowView style={styles.shadowButton}>
                <TouchableOpacity style={styles.selectRegionButton}>
                  <Image source={images.btnInternational} style={styles.selectRegionButtonImage}/>
                </TouchableOpacity>
              </ShadowView>
            </View>
            <Button transparent noPadding
                    onPress={() => this.props.navigation.navigate({routeName: 'Map'})}
                    style={{flexDirection: 'row'}}>
              <Text style={styles.discoverTitle}>Discover</Text>
              <Icon ios={`md-arrow-round-forward`} android={`md-arrow-round-forward`}
                    style={[styles.iconArrow, {marginTop: 3}]}/>
            </Button>
          </View>

        </Container>

      </StyleProvider>
    )
  }
}

const styles = {
  container: {
    width: config.windowWidth,
    height: config.windowHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  subTitle: {
    fontSize: 16,
    color: colors.gray2,
    paddingTop: config.smallWhiteSpace
  },
  shadow: {
    width: config.windowWidth * 0.8,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#999',
    paddingVertical: 10,
    shadowOffset: {
      width: 0, height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5
  },
  iconSearch: {
    width: 25,
    height: 25,
    marginLeft: 15,
    color: colors.gray1
  },
  iconArrow: {
    fontSize: 20,
    width: 20,
    height: 20,
    marginRight: 10,
    color: colors.green
  },
  selectRegion: {
    width: config.windowWidth * 0.93,
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  selectRegionButton: {
    width: config.windowWidth * 0.28,
    height: config.windowWidth * 0.28,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectRegionButtonActive: {
    width: config.windowWidth * 0.28,
    height: config.windowWidth * 0.28,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green
  },
  selectRegionButtonImage: {
    width: 256 / 1242 * config.windowWidth,
    height: 256 / 1242 * config.windowWidth
  },
  shadowButton: {
    width: config.windowWidth * 0.27,
    height: config.windowWidth * 0.27,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#999',
    paddingVertical: 10,
    shadowOffset: {
      width: 0, height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5
  },
  discoverTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.green,
    paddingRight: 10
  }
}

export default NewJourney
