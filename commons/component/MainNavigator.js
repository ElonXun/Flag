'use strict';

import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BottomNavigator from './BottomNavigator';
import PostFlag from './PostFlag';
import AMapScreen from './AMapScreen';
import CommentScreen from './CommentScreen';
import ProfileScreen from '../../app/screen/ProfileScreen';

const MainRouters = {
    BottomNavigator: {
        name: 'BottomNavigator',
        screen: BottomNavigator,
    },
    PostScreen: {
        name: 'PostFlag',
        screen: PostFlag,
    },
    CommentScreen: {
    	name: 'CommentScreen',
    	screen: CommentScreen,
    },
    MapScreen: {
        name: 'MapScreen',
        screen: AMapScreen,
    },
    ProfileScreen: {
        name: 'ProfileScreen',
        screen: ProfileScreen,
    }

};

const MainNavigator = StackNavigator({
  ...MainRouters,
  // Index: {
  //   screen: MainScreen,
  // },
}, {
  initialRouteName: 'BottomNavigator',
  //headerMode: 'none',

  /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

export default MainNavigator;