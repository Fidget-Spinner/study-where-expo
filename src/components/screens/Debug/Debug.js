import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Card } from '../../common';
import { GLOBALS } from '../../../Globals';

class Debug extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: GLOBALS.COLORS.BACKGROUND }}>
        <Card style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} color={GLOBALS.COLORS.PRIMARY}>
          <Text style={{ fontSize: 15, fontFamily: GLOBALS.FONT.TEXT1 }} >
            DEBUG:
          </Text>
        </Card>
      </View>
    );
  }
}

export default Debug;
