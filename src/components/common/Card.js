import React from 'react';
import { View, } from 'react-native';

import { GLOBALS } from '../../Globals';

const Card = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};


const styles = {
  container: {
    backgroundColor: GLOBALS.COLORS.PLIGHT,
    padding: 2
  },
};

export { Card };
