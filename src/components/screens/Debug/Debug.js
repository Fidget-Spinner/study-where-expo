import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Card, Button, TextField, Toggle, PopUp } from '../../common';
import { GLOBALS } from '../../../Globals';

class Debug extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  render() {
    return (
      <View style={styles.mainbackground}>
        <Card style={styles.card1} color={GLOBALS.COLORS.PRIMARY}>
          <Text style={styles.word}>
            HI
          </Text>  
        </Card>
        <Toggle />
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
        <Button onPress={this.setState({ showModal: true })}>
            <Text style={styles.word}>
              SHOWMODAL
            </Text>
        </Button>
        <PopUp
          visible={this.state.showModal}
          animationType='slide'
        />
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
