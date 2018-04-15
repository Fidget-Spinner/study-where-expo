import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert, StyleSheet } from 'react-native';

import { GLOBALS } from '../../Globals';

class Button extends Component {
  constructor(props) {
      super(props);
      this.state = {
          pressed: false
      };
  }
  onPressButton = (message) => {
      //onPressButton is a function that is created with each
      // button instance
      this.setState({ pressed: true }); 
      Alert.alert(message);
  }; 
  render() {
      return (
          <View style={{ flex: 1 }}>
              <TouchableHighlight onPress={this.onPressButton(this.props.message)}>
                  <Text style={{ fontSize: 10, color: this.state.pressed ? 'green' : 'red' }}>
                      {this.props.content}
                  </Text>  
              </TouchableHighlight>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  disabledButton: {
    color: GLOBALS.COLORS.PLIGHT
  },
  disabledText: {
    color: GLOBALS.COLORS.INACTIVE
  },
  enabledButton: {
    color: GLOBALS.COLORS.PRIMARY
  },
  enabledText: {
    color: GLOBALS.COLORS.ACTIVE
  }
});

export default Button;
