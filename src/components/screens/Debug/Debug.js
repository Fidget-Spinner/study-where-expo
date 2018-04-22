import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Card, Button, TextField } from '../../common';
import { GLOBALS } from '../../../Globals';

class Debug extends Component {
  render() {
    return (
      <View style={styles.mainbackground}>
        <Card style={styles.card1} color={GLOBALS.COLORS.PRIMARY}>
          <Text style={styles.word}>
            HI
          </Text>  
        </Card>
        <View style={{ padding: 50, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: GLOBALS.COLORS.PRIMARY }}>
            <TextField style={{ flex: 1 }} label='password' />
          </View>
          <Button onPress={() => console.log('LOGGEDIN', ...[TextField.value])}>
            <Text style={styles.word}>
              LOGIN
            </Text>
          </Button>
        </View>
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
  },
  word: {
    fontSize: 14, 
    fontFamily: GLOBALS.FONT.TEXT1,
  }
});

export default Debug;
