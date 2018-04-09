import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    //pass in prop.size
    return (
        <View style={styles.spinnerStyle}>
            {/* Recall truthy falsy, OR statement returns truthy or if both truthy,
            the first value. Therefore if no size is passed, size = undefined
            which is falsy hence ActivityIndicator component is set to 'large' */}
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
export { Spinner };
