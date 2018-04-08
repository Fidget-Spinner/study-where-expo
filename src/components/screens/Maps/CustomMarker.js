import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView } from 'expo';

import { GLOBALS } from '../../../Globals';
//This component controls how all markers look

const CustomMarker = (props) => { 
  return (
    <MapView.Marker
      coordinate={props.marker.coordinate}
      title={props.marker.title}
      description={props.marker.description}
    >
      {/* Ring design of marker */}
      <View style={styles.markerView}>
        <View style={styles.markerRing}>
          {/* Insert things inside here to include stuff in marker */}
        </View>
      </View>
    </MapView.Marker>
  );
};

const styles = StyleSheet.create({
  markerView: {
    backgroundColor: GLOBALS.COLORS.PLIGHT,
    width: 12,
    height: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1
  },
  markerRing: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 0
  }
});

export { CustomMarker };
