import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { Card, Button } from '../../common';
import { GLOBALS } from '../../../Globals';

class Debug extends Component {
  render() {
    return (
      <View style={styles.mainbackground}>
        <Card style={styles.card1} color={GLOBALS.COLORS.PRIMARY} text='DEBUG' />
        <Button />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainbackground: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: GLOBALS.COLORS.BACKGROUND
  },
  Card1: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default Debug;
