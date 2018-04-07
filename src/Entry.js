import React, { Component } from 'react';

import { RootStack } from './routerConfigs/tabNavConfig';

class Entry extends Component {
    render() {
        return (
            //  DO NOT EDIT THIS, STACKNAVIGATORS BREAK ON ANDROID
            //  WHEN NESTED IN A VIEW
            <RootStack />
        ); 
    }
}

export default Entry;
