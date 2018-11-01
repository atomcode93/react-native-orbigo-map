import { Dimensions, Platform } from 'react-native'

const statusBar = Platform.select({
    ios: 20,
    android: 24
})

const header = Platform.select({
    ios: 45,
    android: 56
})

const logoHeight= Platform.select({
    ios: 45,
    android: 85
})

const logoWidth = Platform.select({
    ios: 90,
    android: 260
})


// Window Dimensions
const window = Dimensions.get('window')
const windowHeight = window.height
const windowWidth = window.width

// Padding
const padding5 = 5
const padding10 = 10
const padding20 = 20
const padding30 = 30

// Grid
const grid_half = window.width * 0.5
const grid_third = window.width * 0.333
const grid_oneFive = window.width * 0.2
const grid_oneTen = window.width * 0.1
const grid_twoThirds = window.width * 0.666
const grid_quarter = window.width * 0.25
const grid_threeQuarters = window.width * 0.75

const config = {
  statusBar,
  header,

  windowHeight,
  windowWidth,

  // grid
  grid_half,
  grid_twoThirds,
  grid_oneFive,
  grid_oneTen,
  grid_third,
  grid_quarter,
  grid_threeQuarters,

  // padding
  padding5,
  padding10,
  padding20,
  padding30,

  // Logo NavBar Size
  logoHeightIOS,
  logoWidthIOS,
  logoHeightAndroid,
  logoWidthAndroid,
}

export default config
