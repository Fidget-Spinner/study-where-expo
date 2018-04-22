import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
  return (
    <View style={{ backgroundColor: props.color, ...styles.container }}>
      {props.children}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export { Card };
