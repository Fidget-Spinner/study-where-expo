import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { GLOBALS } from '../../Globals';

class Button extends Component {
  constructor(props) {
      super(props);
      this.state = {
          pressed: false
      };
  }
  onPressButton = () => {
      this.setState({ pressed: !this.state.pressed }); 
  }; 
  render() {
      return (
          <View style={this.state.pressed ? styles.fcontainer : styles.tcontainer}>
              <TouchableOpacity 
              onPress={this.props.onPress}
              onPressIn={this.onPressButton}
              onPressOut={this.onPressButton}
              >
                  <View>
                    {this.props.children}
                  </View> 
              </TouchableOpacity>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  inButton: {
    fontSize: 30,
    fontFamily: GLOBALS.FONT.TEXT1, 
  },
  tcontainer: {
    backgroundColor: GLOBALS.COLORS.PDARK,
    padding: 10
  },
  fcontainer: {
    backgroundColor: GLOBALS.COLORS.PDARK,
    padding: 15
  }
});

export { Button };
