import React, { Component } from 'react';
import {
    View,
    StyleSheet,
  } from 'react-native';
import { MapView } from 'expo';

class GMap extends Component {
    render() {
        return (
            <View style={styles.container} >
                <MapView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
export default GMap;
