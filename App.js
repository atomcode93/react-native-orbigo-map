import React, { Component } from 'react'
import { BackHandler, View } from 'react-native'
import { Provider, connect } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { NavigationActions } from 'react-navigation'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
// import SplashScreen from 'react-native-smart-splash-screen'
import AppNavigation from './src/AppNavigation'
import configureStore from './src/configureStore'

console.disableYellowBox = true

type Props = {}

const App = reduxifyNavigator(AppNavigation, 'root')

const mapStateToProps = (state) => ({state: state.nav})

const RootNavigationStack = connect(mapStateToProps)(App)



class Root extends Component<Props> {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    // SplashScreen.close({
    //   animationType: SplashScreen.animationType.fade,
    //   duration: 850,
    //   delay: 500,
    // })
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props
    console.log(nav)
    if (nav.index === 0) {r
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }

  render () {
    return (
      <Provider store={configureStore.store}>
        <PersistGate persistor={configureStore.persistor}>
          <RootNavigationStack/>
        </PersistGate>
      </Provider>
    )
  }
}

export default Root
