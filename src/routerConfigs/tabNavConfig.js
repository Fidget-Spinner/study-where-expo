
import { TabNavigator } from 'react-navigation';

import Main from '../components/screens/Home/Main';
import GMap from '../components/screens/Maps/GMap';
//comment out when not testing components on this screen
import Debug from '../components/screens/Debug/Debug';
import { GLOBALS } from '../Globals';

export const RootStack = TabNavigator(
  {
    Home: {
      screen: Main,
    },
    Map: {
      screen: GMap,
    },
    //comment out when not testing components on this screen
    ComponentTester: {
      screen: Debug
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
