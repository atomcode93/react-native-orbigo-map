import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import AuthScreen from './containers/Auth'
import NewJourneyScreen from './containers/NewJourney'
import HomeScreen from './containers/Home'
import DetailPlanTripScreen from './containers/DetailPlanTrip'
import Map from './containers/Map'
import ListTrip from './containers/ListTrip'
import DrawerScreen from './containers/Drawer'
import ReserveScreen from './containers/Reserve'
import TravelBuddyScreen from './containers/TravelBuddy'
import TravellingWithScreen from './containers/TravellingWith'
import TimeLineTripScreen from './containers/TimeLineTrip'

const AppNavigation = createStackNavigator({
  Auth: {
    screen: AuthScreen,
    navigationOptions: {
      header: null
    }
  },
  NewJourney: {
    screen: NewJourneyScreen,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Map: {
    screen: Map,
    navigationOptions: {
      header: null
    }
  },
  ListTrip: {
    screen: ListTrip,
    navigationOptions: {
      header: null
    }
  },
  DetailPlanTrip: {
    screen: DetailPlanTripScreen,
    navigationOptions: {
      header: null
    }
  },
  Drawer: {
    screen: DrawerScreen,
    navigationOptions: {
      header: null
    }
  },
  Reserve: {
    screen: ReserveScreen,
    navigationOptions: {
      header: null
    }
  },
  TravelBuddy: {
    screen: TravelBuddyScreen,
    navigationOptions: {
      header: null
    }
  },
  TravellingWith: {
    screen: TravellingWithScreen,
    navigationOptions: {
      header: null
    }
  },
  TimeLineTrip: {
    screen: TimeLineTripScreen,
    navigationOptions: {
      header: null
    }
  },
})

export default AppNavigation
