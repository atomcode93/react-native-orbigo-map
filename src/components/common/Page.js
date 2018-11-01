import React from 'react'
import { View, StyleSheet } from 'react-native'

import BaseExamplePropTypes from './BaseExamplePropTypes'
// import MapHeader from './MapHeader'

// import colors from '../../styles/colors'

let styles = StyleSheet.create(
  matchParent = {
    flex: 1,
  }
)

class Page extends React.Component {
  static propTypes = {
    ...BaseExamplePropTypes,
  }

  render () {
    return (
      <View style={styles.matchParent}>
        {/*<MapHeader*/}
        {/*relative*/}
        {/*backgroundColor={colors.primary.pink}*/}
        {/*statusBarColor={colors.primary.pinkDark}*/}
        {/*statusBarTextTheme={'light-content'}*/}
        {/*label={this.props.label}*/}
        {/*onBack={this.props.onDismissExample}*/}
        {/*/>*/}

        {this.props.children}
      </View>
    )
  }
}

export default Page
