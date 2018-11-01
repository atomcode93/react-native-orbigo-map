import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Dimensions } from 'react-native'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import styled from 'styled-components'
import Icons from 'react-native-vector-icons/FontAwesome'

const {height, width} = Dimensions.get('window')

import BaseExamplePropTypes from './common/BaseExamplePropTypes'
// import Page from './common/Page'

import smileyFaceGeoJSON from '../assets/maps/AUS.geo'
import sydney from '../assets/maps/sydney.geo'
import lithgow from '../assets/maps/lithgow.geo'
import wollongong from '../assets/maps/wollongong.geo'
import blueMountains from '../assets/maps/blueMountains.geo'

import configEnv from '../../configEnv'

let styles = StyleSheet.create(
  matchParent = {
    flex: 1,
  }
)

import gridPattern from '../assets/grid_pattern.png'
import config from '../config'
// import smileyFaceGeoJSON from '../assets/smiley_face.json'

const layerStyles = MapboxGL.StyleSheet.create({
  background: {
    backgroundPattern: gridPattern,
  },
  smileyFace: {
    // fillAntialias: true,
    fillColor: MapboxGL.StyleSheet.camera({
      15: 'blue',
      20: 'green',
    }, MapboxGL.InterpolationMode.Interval),
    fillOutlineColor: '#00cee9',
    fillOpacity: 0.5,
    lineWidth: 33
  },
})

const ButtonShowInfoLayout = styled.View`
  position: absolute;
  bottom: 0;
  zIndex: 10;
  height: ${config.windowHeight * 0.1};
  width: ${config.windowWidth};
  paddingVertical: 10;
  paddingHorizontal: 10;
  justifyContent: flex-end;
  alignItems: center;
  flexDirection: row
`

const ButtonShowInfo = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
  height: 40;
  width: 40;
  borderRadius: 50;
  backgroundColor: #04c4d7
`

MapboxGL.setAccessToken('pk.eyJ1IjoiYmFuZ3ZjIiwiYSI6ImNqaWw2eTBscTI2N3Uzd3FweG5mb3BrY28ifQ.WCVr9sLNdUlAwlmbNaex7g')

class GeoJSONSource extends Component {
  static propTypes = {
    ...BaseExamplePropTypes,
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.nearbyRegions.length > 0) {
      this.map.setCamera({
        centerCoordinate: [151.0835, -33.8082],
        zoom: 8.5,
        duration: 2000
      })
    }
  }

  render () {
    const {nearbyRegions} = this.props;

    return (
      <View style={{flex: 1, height: height, width: width}}>
        <MapboxGL.MapView
          showUserLocation
          userTrackingMode={1}
          userLocationVerticalAlignment={1}
          zoomLevel={2}
          centerCoordinate={[133.77513599999997, -25.274398]}
          onSetCameraComplete={this.onUpdateZoomLevel}
          ref={(ref) => (this.map = ref)}
          style={{flex: 1}}
          styleURL={MapboxGL.StyleURL.Street}
        >
          {/*<MapboxGL.VectorSource>*/}
            {/*<MapboxGL.BackgroundLayer*/}
              {/*id="background"*/}
              {/*style={layerStyles.background}*/}
            {/*/>*/}
          {/*</MapboxGL.VectorSource>*/}

          <MapboxGL.ShapeSource id="smileyFaceSource" shape={smileyFaceGeoJSON}>
            <MapboxGL.FillLayer
              id="smileyFaceFill"
              style={MapboxGL.StyleSheet.create({
                visibility: nearbyRegions.length !== 0 ? 'none' : 'visible',
                fillColor: MapboxGL.StyleSheet.camera({
                  15: 'blue',
                  20: 'green',
                }, MapboxGL.InterpolationMode.Interval),
                fillOutlineColor: 'red',
                fillOpacity: 0.3,
                lineWidth: 33})
              }
            />
          </MapboxGL.ShapeSource>
          
          <MapboxGL.ShapeSource id="sydney" shape={sydney}>
            <MapboxGL.FillLayer
              id="sydneyFill"
              style={MapboxGL.StyleSheet.create({
                visibility: nearbyRegions.length === 0 ? 'visible' : 'none',
                fillColor: MapboxGL.StyleSheet.camera({
                  15: '#04c4d7',
                }, MapboxGL.InterpolationMode.Interval),
                fillOutlineColor: 'red',
                fillOpacity: 0.3,
                lineWidth: 33})
              }
            />
          </MapboxGL.ShapeSource>

          {
          _.map(nearbyRegions, (region, index) => {
            const shape = {
              "type":"GeometryCollection",
              "geometries": [{
                "type": "MultiPolygon",
                "coordinates": JSON.parse(region.coordinates)
              }]
            }
            return (
              <MapboxGL.ShapeSource key={index} id={region.region_name} shape={shape}>
                <MapboxGL.FillLayer
                  id={region.region_name}
                  style={MapboxGL.StyleSheet.create({
                    visibility: 'visible',
                    fillColor: MapboxGL.StyleSheet.camera({
                      15: '#04c4d7',
                    }, MapboxGL.InterpolationMode.Interval),
                    fillOpacity: 0.5,
                    fillOutlineColor: 'red',
                    lineWidth: 33})
                  }
                />
              </MapboxGL.ShapeSource>
            )
          })
          }

        </MapboxGL.MapView>
        <ButtonShowInfoLayout>
          <ButtonShowInfo onPress={() => this.props.toggleInfo()}>
            <Icons name={'star'} size={20} color={'white'}/>
          </ButtonShowInfo>
        </ButtonShowInfoLayout>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  nearbyRegions: state.search.nearbyRegions
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(GeoJSONSource)
