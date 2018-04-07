
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
        initialRouteName: 'Home',
        lazyLoad: false,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    },
);
