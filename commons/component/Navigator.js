'use strict';

import { StackNavigator } from 'react-navigation';
import Flag from './Flag';
import PostScreen from './PostScreen';
import BottomNavigator from './BottomNavigator';


const Navigator = StackNavigator({
  MainPage: { screen: BottomNavigator },
  PostPage: { screen: PostScreen },
}); 

export default Navigator;