import React from 'react';
import { View, Text } from 'react-native';

import { GLOBALS } from '../../Globals';

const Card = (props) => {
  return (
    <View style={{ backgroundColor: props.color, ...styles.container }}>
      <Text style={styles.word}>
        {props.text}
      </Text>
      {props.children}
    </View>
  );
};


const styles = {
  container: {
    padding: 10
  },
  word: {
    fontSize: 14, 
    fontFamily: GLOBALS.FONT.TEXT1,
  }
};

export { Card };
