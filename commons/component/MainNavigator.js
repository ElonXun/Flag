'use strict';

import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Flag from './Flag';
import PostScreen from './PostScreen';
import BottomNavigator from './BottomNavigator';
import PostFlag from './PostFlag';

const MainRouters = {
    BottomNavigator: {
        name: 'BottomNavigator',
        screen: BottomNavigator,
    },
    PostScreen: {
        name: 'PostFlag',
        screen: PostFlag,
    },
    // CommentScreen: {
    // 	name: 'CommentScreen',
    // 	screen: CommentScreen,
    // },

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