import React from 'react';
import { View, } from 'react-native';

const Card = (props) => {
  return (
    <View style={{ backgroundColor: props.color, ...styles.container }}>
      {props.children}
    </View>
  );
};


const styles = {
  container: {
    padding: 10
  }
};

export { Card };
