import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
  } from 'react-native';
import { MapView, Constants } from 'expo';

import { CustomMarker } from './CustomMarker';

//Gmaps MapView wrapper component
class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        // test code only, in final the
        // markers will be taken from redux store/ firebase
        {
          latlng: {
            latitude: 1.319103,
            longitude: 103.891973,
          },
          title: 'marker1',
          description: 'desc1',
        },
        {
          latlng: {
            latitude: 1.350789,
            longitude: 103.870933,
          },
          title: 'marker1',
          description: 'desc2',
        },
      ]
      
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* DEBUG VIEW: */}
        {/* <View style={{ width: 150, height: 400, top: 10, left: 10, zIndex: 3, position: 'absolute' }}>
          {this.state.markers.map((marker, key) => (
            <Text key={key}>
              coordinate={[marker.latlng.latitude, marker.latlng.longitude]}{'\n'}
              title={marker.title}{'\n'}
              description={marker.description}{'\n'}
            </Text>
          ))}
        </View> */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 1.346706,
            longitude: 103.842016,
            latitudeDelta: 0.02,
            longitudeDelta: 0.04,
          }}
        >
        {/* this is to take an object with a list of markers and
        run through them, then display them on screen */}
        {this.state.markers.map((marker, key) => (
          <CustomMarker 
            key={key}
            marker={{
              coordinate: marker.latlng,
              title: marker.title,
              description: marker.description
            }}
          />
        ))}
        {/* Home Test Sample Marker: */}
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

