import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Card } from '../../common';

class Debug extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Card style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 15 }} >
            DEBUG:
            </Text>
          </Card>
        </View>
      </View>
    );
  }
}

export default Debug;
