
import { TabNavigator } from 'react-navigation';

import Main from '../components/screens/Home/Main';
import GMap from '../components/screens/Maps/GMap';

export const RootStack = TabNavigator(
    {
        Home: {
            screen: Main,
        },
        Map: {
            screen: GMap,
        },
    },
    {
        tabBarOptions: {
            // activeBackgroundColor: '#fe7a7a',
            // inactiveBackgroundColor: '#fc9d9d',
            activeTintColor: 'white',
            inactiveTintColor: '#e2e2e2',
            indicatorStyle: {
                backgroundColor: 'white'
            },
            style: {
                backgroundColor: '#fe7a7a',
            },
            labelStyle: {
                fontFamily: 'sans-serif'
            },
            allowFontScaling: true,
          },
        initialRouteName: 'Home',
        lazyLoad: true,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    },
);
