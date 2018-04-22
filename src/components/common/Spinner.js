import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size }) => {
  //pass in prop.size
  return (
    <View style={styles.spinner}>
      {/* Recall truthy falsy, OR statement returns truthy or if both truthy,
      the first value. Therefore if no size is passed, size = undefined
      which is falsy hence ActivityIndicator component is set to 'large' */}
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export { Spinner };
