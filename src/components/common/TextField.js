import React from 'react';
import { TextInput, View, Text } from 'react-native';

const TextField = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    // pass in props.label, this is in destructured form...
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                //this is pretty interesting, secureTextEntry is set to undefined
                //by default which is a falsy in JSX, therefore by default it is false
                // however to initialise as true, instead of secureTextEntry={true},
                //just type secureTextEntry because that initialises it and is
                //defined and also has a value, therefore it is now truthy
                autoCorrect={false}
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                //takes in the props.value and props.onChangeText that is
                //passed as props to Input component in some component eg LoginForm.js
                // then set local value = this.props.value and
                // onChangeText = this.props.onChangeText( which is some function)
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        fontWeight: 'bold'
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { TextField };
