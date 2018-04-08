
import { TabNavigator } from 'react-navigation';

import Main from '../components/screens/Home/Main';
import GMap from '../components/screens/Maps/GMap';
import { GLOBALS } from '../Globals';

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
      // activeBackgroundColor: GLOBALS.COLORS.P,
      // inactiveBackgroundColor: '#fc9d9d',
      activeTintColor: GLOBALS.COLORS.ACTIVE,
      inactiveTintColor: GLOBALS.COLORS.INACTIVE,
      indicatorStyle: {
        backgroundColor: GLOBALS.COLORS.ACTIVE
      },
      style: {
        backgroundColor: GLOBALS.COLORS.PRIMARY,
      },
      labelStyle: {
        fontFamily: GLOBALS.HEADER1
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
