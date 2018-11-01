import React, { Component } from 'react'
// import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native'
import ShadowView from 'react-native-shadow-view'
import LinearGradient from 'react-native-linear-gradient'
import Icons from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import config from '../config'
import { searchNearByRegions } from '../actions/search'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -33.8082,
      lng: 151.0835
    }
  }
  render () {
    const {navigation} = this.props
    return (
      <LinearGradient
        // style={styles.wrapper}
        style={styles.wrapper}
        colors={
          ['rgba(255,255,255,1) 0%', 'rgba(255,255,255,1) 63%', 'rgba(255,255,255,1) 70%', 'rgba(255,255,255,0.9) 80%', 'rgba(255,255,255,0.8) 99%', 'rgba(255,255,255,0) 100%']
        }
      >
        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate({routeName: 'Drawer'})}>
          <Icon name={'ios-menu'} size={22}/>
        </TouchableOpacity>
        <ShadowView
          style={{
            flex: 7,
            height: 40,
            backgroundColor: 'white',
            borderRadius: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0, height: 1,
            },
            shadowOpacity: 0.3,
            shadowRadius: 2
          }}
        >
          <TextInput style={styles.textInput} placeholder={'Find a Place'}/>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => this.props.searchNearByRegions(this.state.lat, this.state.lng)}
          >
            <Icon
              name="ios-search"
              size={20}
              // color={colors.gray02}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </ShadowView>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                          onPress={() => navigation.navigate({routeName: 'Home'})}>
          <Icon name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} size={18}/>
        </TouchableOpacity>
      </LinearGradient>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  searchNearByRegions: (lat, lng) => dispatch(searchNearByRegions(lat, lng))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: 100,
    zIndex: 99,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  searchContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // borderColor: colors.gray03,
    // backgroundColor: colors.white,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 10,
    borderRadius: 3,
    height: 40,
    marginTop: 28,
    marginLeft: 21,
    marginRight: 21
  },
  textInput: {
    flex: 6,
    // color: colors.gray02,
    paddingLeft: 10
  },
  searchIcon: {
    padding: 10
  }
})
