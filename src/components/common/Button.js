import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { GLOBALS } from '../../Globals';

class Button extends Component {
  constructor(props) {
      super(props);
      this.state = {
          pressed: false
      };
  }
  onPressButton = () => {
      //onPressButton is a function that is created with each
      // button instance
      this.setState({ pressed: true }); 
  }; 
  render() {
      return (
          <View style={styles.container}>
              <TouchableOpacity onPress={this.onPressButton}>
                  <Text style={styles.inButton}>
                      {this.props.content}
                  </Text>  
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
  container: {
    backgroundColor: GLOBALS.COLORS.PDARK,
    padding: 10
  }
});

export { Button };
