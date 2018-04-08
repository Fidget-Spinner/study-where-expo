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
      <View style={styles.markerView}>
        <View style={styles.markerRing} />
      </View>
    </MapView.Marker>
  );
};

const styles = StyleSheet.create({
  markerView: {
    backgroundColor: GLOBALS.COLORS.PDARK,
    width: 20,
    height: 20,
    borderRadius: 10,
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
