import { Dimensions } from "react-native"


//API
export const API_URL = 'http://34.235.112.213/orbigo2/php-web';

// Window Dimensions
const window = Dimensions.get("window")
const windowHeight = window.height
const windowWidth = window.width

// Padding
const padding5 = 5
const padding10 = 10
const padding20 = 20
const padding30 = 30

const smallWhiteSpace = 10
const mediumWhiteSpace = 20
const largeWhiteSpace = 40

// Grid
const grid_half = window.width * .5
const grid_third = window.width * .333
const grid_oneFive = window.width * .2
const grid_oneTen = window.width * .1
const grid_twoThirds = window.width * .666
const grid_quarter = window.width * .25
const grid_threeQuarters = window.width * .75

// Logo NavBar
const logoHeightIOS = 45
const logoWidthIOS = 90
const logoHeightAndroid = 85
const logoWidthAndroid = 260

const config = {
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

  // white space
  smallWhiteSpace,
  mediumWhiteSpace,
  largeWhiteSpace,

  // Logo NavBar Size
  logoHeightIOS,
  logoWidthIOS,
  logoHeightAndroid,
  logoWidthAndroid
}

export default config
