import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

class Debug extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ fontSize: 15 }} >
            DEBUG:
          </Text>
        </View>
      </View>
    );
  }
}

export default Debug;
