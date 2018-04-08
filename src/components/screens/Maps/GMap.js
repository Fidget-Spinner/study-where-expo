import React, { Component } from 'react';
import {
    View,
    StyleSheet
  } from 'react-native';
import { MapView, Constants } from 'expo';

import { CustomMarker } from './CustomMarker';

//Gmaps MapView wrapper component
class GMap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 1.346706,
            longitude: 103.842016,
            latitudeDelta: 0.02,
            longitudeDelta: 0.04,
          }}
        >
        {/* Test marker */}
        {/* <MapView.Marker 
          title="Home"
          coordinate={{
            latitude: 1.346706,
            longitude: 103.842016,
          }}
        /> */}
          <CustomMarker 
            marker={{
              coordinate: {
                latitude: 1.346706,
                longitude: 103.842016,
              },
              title: 'Home',
              description: 'Home Base!'
            }} 
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1 
  },
  map: {
    left: 0,
    right: 0,
    top: Constants.statusBarHeight,
    bottom: 0,
    position: 'absolute'
  }
});

export default GMap;

