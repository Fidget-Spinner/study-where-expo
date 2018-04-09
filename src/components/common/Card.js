import React from 'react';
import { View, } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
            {// props.children refers to the child component of any props that is passed in to
            // Card tag/component
            // in this case it refers to the <Cardsection> component passed to Card in AlbumDetails,
            //therefore this renders the <Cardsection>...</CardSection> from AlbumDetails
            }
        </View>
        
    );
};


const styles = {
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        // FOR IOS:
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 1,

        //FOR ANDROID:
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };
